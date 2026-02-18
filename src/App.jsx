import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGifts from './components/FeaturedGifts';
import { Occasions, TrustSection } from './components/Occasions';
import { Testimonials, ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <FeaturedGifts />
        <Occasions />
        <Testimonials />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
