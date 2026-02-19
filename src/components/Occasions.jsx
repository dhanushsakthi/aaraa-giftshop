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
        <section id="occasions" className="py-24 bg-[#FDF2F2]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm italic">Gift for every moment</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Gifts for All <span className="text-primary italic">Occasions</span></h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    <p className="text-gray-600 pt-4">
                        Whether it's a grand wedding or an intimate birthday celebration,
                        we have the perfect return gift to match your style and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {occasions.map((occasion, index) => (
                        <motion.div
                            key={occasion.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group flex flex-col items-center text-center"
                        >
                            <div className={`${occasion.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20`}>
                                {occasion.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic group-hover:text-primary transition-colors">
                                {occasion.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                {occasion.description}
                            </p>
                            <button className="text-primary font-bold text-sm uppercase tracking-widest hover:underline decoration-2 underline-offset-8 transition-all">
                                Explore Gifts
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
        { icon: <Handshake className="text-primary" size={32} />, title: "Bulk Order Support", desc: "Special pricing for 100+ units" },
        { icon: <Zap className="text-primary" size={32} />, title: "Customization", desc: "Personalized tags & packaging" },
        { icon: <Truck className="text-primary" size={32} />, title: "Safe Shipping", desc: "Pan India breakage-free delivery" },
        { icon: <ShieldCheck className="text-primary" size={32} />, title: "Quality Assurance", desc: "Premium handpicked collections" }
    ];

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="p-5 bg-[#FDF2F2] rounded-full shadow-inner group transition-colors">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
