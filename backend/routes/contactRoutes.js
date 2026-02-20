import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import { submitContact, getContacts, updateContactStatus } from '../controllers/contactController.js';

const router = express.Router();

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('subject').notEmpty().withMessage('Subject is required'),
        body('message').notEmpty().withMessage('Message is required'),
    ],
    validate,
    submitContact
);

router.get('/', protect, admin, getContacts);
router.put('/:id', protect, admin, updateContactStatus);

export default router;
