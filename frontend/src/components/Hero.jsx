import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[520px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        {/* Main Title with semi-transparent background */}
        <div className="bg-black/50 px-8 py-4 mb-8">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
            PROSTO <span className="text-white font-extrabold">DO CELU</span>
          </h1>
        </div>
        
        {/* Subtitle with semi-transparent background */}
        <div className="bg-black/50 px-6 py-3 mb-10">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-widest uppercase">
            KLUBY SPORTOWE, SPARINGPARTNERZY
          </p>
        </div>

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
