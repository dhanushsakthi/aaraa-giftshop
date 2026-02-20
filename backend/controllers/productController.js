import Product from '../models/Product.js';
import APIFeatures from '../utils/apiFeatures.js';

// @desc    Get all products (with filtering, sorting, search, pagination)
// @route   GET /api/products
export const getProducts = async (req, res, next) => {
    try {
        // Count total matching documents for pagination info
        const countQuery = new APIFeatures(Product.find({ isActive: true }), req.query)
            .filter().search();
        const total = await Product.countDocuments(countQuery.query.getFilter());

        const features = new APIFeatures(Product.find({ isActive: true }), req.query)
            .filter()
            .search()
            .sort()
            .selectFields()
            .paginate();

        const products = await features.query.populate('category', 'name slug');

        res.json({
            success: true,
            count: products.length,
            total,
            page: features.page || 1,
            pages: Math.ceil(total / (features.limit || 20)),
            data: products,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single product by ID or slug
// @route   GET /api/products/:id
export const getProduct = async (req, res, next) => {
    try {
        let product;
        // Check if param is an ObjectId or slug
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            product = await Product.findById(req.params.id).populate('category', 'name slug');
        } else {
            product = await Product.findOne({ slug: req.params.id }).populate('category', 'name slug');
        }

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

// @desc    Get featured products
// @route   GET /api/products/featured
export const getFeaturedProducts = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 8;
        const products = await Product.find({ isFeatured: true, isActive: true })
            .populate('category', 'name slug')
            .limit(limit)
            .sort('-createdAt');

        res.json({ success: true, count: products.length, data: products });
    } catch (error) {
        next(error);
    }
};

// @desc    Get best sellers
// @route   GET /api/products/bestsellers
export const getBestSellers = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 6;
        const products = await Product.find({ isActive: true, tags: 'Best Seller' })
            .populate('category', 'name slug')
            .limit(limit)
            .sort('-numReviews');

        res.json({ success: true, count: products.length, data: products });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a product (Admin)
// @route   POST /api/products
export const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a product (Admin)
// @route   PUT /api/products/:id
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        res.json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a product (Admin)
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        next(error);
    }
};

// @desc    Get products by category
// @route   GET /api/products/category/:categoryId
export const getProductsByCategory = async (req, res, next) => {
    try {
        const features = new APIFeatures(
            Product.find({ category: req.params.categoryId, isActive: true }),
            req.query
        ).filter().sort().paginate();

        const products = await features.query.populate('category', 'name slug');
        const total = await Product.countDocuments({ category: req.params.categoryId, isActive: true });

        res.json({
            success: true,
            count: products.length,
            total,
            page: features.page || 1,
            pages: Math.ceil(total / (features.limit || 20)),
            data: products,
        });
    } catch (error) {
        next(error);
    }
};
