import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { tennisClubs } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Phone, Clock, Home as HomeIcon, Calendar } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const ClubDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const club = tennisClubs.find(c => c.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!club) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">Klub nie znaleziony</h1>
            <Button onClick={() => navigate('/')} className="bg-[#A4C639] hover:bg-[#8FB82E]">
              Wróć do strony głównej
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleReservation = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Błąd",
        description: "Proszę wybrać datę i godzinę",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Rezerwacja złożona!",
      description: `Rezerwacja w ${club.name} na ${selectedDate} o godzinie ${selectedTime} została złożona.`,
    });

    // Reset form
    setSelectedDate('');
    setSelectedTime('');
  };

  // Mock available time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Hero Image */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${club.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
              <h1 className="text-5xl font-bold text-white mb-4">{club.fullName}</h1>
              <div className="flex items-center text-white text-lg">
                <MapPin className="mr-2" size={20} />
                <span>{club.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Club Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Informacje o klubie</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-[#A4C639] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-[#2C3E50]">Lokalizacja</h3>
                        <p className="text-gray-600">{club.city}, {club.voivodeship}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <HomeIcon className="text-[#A4C639] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-[#2C3E50]">Liczba kortów</h3>
                        <p className="text-gray-600">{club.courts} kortów</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-[#A4C639] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-[#2C3E50]">Typ nawierzchni</h3>
                        <p className="text-gray-600">{club.surface}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-[#A4C639] mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-[#2C3E50]">Rodzaj kortów</h3>
                        <p className="text-gray-600">
                          {club.indoor && 'Korty halowe'}
                          {club.indoor && club.outdoor && ' / '}
                          {club.outdoor && 'Korty zewnętrzne'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">O klubie</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {club.fullName} to nowoczesny ośrodek tenisowy oferujący profesjonalne korty oraz 
                    doskonałe warunki do gry. Nasz klub służy zarówno początkującym, jak i zaawansowanym 
                    graczom. Zapraszamy do skorzystania z naszych usług i dołączenia do społeczności 
                    miłośników tenisa!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Panel */}
            <div>
              <Card className="sticky top-24 border-4 border-[#A4C639]">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-6 flex items-center">
                    <Calendar className="mr-2 text-[#A4C639]" size={24} />
                    Rezerwacja kortu
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                        Wybierz datę:
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#A4C639] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                        Wybierz godzinę:
                      </label>
                      <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-3 py-2 rounded-lg border-2 font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-[#A4C639] border-[#A4C639] text-white'
                                : 'bg-white border-gray-300 text-[#2C3E50] hover:border-[#A4C639]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={handleReservation}
                      className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg mt-6"
                    >
                      Zarezerwuj kort
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      * Rezerwacja wymaga zalogowania. To jest wersja demonstracyjna.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubDetailsPage;
