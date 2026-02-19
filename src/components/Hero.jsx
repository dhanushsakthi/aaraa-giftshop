import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#FAFAFA]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdf2f2] -skew-x-12 transform translate-x-20 z-0"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase"
                        >
                            <Star size={16} fill="currentColor" />
                            <span>India's Premium Return Gift Shop</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold font-serif leading-[1.1] text-gray-900"
                        >
                            The Joy of <br />
                            <span className="text-primary italic">Elegant Gifting</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Discover our curated collection of premium return gifts for weddings,
                            baby showers, and corporate events. Handcrafted with love to make
                            your special moments unforgettable.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
                        >
                            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:bg-[#7b0f26] hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                                Shop Collection
                                <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-primary/20 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                                Our Categories
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex items-center gap-8 pt-8 justify-center lg:justify-start"
                        >
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900">500+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Products</span>
                            </div>
                            <div className="w-[1px] h-10 bg-gray-200"></div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900">10k+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Happy Clients</span>
                            </div>
                            <div className="w-[1px] h-10 bg-gray-200"></div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900">4.9/5</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Store Rating</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square max-w-xl mx-auto"
                        >
                            {/* Main Image placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-6 z-0"></div>
                            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Premium Gifting"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 p-6 bg-white rounded-2xl shadow-2xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-white">
                                        <Star size={24} fill="white" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-gray-900">Best Seller</span>
                                        <span className="text-sm text-gray-500 italic">Wedding Favorites</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
