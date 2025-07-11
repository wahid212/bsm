// src/pages/LandingPage.tsx
import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Benefits from '../../components/Benefits';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
};

export default LandingPage;