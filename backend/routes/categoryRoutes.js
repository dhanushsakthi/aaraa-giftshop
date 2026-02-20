import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import {
    getCategories,
    getAllCategoriesFlat,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController.js';

const router = express.Router();

// Public
router.get('/', getCategories);
router.get('/all', getAllCategoriesFlat);
router.get('/:slug', getCategory);

// Admin
router.post(
    '/',
    protect,
    admin,
    [body('name').notEmpty().withMessage('Category name is required')],
    validate,
    createCategory
);
router.put('/:id', protect, admin, updateCategory);
router.delete('/:id', protect, admin, deleteCategory);

export default router;
