import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Premium Corporate Set - Sr 171",
        description: "Elegant matte black box with leather diary, pen, and flask set.",
        price: "₹1,299",
        image: "https://images.unsplash.com/photo-1544411047-c491e34a2450?auto=format&fit=crop&q=80&w=600",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Classic Blue Executive - Sr 183",
        description: "Navy blue themed gift set with professional diary and tumbler.",
        price: "₹1,199",
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=600",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Royal Red Journal Set - Sr 184",
        description: "Vibrant red journal and accessory set for special celebrations.",
        price: "₹1,099",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238da48?auto=format&fit=crop&q=80&w=600",
        tag: "Trending"
    },
    {
        id: 4,
        name: "Minimalist White Favor - Sr 182",
        description: "Pure white luxury gift set, perfect for wedding favors.",
        price: "₹1,249",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=600",
        tag: "Premium"
    },
    {
        id: 5,
        name: "Eco-Friendly Jute Favor",
        description: "Handcrafted traditional jute bags with floral embroidery.",
        price: "₹249",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600",
        tag: "Traditional"
    },
    {
        id: 6,
        name: "Traditional Brass Deepak",
        description: "Handcrafted brass oil lamp with intricate peacock design.",
        price: "₹899",
        image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=600",
        tag: "Festival"
    }
];

const FeaturedGifts = () => {
    return (
        <section id="categories" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 text-left">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Curated Collections</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Featured <span className="text-primary italic">Treasures</span></h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-500 max-w-md md:text-right">
                        Explore our most loved return gifts, chosen for their quality and
                        exquisite Indian craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                                        {product.tag}
                                    </span>
                                </div>

                                {/* Overlay Icons */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                        <Heart size={20} />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                        <Eye size={20} />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={12} className="text-[#FFD700]" fill="#FFD700" />
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1 italic font-serif text-left">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 text-left">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center justify-between border-t border-gray-100 mt-auto">
                                    <span className="text-2xl font-bold text-primary italic font-serif leading-none">{product.price}</span>
                                    <button className="text-sm font-bold text-gray-900 hover:text-primary transition-colors underline decoration-2 underline-offset-4 tracking-wider uppercase">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGifts;
