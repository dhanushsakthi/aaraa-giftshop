import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import {
    getProducts,
    getProduct,
    getFeaturedProducts,
    getBestSellers,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
} from '../controllers/productController.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/bestsellers', getBestSellers);
router.get('/category/:categoryId', getProductsByCategory);
router.get('/:id', getProduct);

// Admin routes
router.post(
    '/',
    protect,
    admin,
    [
        body('name').notEmpty().withMessage('Product name is required'),
        body('sku').notEmpty().withMessage('SKU is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('price').isNumeric().withMessage('Price must be a number'),
        body('category').notEmpty().withMessage('Category is required'),
        body('productType').notEmpty().withMessage('Product type is required'),
    ],
    validate,
    createProduct
);

router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
