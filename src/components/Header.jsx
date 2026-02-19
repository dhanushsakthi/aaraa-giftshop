import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}>
      {/* Top Bar - Maroon Inspired by Wedtree */}
      <div className={`bg-[#7b0f26] text-white py-1 px-4 text-[11px] sm:text-xs transition-all duration-300 ${isScrolled ? 'h-0 py-0 overflow-hidden' : 'h-auto'}`}>
        <div className="container mx-auto flex justify-between items-center bg-transparent border-0 p-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> +91 9443232172</span>
            <span className="hidden sm:flex items-center gap-1"><Mail size={12} /> aaraagiftshop@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold tracking-wide uppercase italic">Free Shipping on orders above ₹2000!</span>
          </div>
        </div>
      </div>

      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'}`}>
        <div className="container px-4 flex items-center justify-between gap-6">
          {/* Logo - Centered alignment feel */}
          <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105 shrink-0">
            <img
              src={logo}
              alt="Aaraa"
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto`}
            />
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold tracking-tight text-primary leading-none`}>
                AARAA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase">Gift Shop</span>
            </div>
          </a>

          {/* Desktop Search Bar - Wedtree inspired visible search */}
          <div className="hidden lg:flex flex-1 max-w-md relative group">
            <input
              type="text"
              placeholder="Search for return gifts, wedding favors..."
              className="w-full py-2.5 px-5 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm bg-gray-50/50 group-hover:bg-white"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
              <Search size={18} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            <a href="#" className="font-semibold text-gray-700 hover:text-primary transition-colors text-sm uppercase tracking-wider">Home</a>
            <div className="relative group cursor-pointer flex items-center gap-1 font-semibold text-primary text-sm uppercase tracking-wider">
              <span>Return Gifts</span>
              <ChevronDown size={14} />
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg border-t-4 border-primary overflow-hidden">
                <div className="py-2">
                  <a href="#wedding" className="block px-6 py-2.5 hover:bg-accent text-sm text-gray-700 transition-colors">Wedding Gifts</a>
                  <a href="#baby-shower" className="block px-6 py-2.5 hover:bg-accent text-sm text-gray-700 transition-colors">Baby Shower</a>
                  <a href="#housewarming" className="block px-6 py-2.5 hover:bg-accent text-sm text-gray-700 transition-colors">Housewarming</a>
                  <a href="#corporate" className="block px-6 py-2.5 hover:bg-accent text-sm text-gray-700 transition-colors">Corporate Gifts</a>
                </div>
              </div>
            </div>
            <a href="#categories" className="font-semibold text-gray-700 hover:text-primary transition-colors text-sm uppercase tracking-wider">Categories</a>
            <a href="#contact" className="font-semibold text-gray-700 hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-700 hover:text-primary transition-colors">
              <Search size={22} />
            </button>
            <button className="text-gray-700 hover:text-primary transition-colors relative group">
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            <button className="xl:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 flex items-center gap-3">Home</a>
            <div className="py-2 border-b border-gray-50">
              <span className="text-lg font-bold text-primary block mb-3">Return Gifts</span>
              <div className="grid grid-cols-2 gap-2 ml-4">
                <a href="#wedding" className="text-sm text-gray-600 py-2">Wedding Gifts</a>
                <a href="#baby-shower" className="text-sm text-gray-600 py-2">Baby Shower</a>
                <a href="#housewarming" className="text-sm text-gray-600 py-2">Housewarming</a>
                <a href="#corporate" className="text-sm text-gray-600 py-2">Corporate Gifts</a>
              </div>
            </div>
            <a href="#categories" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50">Categories</a>
            <a href="#contact" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
