import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { tennisClubs, sparingPartners } from '../mockData';

const MainContent = () => {
  const [searchCity, setSearchCity] = useState('');
  
  // Get first 2 clubs and 2 sparring partners
  const featuredClubs = tennisClubs.slice(0, 2);
  const featuredPartners = sparingPartners.slice(0, 2);

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to clubs with search
    window.location.href = `/kluby?city=${encodeURIComponent(searchCity)}`;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Kluby & Sparingpartnerzy */}
          <div className="space-y-8">
            {/* Kluby Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Kluby
              </h2>
              <div className="space-y-4">
                {featuredClubs.map((club) => (
                  <Link
                    key={club.id}
                    to={`/klub/${club.id}`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#2C3E50] hover:text-[#A4C639] transition-colors">
                          {club.name}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-1 text-sm mt-1">
                          <MapPin size={14} />
                          {club.city}
                        </p>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                          {club.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/kluby"
                className="inline-block mt-4 text-[#A4C639] hover:text-[#8FB82E] font-semibold"
              >
                Zobacz wszystkie kluby →
              </Link>
            </div>

            {/* Sparingpartnerzy Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Sparingpartnerzy
              </h2>
              <div className="space-y-4">
                {featuredPartners.map((partner) => (
                  <Link
                    key={partner.id}
                    to="/sparingpartnerzy"
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={partner.avatar}
                        alt={partner.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#2C3E50] hover:text-[#A4C639] transition-colors">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-1 text-sm mt-1">
                          <MapPin size={14} />
                          {partner.city}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="bg-[#A4C639] text-white text-xs px-2 py-1 rounded">
                            {partner.sport}
                          </span>
                          <span className="text-gray-500 text-sm">
                            Poziom: {partner.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/sparingpartnerzy"
                className="inline-block mt-4 text-[#A4C639] hover:text-[#8FB82E] font-semibold"
              >
                Zobacz wszystkich sparingpartnerów →
              </Link>
            </div>
          </div>

          {/* Right Column - Lokalizacja & Mapa */}
          <div className="space-y-6">
            {/* Lokalizacja Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Lokalizacja
              </h2>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="Wpisz miasto..."
                    className="w-full p-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#A4C639] hover:bg-[#8FB82E] text-white p-2 rounded-lg transition-colors"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Mapa Polski */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="/assets/images/poland-map.jpg"
                alt="Mapa Polski"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainContent;
