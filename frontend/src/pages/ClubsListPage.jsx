import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { tennisClubs, cities, voivodeships } from '../mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Filter } from 'lucide-react';

const ClubsListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCity = searchParams.get('city') || '';
  const initialVoivodeship = searchParams.get('voivodeship') || '';

  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedVoivodeship, setSelectedVoivodeship] = useState(initialVoivodeship);

  const filteredClubs = useMemo(() => {
    let filtered = tennisClubs;

    if (selectedCity) {
      filtered = filtered.filter(club => club.city === selectedCity);
    }

    if (selectedVoivodeship) {
      const voivodeship = voivodeships.find(v => v.id === selectedVoivodeship);
      if (voivodeship) {
        filtered = filtered.filter(club => club.voivodeship === voivodeship.name);
      }
    }

    return filtered;
  }, [selectedCity, selectedVoivodeship]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Kluby Tenisowe</h1>
            <p className="text-gray-300 text-lg">Znajdź idealny kort tenisowy w Twojej okolicy</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center mb-4">
              <Filter className="text-[#A4C639] mr-2" size={20} />
              <h2 className="text-lg font-semibold text-[#2C3E50]">Filtry wyszukiwania</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="border-2 focus:border-[#A4C639]">
                  <SelectValue placeholder="Wszystkie miasta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie miasta</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedVoivodeship} onValueChange={setSelectedVoivodeship}>
                <SelectTrigger className="border-2 focus:border-[#A4C639]">
                  <SelectValue placeholder="Wszystkie województwa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie województwa</SelectItem>
                  {voivodeships.map((voivodeship) => (
                    <SelectItem key={voivodeship.id} value={voivodeship.id}>
                      {voivodeship.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={() => {
                  setSelectedCity('');
                  setSelectedVoivodeship('');
                }}
                variant="outline"
                className="border-2 border-[#A4C639] text-[#A4C639] hover:bg-[#A4C639] hover:text-white"
              >
                Wyczyść filtry
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-gray-600 mb-6">
            Znaleziono <span className="font-bold text-[#A4C639]">{filteredClubs.length}</span> klubów
          </p>

          {filteredClubs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">Nie znaleziono klubów spełniających kryteria</p>
              <Button
                onClick={() => {
                  setSelectedCity('');
                  setSelectedVoivodeship('');
                }}
                className="bg-[#A4C639] hover:bg-[#8FB82E]"
              >
                Wyczyść filtry
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClubs.map((club) => (
                <Card
                  key={club.id}
                  className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#A4C639] overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/klub/${club.id}`)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#2C3E50] text-xl">{club.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="text-[#A4C639] mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="font-semibold">{club.voivodeship}</p>
                          <p>{club.city}</p>
                        </div>
                      </div>
                      <p className="mt-2">
                        <span className="font-semibold">{club.courts}</span> kortów ({club.surface})
                      </p>
                    </div>
                    <Button
                      className="w-full mt-4 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/klub/${club.id}`);
                      }}
                    >
                      Zobacz szczegóły
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubsListPage;
