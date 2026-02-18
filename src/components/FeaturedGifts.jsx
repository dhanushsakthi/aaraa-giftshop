import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, ShoppingBag } from 'lucide-react';
import notebookImg from '../assets/notebook_pastel.png';
import magnetImg from '../assets/magnet_book.jpg';
import diaryImg from '../assets/diary_premium.jpg';

const FeaturedGifts = () => {
    const products = [
        {
            id: 1,
            name: "Premium Canvas Diary A5",
            price: "₹450",
            rating: 4.8,
            image: diaryImg,
            tag: "Best Seller",
            desc: "3-in-1 Phone & Card Holder with Pen"
        },
        {
            id: 2,
            name: "Pastel Button Notebook",
            price: "₹380",
            rating: 4.9,
            image: notebookImg,
            tag: "Trending",
            desc: "High Quality A5 with Magnet Button"
        },
        {
            id: 3,
            name: "Luxury Magnet Book A5",
            price: "₹520",
            rating: 5.0,
            image: magnetImg,
            tag: "Premium",
            desc: "Available in Black & Brown Leather finish"
        }
    ];

    return (
        <section id="featured" className="bg-white">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured Return Gifts</h2>
                    <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Handpicked premium return gifts perfect for weddings, baby showers, and corporate events. Our top-rated collections that leave a lasting impression.
                    </p>
                </div>

                <div className="grid-products">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-bg-soft aspect-[4/5] mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
                                {product.tag && (
                                    <span className="absolute top-4 left-4 z-10 bg-gold-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.tag}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-text-main hover:bg-gold-primary hover:text-white transition-colors shadow-xl">
                                        <Eye size={20} />
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-text-main hover:bg-gold-primary hover:text-white transition-colors shadow-xl">
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="text-center px-2">
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#D4AF37" : "none"} color="#D4AF37" />
                                    ))}
                                    <span className="text-xs text-text-muted ml-1">({product.rating})</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1 group-hover:text-gold-primary transition-colors">{product.name}</h3>
                                <p className="text-sm text-text-muted mb-3">{product.desc}</p>
                                <p className="text-gold-dark font-bold text-lg">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGifts;
