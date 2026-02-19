import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export const Testimonials = () => {
    const reviews = [
        { name: "Priya Sharma", role: "Bride", text: "The return gifts for my wedding were absolutely beautiful. All the guests loved the unique diary sets!" },
        { name: "Anand Kumar", role: "Corporate Manager", text: "Ordered 200 magnet books for our annual event. Outstanding quality and punctual delivery." },
        { name: "Meera Reddy", role: "Home Maker", text: "Beautiful baby shower favors. The customization was exactly how I wanted it. Highly recommended!" }
    ];

    return (
        <section className="bg-pastel-cream/50 py-20">
            <div className="container px-4">
                <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gold-light/20 relative"
                        >
                            <div className="absolute -top-4 left-8 text-6xl text-gold-light/40 font-serif">"</div>
                            <p className="text-text-muted mb-6 relative z-10">{r.text}</p>
                            <div className="border-t border-gray-100 pt-4">
                                <p className="font-bold text-text-main">{r.name}</p>
                                <p className="text-xs text-gold-dark font-medium uppercase tracking-wider">{r.role}</p>
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
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-gold-primary" />
                            <input type="email" placeholder="Email Address" className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-gold-primary" />
                            <textarea rows="4" placeholder="Your Message" className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-gold-primary"></textarea>
                            <button className="btn-primary w-full flex items-center justify-center gap-2 group">
                                Send Message <Send size={18} className="group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gold-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Call/WhatsApp</p>
                                        <a href="https://wa.me/916379422722" className="text-xl font-bold hover:text-gold-primary transition-colors">+91 63794 22722</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gold-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email Us</p>
                                        <p className="text-xl font-bold">contact@aaraagifts.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gold-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Our Location</p>
                                        <p className="text-lg">Premium Gift Studio, Chennai, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-bold mb-4">Follow Us</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gold-primary transition-all"><Instagram size={20} /></a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gold-primary transition-all"><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-10 text-center">
                    <img src="/src/assets/logo.png" alt="Aaraa" className="max-h-16 w-auto mx-auto mb-6 object-contain pointer-events-none" />
                    <p className="text-gray-500 text-sm mb-2">© 2026 Aaraa Gift Shop. All Rights Reserved.</p>
                    <p className="text-gray-600 text-[12px]">Designed with elegance for premium gifting experiences.</p>
                </div>
            </div>
        </footer>
    );
};
