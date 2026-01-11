import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import FeaturedCourts from '../components/FeaturedCourts';
import FeaturedPartners from '../components/FeaturedPartners';
import SearchForm from '../components/SearchForm';
import PolandMap from '../components/PolandMap';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <ProcessSteps />
        <FeaturedCourts />
        <FeaturedPartners />
        <SearchForm />
        <PolandMap />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
