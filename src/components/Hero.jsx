import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import diaryImg from '../assets/diary_premium.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-soft">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-pastel-pink/30 -skew-x-12 transform origin-top-right z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

            <div className="container px-4 z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-gold-primary/10 text-gold-dark font-semibold text-sm mb-6 tracking-wide uppercase">
                        Premium Return Gifts Collection
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-text-main leading-tight mb-6">
                        Make Every Celebration <br />
                        <span className="text-gold-primary italic">Unforgettable</span>
                    </h1>
                    <p className="text-lg text-text-muted mb-10 max-w-xl">
                        Aaraa Gift Shop specializes in exquisite return gifts and wedding favors that reflect your elegance and gratitude. Discover our curated collection of handmade and premium gifts.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <button className="btn-primary flex items-center gap-2 group">
                            Explore Return Gifts
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="py-3 px-8 border-2 border-gold-primary text-gold-primary font-semibold rounded-4px hover:bg-gold-primary hover:text-white transition-all">
                            Custom Orders
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative w-full max-w-lg"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src={diaryImg}
                            alt="Premium Return Gifts"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-primary/20 rounded-full z-0 animate-pulse" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pastel-cream rounded-lg z-0 rotate-12 shadow-lg" />

                    <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl hidden lg:block border border-gray-100 animate-bounce-slow">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gold-primary rounded-full flex items-center justify-center text-white">
                                <span className="text-xs font-bold">500+</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-800">Unique Items</p>
                                <p className="text-[10px] text-gray-500">Curated for you</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
        .rounded-4px { border-radius: 4px; }
      `}} />
        </section>
    );
};

export default Hero;
