import Newsletter from '../models/Newsletter.js';

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
export const subscribe = async (req, res, next) => {
    try {
        const { email } = req.body;

        const existing = await Newsletter.findOne({ email });
        if (existing) {
            if (existing.isActive) {
                return res.json({ success: true, message: 'You are already subscribed!' });
            }
            // Re-activate
            existing.isActive = true;
            await existing.save();
            return res.json({ success: true, message: 'Welcome back! Subscription reactivated.' });
        }

        await Newsletter.create({ email });
        res.status(201).json({ success: true, message: 'Successfully subscribed to newsletter!' });
    } catch (error) {
        next(error);
    }
};

// @desc    Unsubscribe from newsletter
// @route   POST /api/newsletter/unsubscribe
export const unsubscribe = async (req, res, next) => {
    try {
        const { email } = req.body;
        const subscriber = await Newsletter.findOne({ email });

        if (!subscriber) {
            res.status(404);
            throw new Error('Email not found in subscribers');
        }

        subscriber.isActive = false;
        await subscriber.save();

        res.json({ success: true, message: 'Successfully unsubscribed' });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all subscribers (Admin)
// @route   GET /api/newsletter
export const getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Newsletter.find({ isActive: true }).sort('-subscribedAt');
        res.json({ success: true, count: subscribers.length, data: subscribers });
    } catch (error) {
        next(error);
    }
};
