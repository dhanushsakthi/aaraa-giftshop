import mongoose from 'mongoose';
import slugify from 'slugify';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [200, 'Product name cannot exceed 200 characters'],
    },
    slug: {
        type: String,
        unique: true,
        index: true,
    },
    sku: {
        type: String,
        unique: true,
        required: [true, 'SKU is required'],
        uppercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    shortDescription: {
        type: String,
        maxlength: [300, 'Short description cannot exceed 300 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    compareAtPrice: {
        type: Number,
        min: [0, 'Compare price cannot be negative'],
        default: null,
    },
    images: [{
        url: { type: String, required: true },
        alt: { type: String, default: '' },
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
    },
    tags: [{
        type: String,
        enum: ['Best Seller', 'New Arrival', 'Premium', 'Festival', 'Trending', 'Sale', 'Eco-Friendly', 'Customizable'],
    }],
    productType: {
        type: String,
        required: [true, 'Product type is required'],
        trim: true,
    },
    material: {
        type: String,
        trim: true,
    },
    dimensions: {
        type: String,
        trim: true,
    },
    weight: {
        type: String,
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0,
    },
    minOrderQuantity: {
        type: Number,
        default: 1,
        min: 1,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

// Auto-generate slug from name
productSchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

// Text index for search
productSchema.index({ name: 'text', description: 'text', productType: 'text' });
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ tags: 1 });
productSchema.index({ isFeatured: 1, isActive: 1 });

const Product = mongoose.model('Product', productSchema);
export default Product;
