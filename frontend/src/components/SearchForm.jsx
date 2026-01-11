import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cities, tennisClubs } from '../mockData';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedClub, setSelectedClub] = useState('');
  const navigate = useNavigate();

  const availableClubs = selectedCity
    ? tennisClubs.filter(club => club.city === selectedCity)
    : [];

  const handleSearch = () => {
    if (selectedClub) {
      const club = tennisClubs.find(c => c.id === parseInt(selectedClub));
      if (club) {
        navigate(`/klub/${club.id}`);
      }
    } else if (selectedCity) {
      navigate(`/kluby?city=${selectedCity}`);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-2xl border-4 border-[#A4C639]">
          <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white">
            <CardTitle className="text-2xl text-center">Lokalizacje</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                  Miasto:
                </label>
                <Select value={selectedCity} onValueChange={(value) => {
                  setSelectedCity(value);
                  setSelectedClub('');
                }}>
                  <SelectTrigger className="w-full border-2 border-gray-300 focus:border-[#A4C639]">
                    <SelectValue placeholder="--Wybierz Miasto--" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.name} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                  Klub:
                </label>
                <Select 
                  value={selectedClub} 
                  onValueChange={setSelectedClub}
                  disabled={!selectedCity}
                >
                  <SelectTrigger className="w-full border-2 border-gray-300 focus:border-[#A4C639] disabled:opacity-50">
                    <SelectValue placeholder="--Wybierz Klub--" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableClubs.map((club) => (
                      <SelectItem key={club.id} value={club.id.toString()}>
                        {club.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleSearch}
              disabled={!selectedCity}
              className="w-full mt-8 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold uppercase py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Wyszukaj
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchForm;
