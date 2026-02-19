import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group transition-transform hover:scale-105">
          <img
            src={logo}
            alt="Aaraa"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
          />
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900 group-hover:text-gold-primary' : 'text-gray-800'}`}>
            AARAA GIFT SHOP
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium text-gray-700 hover:text-gold-primary transition-colors">Home</a>
          <div className="relative group cursor-pointer flex items-center gap-1 font-semibold text-gold-primary">
            <span>Return Gifts</span>
            <ChevronDown size={16} />
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-md border-t-2 border-gold-primary">
              <div className="py-2">
                <a href="#wedding" className="block px-4 py-2 hover:bg-pastel-cream text-sm text-gray-700">Wedding Gifts</a>
                <a href="#baby-shower" className="block px-4 py-2 hover:bg-pastel-cream text-sm text-gray-700">Baby Shower</a>
                <a href="#housewarming" className="block px-4 py-2 hover:bg-pastel-cream text-sm text-gray-700">Housewarming</a>
                <a href="#corporate" className="block px-4 py-2 hover:bg-pastel-cream text-sm text-gray-700">Corporate Gifts</a>
              </div>
            </div>
          </div>
          <a href="#categories" className="font-medium text-gray-700 hover:text-gold-primary transition-colors">Categories</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-gold-primary transition-colors">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-gold-primary transition-colors">
            <Search size={22} />
          </button>
          <button className="text-gray-700 hover:text-gold-primary transition-colors relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-gold-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50">Home</a>
            <a href="#return-gifts" className="text-lg font-bold text-gold-primary py-2 border-b border-gray-50 flex justify-between items-center">
              Return Gifts <ChevronDown size={18} />
            </a>
            <a href="#categories" className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50">Categories</a>
            <a href="#contact" className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50">Contact</a>
          </div>
        </div>
      )}

      {/* Tailwind classes used (manual check): fixed, transition, z-50, shadow-md, bg-transparent, bg-white, py-2, py-4, container, px-4, flex, items-center, justify-between, gap-4, h-12, w-12, object-contain, text-xl, font-bold, tracking-tight, text-gray-900, text-gray-800, hidden, md:flex, gap-8, font-medium, text-gray-700, hover:text-gold-primary, transition-colors, relative, group, cursor-pointer, size-16, absolute, top-full, left-0, mt-2, w-48, shadow-xl, opacity-0, invisible, group-hover:opacity-100, group-hover:visible, rounded-b-md, border-t-2, border-gold-primary, block, py-2, hover:bg-pastel-cream, text-sm, gap-5, -top-2, -right-2, text-[10px], h-4, w-4, rounded-full, md:hidden, animate-in, fade-in, slide-in-from-top-4, flex-col, border-b, border-gray-50, text-lg, justify-between */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .header-scrolled { background-color: white; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        .nav-link { color: #374151; transition: color 0.3s; }
        .nav-link:hover { color: #D4AF37; }
      `}} />
    </header>
  );
};

export default Header;
