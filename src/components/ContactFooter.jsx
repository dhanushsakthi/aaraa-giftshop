import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Star } from 'lucide-react';

export const Testimonials = () => {
    const reviews = [
        { name: "Priya Sharma", role: "Bride", text: "The return gifts for my wedding were absolutely beautiful. All the guests loved the unique diary sets!" },
        { name: "Anand Kumar", role: "Corporate Manager", text: "Ordered 200 magnet books for our annual event. Outstanding quality and punctual delivery." },
        { name: "Meera Reddy", role: "Home Maker", text: "Beautiful baby shower favors. The customization was exactly how I wanted it. Highly recommended!" }
    ];

    return (
        <section className="bg-[#FDF2F2] py-24">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm italic">Voices of Gratitude</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Customer <span className="text-primary italic">Stories</span></h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group flex flex-col h-full"
                        >
                            <div className="text-primary/20 mb-6 flex">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-8 italic leading-relaxed flex-grow">"{r.text}"</p>
                            <div className="pt-6 border-t border-gray-50 mt-auto">
                                <p className="font-bold text-gray-900 text-lg">{r.name}</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">{r.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ContactFooter = () => {
    return (
        <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 border-b border-white/5 pb-20">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Contact Us</span>
                            <h2 className="text-4xl font-bold font-serif italic">Get a <span className="text-primary">Custom Quote</span></h2>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all" />
                                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all" />
                            </div>
                            <textarea rows="4" placeholder="How can we help you? (Event type, Quantity...)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all"></textarea>
                            <button className="bg-primary hover:bg-[#7b0f26] text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                                Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold font-serif italic text-white">Contact Details</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Call / WhatsApp</p>
                                        <a href="https://wa.me/919443232172" className="text-2xl font-bold tracking-tight">+91 9443232172</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Email Inquiry</p>
                                        <p className="text-2xl font-bold tracking-tight">aaraagiftshop@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Experience Center</p>
                                        <p className="text-xl font-medium tracking-tight">Pollachi, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-bold mb-6 italic font-serif">Follow Our Journey</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all border border-white/10"><Instagram size={22} /></a>
                                <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all border border-white/10"><Facebook size={22} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black tracking-tighter text-white">AARAA</span>
                            <span className="text-[10px] tracking-[0.4em] font-bold text-primary uppercase">Gift Shop</span>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-sm">© 2026 AARAA GIFT SHOP. Handcrafted Excellence.</p>
                            <p className="text-gray-600 text-[10px] tracking-widest uppercase">Premium Return Gifts & Wedding Favors</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
