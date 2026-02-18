import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Zap, Handshake } from 'lucide-react';

export const Occasions = () => {
    const occasions = [
        { title: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" },
        { title: "Baby Shower", img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=400&q=80" },
        { title: "Housewarming", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80" },
        { title: "Corporate", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80" },
        { title: "Anniversary", img: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&w=400&q=80" },
        { title: "Festivals", img: "https://images.unsplash.com/photo-1514336025256-42777f987258?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <section id="occasions" className="bg-bg-soft">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Gifts by Occasion</h2>
                    <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {occasions.map((occ, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <img src={occ.img} alt={occ.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6">
                                <span className="text-white font-bold tracking-wide">{occ.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TrustSection = () => {
    const features = [
        { icon: <Handshake className="text-gold-primary" />, title: "Bulk Order Support", desc: "Special pricing for 100+ units" },
        { icon: <Zap className="text-gold-primary" />, title: "Customization", desc: "Personalized tags & packaging" },
        { icon: <Truck className="text-gold-primary" />, title: "Safe Shipping", desc: "Pan India breakage-free delivery" },
        { icon: <ShieldCheck className="text-gold-primary" />, title: "Quality Assurance", desc: "Premium handpicked collections" }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-soft border border-gray-100 hover:border-gold-light transition-colors">
                            <div className="mb-4 p-4 bg-white rounded-full shadow-sm">{f.icon}</div>
                            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                            <p className="text-sm text-text-muted">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
