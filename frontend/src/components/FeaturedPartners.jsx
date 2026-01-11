import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users } from 'lucide-react';
import { sparringPartners } from '../mockData';
import { useNavigate } from 'react-router-dom';

const FeaturedPartners = () => {
  const navigate = useNavigate();
  const featuredPartners = sparringPartners.slice(0, 2);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Users className="text-[#A4C639] mr-3" size={32} />
          <h2 className="text-3xl font-bold text-[#2C3E50]">Sparingpartnerzy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPartners.map((partner) => (
            <Card
              key={partner.id}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#A4C639] group cursor-pointer"
              onClick={() => navigate(`/sparingpartner/${partner.id}`)}
            >
              <CardHeader className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#A4C639] group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={partner.avatar}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-[#2C3E50] text-xl text-center">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>Miasto: <span className="font-semibold">{partner.city}</span></p>
                  <p>Poziom: <span className="font-semibold text-[#A4C639]">{'★'.repeat(partner.level)}</span></p>
                </div>
                <Button
                  className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/sparingpartner/${partner.id}`);
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

export default FeaturedPartners;
