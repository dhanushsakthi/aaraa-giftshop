import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import {
    getProductReviews,
    createReview,
    updateReview,
    deleteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/product/:productId', getProductReviews);

router.post(
    '/',
    protect,
    [
        body('productId').notEmpty().withMessage('Product ID is required'),
        body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
        body('comment').notEmpty().withMessage('Comment is required'),
    ],
    validate,
    createReview
);

router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

export default router;
