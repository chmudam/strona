import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { tennisClubs, sparringPartners, voivodeships, cities, news } from '../mockData';

const MainContent = () => {
  const [selectedVoivodeship, setSelectedVoivodeship] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  
  // Get first 2 clubs and 2 sparring partners
  const featuredClubs = tennisClubs.slice(0, 2);
  const featuredPartners = sparringPartners.slice(0, 2);
  // Get first 3 news items for sidebar
  const latestNews = news.slice(0, 3);

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
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column - 30% - Kluby & Sparingpartnerzy */}
          <div className="lg:w-[30%] space-y-6">
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
                      className="w-full h-28 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-[#2C3E50] text-sm mb-2">
                        {club.name}
                      </h3>
                      <p className="text-gray-600 text-xs mb-1">
                        <span className="font-medium">Miasto:</span> {club.city}
                      </p>
                      <p className="text-gray-600 text-xs mb-2">
                        <span className="font-medium">Dyscyplina:</span> Tenis
                      </p>
                      <Link
                        to={`/klub/${club.id}`}
                        className="block w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white text-center py-1.5 rounded text-xs font-semibold transition-colors"
                      >
                        więcej
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/kluby"
                className="inline-block mt-3 text-[#A4C639] hover:text-[#8FB82E] font-semibold text-sm"
              >
                Zobacz wszystkie kluby →
              </Link>
            </div>

            {/* Sparingpartnerzy Section */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Sparingpartnerzy
              </h2>
              <div className="space-y-3">
                {featuredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-lg shadow-md p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={partner.avatar}
                        alt={partner.name}
                        className="w-14 h-14 object-cover rounded-full"
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
                className="inline-block mt-3 text-[#A4C639] hover:text-[#8FB82E] font-semibold text-sm"
              >
                Zobacz wszystkich sparingpartnerów →
              </Link>
            </div>
          </div>

          {/* Middle Column - 40% - Lokalizacja & Mapa */}
          <div className="lg:w-[40%] space-y-6">
            {/* Lokalizacja Search */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Lokalizacja
              </h2>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-3">
                  {/* Województwo Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Województwo
                    </label>
                    <select
                      value={selectedVoivodeship}
                      onChange={(e) => setSelectedVoivodeship(e.target.value)}
                      className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:outline-none transition-colors bg-white text-sm"
                    >
                      <option value="">-- Wybierz województwo --</option>
                      {voivodeships.map((voivodeship) => (
                        <option key={voivodeship?.id} value={voivodeship?.id}>
                          {voivodeship?.nmae}
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
                      className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:outline-none transition-colors bg-white text-sm"
                    >
                      <option value="">-- Wybierz miasto --</option>
                      {cities.map((city) => (
                        <option key={city?.name} value={city?.name}>
                          {city?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Search size={18} />
                  Wyszukaj
                </button>
              </form>
            </div>

            {/* Mapa Polski */}
            <div className="bg-white rounded-lg shadow-md p-3">
              <img
                src="/assets/images/poland-map.jpg"
                alt="Mapa Polski"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - 30% - Aktualności */}
          <div className="lg:w-[30%]">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#A4C639] pb-2">
                Aktualności
              </h2>
              <div className="space-y-4">
                {latestNews.map((item) => (
                  <div
                    key={item.id}
                    className="border-l-4 border-[#A4C639] pl-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-r"
                    onClick={() => navigate(`/aktualnosci/${item.id}`)}
                  >
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Calendar size={12} className="mr-1" />
                      {new Date(item.date).toLocaleDateString('pl-PL')}
                    </div>
                    <h3 className="text-sm font-semibold text-[#2C3E50] hover:text-[#A4C639] transition-colors flex items-center justify-between">
                      <span className="line-clamp-2">{item.title}</span>
                      <ChevronRight className="text-[#A4C639] flex-shrink-0" size={16} />
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/aktualnosci')}
                className="w-full mt-4 text-[#A4C639] hover:text-[#8FB82E] font-semibold text-sm text-center"
              >
                zobacz archiwum →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainContent;
