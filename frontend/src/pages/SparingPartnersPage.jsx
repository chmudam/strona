import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, MapPin } from 'lucide-react';
import { sparringPartners } from '../mockData';

const SparingPartnersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Sparingpartnerzy</h1>
            <p className="text-gray-300 text-lg">Znajdź partnera do gry w tenisa</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sparringPartners.map((partner) => (
              <Card
                key={partner.id}
                className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#A4C639] group cursor-pointer"
                onClick={() => navigate(`/sparingpartner/${partner.id}`)}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#A4C639] group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-[#2C3E50] text-xl text-center">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center">
                      <MapPin className="text-[#A4C639] mr-2" size={16} />
                      <span className="font-semibold">{partner.city}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Poziom:</p>
                      <p className="text-lg font-semibold text-[#A4C639]">{'★'.repeat(partner.level)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Doświadczenie:</p>
                      <p className="font-semibold">{partner.experience}</p>
                    </div>
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
      <Footer />
    </div>
  );
};

export default SparingPartnersPage;
