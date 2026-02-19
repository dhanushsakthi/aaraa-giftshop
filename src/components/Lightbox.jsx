import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, image, title }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
                onClick={onClose}
            >
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                >
                    <X size={32} />
                </motion.button>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-white/5">
                        <motion.img
                            src={image}
                            alt={title}
                            className="max-h-[75vh] w-auto object-contain"
                            layoutId={`product-image-${image}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold text-white font-serif italic">{title}</h3>
                        <p className="text-white/60 text-sm tracking-widest uppercase">Premium Collection • Sr-Series</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                            <ZoomIn size={20} />
                        </button>
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                            <ZoomOut size={20} />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
