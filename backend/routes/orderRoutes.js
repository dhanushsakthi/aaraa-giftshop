import express from 'express';
import { protect } from '../middleware/auth.js';
import {
    createOrder,
    getMyOrders,
    getOrder,
    updateOrderToPaid,
    cancelOrder,
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getMyOrders);
router.get('/:id', protect, getOrder);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/cancel', protect, cancelOrder);

export default router;
