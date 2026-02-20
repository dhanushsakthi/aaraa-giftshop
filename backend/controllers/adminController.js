import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Contact from '../models/Contact.js';
import Newsletter from '../models/Newsletter.js';

// @desc    Get admin dashboard stats
// @route   GET /api/admin/dashboard
export const getDashboard = async (req, res, next) => {
    try {
        const [
            totalProducts,
            totalUsers,
            totalOrders,
            totalSubscribers,
            pendingContacts,
            recentOrders,
            revenueResult,
        ] = await Promise.all([
            Product.countDocuments({ isActive: true }),
            User.countDocuments({ role: 'customer' }),
            Order.countDocuments(),
            Newsletter.countDocuments({ isActive: true }),
            Contact.countDocuments({ status: 'New' }),
            Order.find().sort('-createdAt').limit(5).populate('user', 'name email'),
            Order.aggregate([
                { $match: { isPaid: true } },
                { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
            ]),
        ]);

        const totalRevenue = revenueResult.length > 0 ? revenueResult[0].totalRevenue : 0;

        // Order status breakdown
        const ordersByStatus = await Order.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } },
        ]);

        res.json({
            success: true,
            data: {
                stats: {
                    totalProducts,
                    totalUsers,
                    totalOrders,
                    totalRevenue,
                    totalSubscribers,
                    pendingContacts,
                },
                ordersByStatus,
                recentOrders,
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all orders (Admin)
// @route   GET /api/admin/orders
export const getAllOrders = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;
        const filter = status ? { status } : {};

        const total = await Order.countDocuments(filter);
        const orders = await Order.find(filter)
            .populate('user', 'name email phone')
            .sort('-createdAt')
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({
            success: true,
            count: orders.length,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
            data: orders,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update order status (Admin)
// @route   PUT /api/admin/orders/:id
export const updateOrderStatus = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            res.status(404);
            throw new Error('Order not found');
        }

        const { status } = req.body;
        order.status = status;

        if (status === 'Delivered') {
            order.isDelivered = true;
            order.deliveredAt = Date.now();
        }

        const updatedOrder = await order.save();
        res.json({ success: true, data: updatedOrder });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all users (Admin)
// @route   GET /api/admin/users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password').sort('-createdAt');
        res.json({ success: true, count: users.length, data: users });
    } catch (error) {
        next(error);
    }
};

// @desc    Toggle user active status (Admin)
// @route   PUT /api/admin/users/:id
export const toggleUserStatus = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            res.status(404);
            throw new Error('User not found');
        }

        user.isActive = !user.isActive;
        await user.save();

        res.json({
            success: true,
            message: `User ${user.isActive ? 'activated' : 'deactivated'}`,
            data: { _id: user._id, name: user.name, isActive: user.isActive },
        });
    } catch (error) {
        next(error);
    }
};
