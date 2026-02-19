import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdf2f2]/50 -skew-x-12 transform translate-x-20 z-0"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-0 opacity-60"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-[0.15em] uppercase border border-primary/10"
                        >
                            <Star size={14} fill="currentColor" />
                            <span>Premium Return Gift Collections</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold font-serif leading-[1] text-gray-900 tracking-tight"
                        >
                            The Joy of <br />
                            <span className="text-primary italic">Elegant Gifting</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Curating excellence since 2012. Handcrafted return gifts that transform
                            your celebrations into timeless memories.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-6"
                        >
                            <button
                                onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl shadow-primary/30 hover:bg-[#70091b] hover:scale-105 active:scale-95 transition-all transform-gpu flex items-center justify-center gap-3 group"
                            >
                                Shop Collection
                                <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform duration-500" />
                            </button>
                            <button
                                onClick={() => document.getElementById('occasions').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-12 py-5 bg-white text-gray-800 border-[1.5px] border-gray-100 rounded-full font-bold text-lg hover:border-primary/30 hover:bg-gray-50 active:scale-95 transition-all transform-gpu flex items-center justify-center gap-3 group"
                            >
                                Our Occasions
                                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className="flex items-center gap-12 pt-12 justify-center lg:justify-start"
                        >
                            <div className="space-y-1">
                                <span className="block text-3xl font-bold text-gray-900 tracking-tighter">800+</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Products</span>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-100"></div>
                            <div className="space-y-1">
                                <span className="block text-3xl font-bold text-gray-900 tracking-tighter">15k+</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Deliveries</span>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-100"></div>
                            <div className="space-y-1">
                                <span className="block text-3xl font-bold text-gray-900 tracking-tighter">4.9/5</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">User Rating</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative aspect-square max-w-2xl mx-auto group"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] group-hover:scale-105 transition-transform duration-1000 -rotate-6 z-0 blur-xl"></div>

                            <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-premium border-[8px] border-white transform-gpu group-hover:rotate-1 transition-transform duration-1000">
                                <img
                                    src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1200"
                                    alt="Premium Gifting"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Floating Premium Badge */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-8 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-primary/5"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center text-white shadow-xl shadow-gold/20">
                                        <Star size={32} fill="white" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="block font-bold text-gray-900 text-lg">Elite Collection</span>
                                        <span className="text-xs text-primary font-bold uppercase tracking-widest">Aura of Luxury</span>
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
