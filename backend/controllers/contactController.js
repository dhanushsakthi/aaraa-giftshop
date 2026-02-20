import Contact from '../models/Contact.js';

// @desc    Submit contact form
// @route   POST /api/contact
export const submitContact = async (req, res, next) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const contact = await Contact.create({ name, email, phone, subject, message });
        res.status(201).json({
            success: true,
            message: 'Your message has been received. We will get back to you soon!',
            data: { id: contact._id },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all contact submissions (Admin)
// @route   GET /api/contact
export const getContacts = async (req, res, next) => {
    try {
        const { status } = req.query;
        const filter = status ? { status } : {};
        const contacts = await Contact.find(filter).sort('-createdAt');
        res.json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
        next(error);
    }
};

// @desc    Update contact status (Admin)
// @route   PUT /api/contact/:id
export const updateContactStatus = async (req, res, next) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            res.status(404);
            throw new Error('Contact submission not found');
        }

        res.json({ success: true, data: contact });
    } catch (error) {
        next(error);
    }
};
