import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Benefits from '../../components/Benefits';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
};

export default LandingPage;