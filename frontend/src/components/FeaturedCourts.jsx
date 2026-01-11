import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Flag } from 'lucide-react';
import { tennisClubs } from '../mockData';
import { useNavigate } from 'react-router-dom';

const FeaturedCourts = () => {
  const navigate = useNavigate();
  const featuredClubs = tennisClubs.slice(0, 3);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Flag className="text-[#A4C639] mr-3" size={32} />
          <h2 className="text-3xl font-bold text-[#2C3E50]">Korty Tenisowe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClubs.map((club) => (
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
                      <p className="font-semibold">Województwo: {club.voivodeship}</p>
                      <p>Miasto: {club.city}</p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/klub/${club.id}`);
                  }}
                >
                  zobacz więcej
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourts;
