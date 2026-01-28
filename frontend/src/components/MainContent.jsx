import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { tennisClubs, sparringPartners, voivodeships, cities } from '../mockData';

const MainContent = () => {
  const [selectedVoivodeship, setSelectedVoivodeship] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  // Get first 2 clubs and 2 sparring partners
  const featuredClubs = tennisClubs.slice(0, 2);
  const featuredPartners = sparringPartners.slice(0, 2);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedVoivodeship) params.append('voivodeship', selectedVoivodeship);
    if (selectedCity) params.append('city', selectedCity);
    window.location.href = `/kluby?${params.toString()}`;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - 35% - Kluby & Sparingpartnerzy */}
          <div className="lg:w-[35%] space-y-8">
            {/* Kluby Section */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Kluby
              </h2>
              <div className="space-y-4">
                {featuredClubs.map((club) => (
                  <div
                    key={club.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-[#2C3E50] text-sm mb-2">
                        {club.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        <span className="font-medium">Miasto:</span> {club.city}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-medium">Dyscyplina:</span> Tenis
                      </p>
                      <Link
                        to={`/klub/${club.id}`}
                        className="block w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white text-center py-2 rounded text-sm font-semibold transition-colors"
                      >
                        więcej
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/kluby"
                className="inline-block mt-4 text-[#A4C639] hover:text-[#8FB82E] font-semibold text-sm"
              >
                Zobacz wszystkie kluby →
              </Link>
            </div>

            {/* Sparingpartnerzy Section */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Sparingpartnerzy
              </h2>
              <div className="space-y-4">
                {featuredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-lg shadow-md p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={partner.avatar}
                        alt={partner.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#2C3E50] text-sm mb-1">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          <span className="font-medium">Dyscyplina:</span> {partner.sport}
                        </p>
                        <p className="text-gray-600 text-xs">
                          <span className="font-medium">Klub:</span> {partner.club || 'Brak'}
                        </p>
                        <p className="text-gray-600 text-xs">
                          <span className="font-medium">Poziom:</span> {partner.level}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/sparingpartnerzy"
                className="inline-block mt-4 text-[#A4C639] hover:text-[#8FB82E] font-semibold text-sm"
              >
                Zobacz wszystkich sparingpartnerów →
              </Link>
            </div>
          </div>

          {/* Right Column - 65% - Lokalizacja & Mapa */}
          <div className="lg:w-[65%] space-y-6">
            {/* Lokalizacja Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Lokalizacja
              </h2>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Województwo Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Województwo
                    </label>
                    <select
                      value={selectedVoivodeship}
                      onChange={(e) => setSelectedVoivodeship(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">-- Wybierz województwo --</option>
                      {voivodeships.map((voivodeship) => (
                        <option key={voivodeship} value={voivodeship}>
                          {voivodeship}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Miasto Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Miasto
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">-- Wybierz miasto --</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#A4C639] hover:bg-[#8FB82E] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  Wyszukaj
                </button>
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
