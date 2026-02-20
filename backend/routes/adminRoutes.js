import express from 'express';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import {
    getDashboard,
    getAllOrders,
    updateOrderStatus,
    getAllUsers,
    toggleUserStatus,
} from '../controllers/adminController.js';

const router = express.Router();

// All admin routes require auth + admin role
router.use(protect, admin);

router.get('/dashboard', getDashboard);
router.get('/orders', getAllOrders);
router.put('/orders/:id', updateOrderStatus);
router.get('/users', getAllUsers);
router.put('/users/:id', toggleUserStatus);

export default router;
