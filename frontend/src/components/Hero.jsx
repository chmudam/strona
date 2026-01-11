import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a252f]/95 via-[#2C3E50]/90 to-[#2C3E50]/80"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          PROSTO <span className="text-[#A4C639]">DO CELU</span>
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 font-light tracking-wide">
          OŚRODKI TENISOWE, SPARINGPARTNERZY
        </p>
        <Button
          onClick={() => navigate('/login')}
          className="bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold uppercase px-10 py-6 text-lg rounded shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          Zaloguj się
        </Button>
      </div>
    </div>
  );
};

export default Hero;
