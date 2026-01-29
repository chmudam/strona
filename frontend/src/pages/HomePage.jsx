import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <Hero />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
