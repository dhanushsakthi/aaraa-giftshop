import Review from '../models/Review.js';

// @desc    Get reviews for a product
// @route   GET /api/reviews/product/:productId
export const getProductReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ product: req.params.productId })
            .populate('user', 'name')
            .sort('-createdAt');

        res.json({ success: true, count: reviews.length, data: reviews });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a review
// @route   POST /api/reviews
export const createReview = async (req, res, next) => {
    try {
        const { productId, rating, title, comment } = req.body;

        // Check if user already reviewed this product
        const existingReview = await Review.findOne({
            user: req.user._id,
            product: productId,
        });

        if (existingReview) {
            res.status(400);
            throw new Error('You have already reviewed this product');
        }

        const review = await Review.create({
            user: req.user._id,
            product: productId,
            rating,
            title,
            comment,
        });

        await review.populate('user', 'name');

        res.status(201).json({ success: true, data: review });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a review
// @route   PUT /api/reviews/:id
export const updateReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            res.status(404);
            throw new Error('Review not found');
        }

        if (review.user.toString() !== req.user._id.toString()) {
            res.status(403);
            throw new Error('You can only update your own reviews');
        }

        const { rating, title, comment } = req.body;
        if (rating) review.rating = rating;
        if (title) review.title = title;
        if (comment) review.comment = comment;

        const updatedReview = await review.save();
        await updatedReview.populate('user', 'name');

        res.json({ success: true, data: updatedReview });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
export const deleteReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            res.status(404);
            throw new Error('Review not found');
        }

        // Allow user or admin to delete
        if (review.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            res.status(403);
            throw new Error('Not authorized to delete this review');
        }

        await Review.findByIdAndDelete(req.params.id);

        res.json({ success: true, message: 'Review deleted' });
    } catch (error) {
        next(error);
    }
};
