import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <MainContent />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
