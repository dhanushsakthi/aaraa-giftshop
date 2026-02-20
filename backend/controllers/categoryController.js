import Category from '../models/Category.js';

// @desc    Get all categories (with subcategories)
// @route   GET /api/categories
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({ parent: null, isActive: true })
            .populate({
                path: 'subcategories',
                match: { isActive: true },
                options: { sort: { displayOrder: 1 } },
            })
            .sort('displayOrder');

        res.json({ success: true, count: categories.length, data: categories });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all categories flat (for dropdowns/admin)
// @route   GET /api/categories/all
export const getAllCategoriesFlat = async (req, res, next) => {
    try {
        const categories = await Category.find({ isActive: true })
            .populate('parent', 'name slug')
            .sort('displayOrder');

        res.json({ success: true, count: categories.length, data: categories });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single category by slug
// @route   GET /api/categories/:slug
export const getCategory = async (req, res, next) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug })
            .populate({
                path: 'subcategories',
                match: { isActive: true },
            });

        if (!category) {
            res.status(404);
            throw new Error('Category not found');
        }

        res.json({ success: true, data: category });
    } catch (error) {
        next(error);
    }
};

// @desc    Create category (Admin)
// @route   POST /api/categories
export const createCategory = async (req, res, next) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({ success: true, data: category });
    } catch (error) {
        next(error);
    }
};

// @desc    Update category (Admin)
// @route   PUT /api/categories/:id
export const updateCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!category) {
            res.status(404);
            throw new Error('Category not found');
        }

        res.json({ success: true, data: category });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete category (Admin)
// @route   DELETE /api/categories/:id
export const deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            res.status(404);
            throw new Error('Category not found');
        }

        // Also deactivate subcategories
        await Category.updateMany({ parent: req.params.id }, { isActive: false });

        res.json({ success: true, message: 'Category deleted' });
    } catch (error) {
        next(error);
    }
};
