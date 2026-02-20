import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/auth/register
export const register = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400);
            throw new Error('User with this email already exists');
        }

        const user = await User.create({ name, email, password, phone });

        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token: generateToken(user._id),
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Login user
// @route   POST /api/auth/login
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.matchPassword(password))) {
            res.status(401);
            throw new Error('Invalid email or password');
        }

        if (!user.isActive) {
            res.status(401);
            throw new Error('Your account has been deactivated. Contact support.');
        }

        res.json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token: generateToken(user._id),
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
export const getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        res.json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                addresses: user.addresses,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
export const updateProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).select('+password');
        const { name, email, phone, password } = req.body;

        if (name) user.name = name;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (password) user.password = password;

        const updatedUser = await user.save();

        res.json({
            success: true,
            data: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                role: updatedUser.role,
                token: generateToken(updatedUser._id),
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Add shipping address
// @route   POST /api/auth/address
export const addAddress = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        // If first address or marked as default, set as default
        if (user.addresses.length === 0 || req.body.isDefault) {
            user.addresses.forEach(addr => { addr.isDefault = false; });
            req.body.isDefault = true;
        }

        user.addresses.push(req.body);
        await user.save();

        res.status(201).json({ success: true, data: user.addresses });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete shipping address
// @route   DELETE /api/auth/address/:addressId
export const deleteAddress = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        user.addresses = user.addresses.filter(
            addr => addr._id.toString() !== req.params.addressId
        );
        await user.save();

        res.json({ success: true, data: user.addresses });
    } catch (error) {
        next(error);
    }
};
