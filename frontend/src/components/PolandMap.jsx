import React, { useState } from 'react';
import { voivodeships } from '../mockData';
import { useNavigate } from 'react-router-dom';

const PolandMap = () => {
  const navigate = useNavigate();
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const handleRegionClick = (voivodeship) => {
    navigate(`/kluby?voivodeship=${voivodeship.id}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-8">
          Wyszukaj najbliższy wolny kort
        </h2>

        {/* Voivodeship tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {voivodeships.map((voivodeship) => (
            <button
              key={voivodeship.id}
              onClick={() => handleRegionClick(voivodeship)}
              onMouseEnter={() => setHoveredRegion(voivodeship.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                hoveredRegion === voivodeship.id
                  ? 'bg-[#A4C639] text-white shadow-lg scale-105'
                  : 'bg-white text-[#2C3E50] border-2 border-gray-300 hover:border-[#A4C639]'
              }`}
            >
              {voivodeship.name}
            </button>
          ))}
        </div>

        {/* Poland Map SVG */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <svg
            viewBox="0 0 600 700"
            className="w-full max-w-2xl mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Poland map regions */}
            {/* Each path represents a voivodeship */}
            
            {/* Warmińsko-mazurskie (top right) */}
            <path
              d="M 350 50 L 450 50 L 480 120 L 450 180 L 380 170 L 350 120 Z"
              fill={hoveredRegion === 'warminsko-mazurskie' ? '#A4C639' : '#4A6FA5'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'warminsko-mazurskie'))}
              onMouseEnter={() => setHoveredRegion('warminsko-mazurskie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Mazowieckie (center) */}
            <path
              d="M 280 250 L 380 250 L 400 320 L 370 380 L 280 370 L 260 310 Z"
              fill={hoveredRegion === 'mazowieckie' ? '#A4C639' : '#5B8CBF'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'mazowieckie'))}
              onMouseEnter={() => setHoveredRegion('mazowieckie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Łódzkie (center-left) */}
            <path
              d="M 200 320 L 280 320 L 280 400 L 240 450 L 180 420 L 180 360 Z"
              fill={hoveredRegion === 'lodzkie' ? '#A4C639' : '#6B9FD9'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'lodzkie'))}
              onMouseEnter={() => setHoveredRegion('lodzkie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Dolnośląskie (bottom-left) */}
            <path
              d="M 80 480 L 180 480 L 200 550 L 160 610 L 80 590 L 60 530 Z"
              fill={hoveredRegion === 'dolnoslaskie' ? '#A4C639' : '#7BAFD9'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'dolnoslaskie'))}
              onMouseEnter={() => setHoveredRegion('dolnoslaskie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Śląskie (south-center) */}
            <path
              d="M 220 500 L 300 500 L 310 560 L 280 610 L 210 600 L 200 550 Z"
              fill={hoveredRegion === 'slaskie' ? '#A4C639' : '#8BBFE6'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'slaskie'))}
              onMouseEnter={() => setHoveredRegion('slaskie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            
            {/* Świętokrzyskie (south-center-right) */}
            <path
              d="M 300 430 L 360 430 L 370 490 L 340 540 L 290 530 L 280 470 Z"
              fill={hoveredRegion === 'swietokrzyskie' ? '#A4C639' : '#9BCFED'}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-[#A4C639]"
              onClick={() => handleRegionClick(voivodeships.find(v => v.id === 'swietokrzyskie'))}
              onMouseEnter={() => setHoveredRegion('swietokrzyskie')}
              onMouseLeave={() => setHoveredRegion(null)}
            />

            {/* Labels */}
            <text x="410" y="110" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
              Warmińsko-
            </text>
            <text x="410" y="125" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
              mazurskie
            </text>
            <text x="330" y="320" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              Mazowieckie
            </text>
            <text x="230" y="380" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              Łódzkie
            </text>
            <text x="120" y="545" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
              Dolnośląskie
            </text>
            <text x="260" y="560" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
              Śląskie
            </text>
            <text x="320" y="485" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">
              Świętokrzyskie
            </text>
          </svg>

          {/* City links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {voivodeships.map((voivodeship) => (
              <div key={voivodeship.id}>
                {voivodeship.cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => navigate(`/kluby?city=${city}`)}
                    className="px-6 py-2 bg-[#2C3E50] text-white rounded-full hover:bg-[#A4C639] transition-colors duration-200 font-medium"
                  >
                    {city}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/kluby')}
              className="text-[#A4C639] hover:text-[#8FB82E] font-semibold underline"
            >
              wybierz inne województwo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolandMap;
