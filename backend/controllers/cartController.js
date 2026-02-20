import Cart from '../models/Cart.js';

// @desc    Get user cart
// @route   GET /api/cart
export const getCart = async (req, res, next) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id })
            .populate('items.product', 'name price images stock slug sku');

        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        res.json({ success: true, data: cart });
    } catch (error) {
        next(error);
    }
};

// @desc    Add item to cart
// @route   POST /api/cart
export const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity = 1 } = req.body;

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({ user: req.user._id, items: [] });
        }

        // Check if product already in cart
        const existingItem = cart.items.find(
            item => item.product.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();

        // Populate before returning
        await cart.populate('items.product', 'name price images stock slug sku');

        res.json({ success: true, data: cart });
    } catch (error) {
        next(error);
    }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
export const updateCartItem = async (req, res, next) => {
    try {
        const { quantity } = req.body;
        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            res.status(404);
            throw new Error('Cart not found');
        }

        const item = cart.items.id(req.params.itemId);
        if (!item) {
            res.status(404);
            throw new Error('Item not found in cart');
        }

        if (quantity <= 0) {
            cart.items.pull(req.params.itemId);
        } else {
            item.quantity = quantity;
        }

        await cart.save();
        await cart.populate('items.product', 'name price images stock slug sku');

        res.json({ success: true, data: cart });
    } catch (error) {
        next(error);
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
export const removeFromCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            res.status(404);
            throw new Error('Cart not found');
        }

        cart.items.pull(req.params.itemId);
        await cart.save();
        await cart.populate('items.product', 'name price images stock slug sku');

        res.json({ success: true, data: cart });
    } catch (error) {
        next(error);
    }
};

// @desc    Clear cart
// @route   DELETE /api/cart
export const clearCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });

        if (cart) {
            cart.items = [];
            await cart.save();
        }

        res.json({ success: true, data: cart || { items: [], totalAmount: 0 } });
    } catch (error) {
        next(error);
    }
};
