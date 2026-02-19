import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import Lightbox from './Lightbox';

const products = [
    {
        id: 1,
        name: "Premium Corporate Set - Sr 171",
        description: "Elegant matte black box with leather diary, pen, and flask set.",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1544411047-c491e34a2450?auto=format&fit=crop&q=80&w=800",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Classic Blue Executive - Sr 183",
        description: "Navy blue themed gift set with professional diary and tumbler.",
        price: "₹1,199",
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Royal Red Journal Set - Sr 184",
        description: "Vibrant red journal and accessory set for special celebrations.",
        price: "₹1,099",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238da48?auto=format&fit=crop&q=80&w=800",
        tag: "Trending"
    },
    {
        id: 4,
        name: "Minimalist White Favor - Sr 182",
        description: "Pure white luxury gift set, perfect for wedding favors.",
        price: "₹1,249",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800",
        tag: "Premium"
    },
    {
        id: 5,
        name: "Eco-Friendly Jute Favor",
        description: "Handcrafted traditional jute bags with floral embroidery.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
        tag: "Traditional"
    },
    {
        id: 6,
        name: "Traditional Brass Deepak",
        description: "Handcrafted brass oil lamp with intricate peacock design.",
        price: "₹899",
        image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=800",
        tag: "Festival"
    }
];

const FeaturedGifts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (product) => {
        setSelectedProduct(product);
        setIsLightboxOpen(true);
    };

    return (
        <section id="categories" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 text-left">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm italic">Curated Collections</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Featured <span className="text-primary italic">Treasures</span></h2>
                        <div className="w-24 h-1.5 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-500 max-w-md md:text-right text-sm leading-relaxed">
                        Explore our most loved return gifts, chosen for their quality and
                        exquisite Indian craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group bg-white rounded-[2rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col h-full transform-gpu"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => openLightbox(product)}>
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    layoutId={`product-image-${product.image}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg border border-primary/10">
                                        {product.tag}
                                    </span>
                                </div>

                                {/* Overlay Icons - GPU friendly animations */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 shadow-xl flex items-center justify-center">
                                        <Heart size={20} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); openLightbox(product); }}
                                        className="w-14 h-14 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-75 shadow-xl flex items-center justify-center"
                                    >
                                        <Eye size={24} />
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-150 shadow-xl flex items-center justify-center">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={14} className="text-[#d4af37]" fill="#d4af37" />
                                        ))}
                                        <span className="text-[10px] text-gray-400 font-bold ml-2 uppercase tracking-tight">4.9 (120 Reviews)</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1 italic font-serif text-left">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 text-left leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="pt-6 flex items-center justify-between border-t border-gray-50 mt-auto">
                                    <span className="text-2xl font-bold text-primary italic font-serif leading-none tracking-tight">{product.price}</span>
                                    <button className="text-[11px] font-bold text-gray-900 hover:text-primary transition-colors underline decoration-primary/30 decoration-2 underline-offset-8 tracking-widest uppercase">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                image={selectedProduct?.image}
                title={selectedProduct?.name}
            />
        </section>
    );
};

export default FeaturedGifts;
