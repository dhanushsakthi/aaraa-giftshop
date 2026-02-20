import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],
        default: 1,
    },
}, { _id: true });

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    items: [cartItemSchema],
    totalAmount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

// Calculate total before saving
cartSchema.pre('save', async function (next) {
    if (this.items.length > 0) {
        const Product = mongoose.model('Product');
        const productIds = this.items.map(item => item.product);
        const products = await Product.find({ _id: { $in: productIds } });

        this.totalAmount = this.items.reduce((total, item) => {
            const product = products.find(p => p._id.toString() === item.product.toString());
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    } else {
        this.totalAmount = 0;
    }
    next();
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
