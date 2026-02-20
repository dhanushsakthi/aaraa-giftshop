import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// @desc    Create new order
// @route   POST /api/orders
export const createOrder = async (req, res, next) => {
    try {
        const { shippingAddress, paymentMethod, notes } = req.body;

        // Get user cart
        const cart = await Cart.findOne({ user: req.user._id })
            .populate('items.product', 'name price images stock');

        if (!cart || cart.items.length === 0) {
            res.status(400);
            throw new Error('Cart is empty');
        }

        // Validate stock
        for (const item of cart.items) {
            if (item.product.stock < item.quantity) {
                res.status(400);
                throw new Error(`Insufficient stock for ${item.product.name}. Available: ${item.product.stock}`);
            }
        }

        // Build order items
        const orderItems = cart.items.map(item => ({
            product: item.product._id,
            name: item.product.name,
            image: item.product.images?.[0]?.url || '',
            price: item.product.price,
            quantity: item.quantity,
        }));

        const itemsPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const taxPrice = Math.round(itemsPrice * 0.18 * 100) / 100; // 18% GST
        const shippingPrice = itemsPrice >= 999 ? 0 : 99; // Free shipping over ₹999
        const totalPrice = itemsPrice + taxPrice + shippingPrice;

        const order = await Order.create({
            user: req.user._id,
            items: orderItems,
            shippingAddress,
            paymentMethod: paymentMethod || 'COD',
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            notes,
        });

        // Reduce stock
        for (const item of cart.items) {
            await Product.findByIdAndUpdate(item.product._id, {
                $inc: { stock: -item.quantity },
            });
        }

        // Clear cart
        cart.items = [];
        await cart.save();

        res.status(201).json({ success: true, data: order });
    } catch (error) {
        next(error);
    }
};

// @desc    Get logged-in user's orders
// @route   GET /api/orders
export const getMyOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .sort('-createdAt')
            .populate('items.product', 'name slug images');

        res.json({ success: true, count: orders.length, data: orders });
    } catch (error) {
        next(error);
    }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email phone')
            .populate('items.product', 'name slug images');

        if (!order) {
            res.status(404);
            throw new Error('Order not found');
        }

        // Ensure user can only see their own orders (unless admin)
        if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            res.status(403);
            throw new Error('Not authorized to view this order');
        }

        res.json({ success: true, data: order });
    } catch (error) {
        next(error);
    }
};

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
export const updateOrderToPaid = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            res.status(404);
            throw new Error('Order not found');
        }

        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            updateTime: req.body.updateTime,
        };

        const updatedOrder = await order.save();
        res.json({ success: true, data: updatedOrder });
    } catch (error) {
        next(error);
    }
};

// @desc    Cancel order
// @route   PUT /api/orders/:id/cancel
export const cancelOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            res.status(404);
            throw new Error('Order not found');
        }

        if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            res.status(403);
            throw new Error('Not authorized');
        }

        if (['Shipped', 'Delivered'].includes(order.status)) {
            res.status(400);
            throw new Error('Cannot cancel order that has been shipped or delivered');
        }

        order.status = 'Cancelled';

        // Restore stock
        for (const item of order.items) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: item.quantity },
            });
        }

        const updatedOrder = await order.save();
        res.json({ success: true, data: updatedOrder });
    } catch (error) {
        next(error);
    }
};
