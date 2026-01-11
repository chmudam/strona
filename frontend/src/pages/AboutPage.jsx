import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Trophy, Smartphone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">O nas</h1>
            <p className="text-gray-300 text-lg text-center">Poznaj platformę RezerwujKort.pl</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="mb-8 border-l-4 border-[#A4C639] shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Nasza misja</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                RezerwujKort.pl to nowoczesna platforma dedykowana miłośnikom tenisa w całej Polsce. 
                Naszym celem jest ułatwienie procesu rezerwacji kortów tenisowych oraz łączenie 
                graczy w jedną społeczność.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Wierzymy, że każdy powinien mieć łatwy dostęp do kortów tenisowych i możliwość 
                znalezienia partnera do gry, niezależnie od poziomu zaawansowania.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">Co nas wyróżnia?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">Prosta rezerwacja</h3>
                </div>
                <p className="text-gray-600">
                  System online pozwala na szybką i wygodna rezerwację kortów w kilka kliknięć.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">Sparingpartnerzy</h3>
                </div>
                <p className="text-gray-600">
                  Znajdź partnera do gry odpowiadającego Twojemu poziomowi i lokalizacji.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">Turnieje</h3>
                </div>
                <p className="text-gray-600">
                  Organizujemy i promujemy turnieje tenisowe w całej Polsce.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">Aplikacja mobilna</h3>
                </div>
                <p className="text-gray-600">
                  Rezerwuj korty z dowolnego miejsca za pomocą naszej aplikacji mobilnej.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-[#A4C639] shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Skontaktuj się z nami</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Masz pytania lub sugestie? Jesteśmy tutaj, aby pomoc!
              </p>
              <p className="text-gray-600">
                Email: <span className="text-[#A4C639] font-semibold">kontakt@rezerwujkort.pl</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
