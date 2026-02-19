import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Baby, Building2, PartyPopper, CalendarDays, Truck, ShieldCheck, Zap, Handshake } from 'lucide-react';

const occasions = [
    {
        id: 1,
        title: "Wedding Favors",
        icon: <Heart className="w-8 h-8" />,
        description: "Elegant return gifts to make your big day memorable for every guest.",
        color: "bg-[#7b0f26]"
    },
    {
        id: 2,
        title: "Baby Shower",
        icon: <Baby className="w-8 h-8" />,
        description: "Cute and practical gifts to celebrate your little one's arrival.",
        color: "bg-[#91132D]"
    },
    {
        id: 3,
        title: "Corporate Gifting",
        icon: <Building2 className="w-8 h-8" />,
        description: "Premium professional gifts that leave a lasting impression on clients.",
        color: "bg-[#7b0f26]"
    },
    {
        id: 4,
        title: "Housewarming",
        icon: <Gift className="w-8 h-8" />,
        description: "Traditional and modern gifts for a warm welcome to new beginnings.",
        color: "bg-[#91132D]"
    },
    {
        id: 5,
        title: "Birthdays",
        icon: <PartyPopper className="w-8 h-8" />,
        description: "Fun and personalized favors for birthday celebrations of all ages.",
        color: "bg-[#7b0f26]"
    },
    {
        id: 6,
        title: "Engagement",
        icon: <CalendarDays className="w-8 h-8" />,
        description: "Sophisticated gifts to celebrate the beautiful promise of forever.",
        color: "bg-[#91132D]"
    }
];

export const Occasions = () => {
    return (
        <section id="occasions" className="py-32 bg-[#fffafa]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold uppercase tracking-[0.25em] text-xs italic"
                    >
                        Celebrations Refined
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif tracking-tight">
                        Gifts for All <span className="text-primary italic">Occasions</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    <p className="text-gray-500 pt-4 text-lg leading-relaxed">
                        Curated experiences for life's most precious milestones.
                        Choose excellence for your special moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {occasions.map((occasion, index) => (
                        <motion.div
                            key={occasion.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-50 group flex flex-col items-center text-center transform-gpu"
                        >
                            <div className={`${occasion.color} w-24 h-24 rounded-[2rem] flex items-center justify-center text-white mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary/10`}>
                                {React.cloneElement(occasion.icon, { size: 36 })}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic group-hover:text-primary transition-colors">
                                {occasion.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-8 font-medium italic">
                                "{occasion.description}"
                            </p>
                            <button className="text-[11px] font-bold text-gray-900 hover:text-primary transition-colors underline decoration-primary/20 decoration-2 underline-offset-8 tracking-[0.2em] uppercase">
                                Explore Collection
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TrustSection = () => {
    const features = [
        { icon: <Handshake className="text-primary" size={36} />, title: "Bulk Support", desc: "Special pricing for 100+ units" },
        { icon: <Zap className="text-primary" size={36} />, title: "Personalization", desc: "Customized tags & packaging" },
        { icon: <Truck className="text-primary" size={36} />, title: "Safe Delivery", desc: "Breakage-free Pan India" },
        { icon: <ShieldCheck className="text-primary" size={36} />, title: "Premium Quality", desc: "Handpicked collections" }
    ];

    return (
        <section className="bg-white py-24 border-t border-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-6 group"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-[#fffafa] rounded-3xl shadow-premium border border-primary/5 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500 transform-gpu">
                                {f.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{f.title}</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
