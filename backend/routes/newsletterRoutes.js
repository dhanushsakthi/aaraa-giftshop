import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import { subscribe, unsubscribe, getSubscribers } from '../controllers/newsletterController.js';

const router = express.Router();

router.post(
    '/',
    [body('email').isEmail().withMessage('Valid email is required')],
    validate,
    subscribe
);
router.post('/unsubscribe', unsubscribe);
router.get('/', protect, admin, getSubscribers);

export default router;
