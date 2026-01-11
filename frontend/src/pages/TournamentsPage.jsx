import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Trophy, Calendar, Users, Award } from 'lucide-react';

const TournamentsPage = () => {
  const mockTournaments = [
    {
      id: 1,
      name: "Turniej Letni Warszawa 2025",
      date: "15-17 Lipiec 2025",
      location: "Warszawa",
      participants: 32,
      level: "Wszyscy poziomy"
    },
    {
      id: 2,
      name: "Mistrzostwa Łodzi",
      date: "5-6 Sierpień 2025",
      location: "Łódź",
      participants: 24,
      level: "Zaawansowani"
    },
    {
      id: 3,
      name: "Open Wrocław",
      date: "20-22 Sierpień 2025",
      location: "Wrocław",
      participants: 48,
      level: "Wszyscy poziomy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="text-[#A4C639] mr-3" size={40} />
              <h1 className="text-4xl font-bold text-white">Turnieje</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">Nadchodzące turnieje tenisowe</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTournaments.map((tournament) => (
              <Card
                key={tournament.id}
                className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#A4C639]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-[#A4C639] p-4 rounded-full">
                      <Trophy className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4 text-center">
                    {tournament.name}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="text-[#A4C639] mr-2" size={16} />
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="text-[#A4C639] mr-2" size={16} />
                      <span>{tournament.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-[#A4C639] mr-2" size={16} />
                      <span>{tournament.participants} uczestników</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-semibold text-[#2C3E50]">Poziom: {tournament.level}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-lg">
              Więcej turniejów wkrótce. Sprawdź regularnie!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TournamentsPage;
