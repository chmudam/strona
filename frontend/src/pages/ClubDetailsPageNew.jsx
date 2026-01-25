import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { tennisClubs, courtReservations, clubSparingPartners, clubLeagues } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MapPin, Phone, Mail, Globe, Clock, Trophy, Users, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { format, addDays, subDays, isAfter, isBefore, startOfDay } from 'date-fns';
import { pl } from 'date-fns/locale';

const ClubDetailsPageNew = () => {
  const { id } = useParams();
  const club = tennisClubs.find(c => c.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const today = startOfDay(new Date());
  const maxDate = addDays(today, 14);
  
  const handlePreviousDay = () => {
    const newDate = subDays(selectedDate, 1);
    if (!isBefore(newDate, today)) {
      setSelectedDate(newDate);
    }
  };
  
  const handleNextDay = () => {
    const newDate = addDays(selectedDate, 1);
    if (!isAfter(newDate, maxDate)) {
      setSelectedDate(newDate);
    }
  };
  
  const getDayName = (date) => {
    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    return days[date.getDay()];
  };

  if (!club) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">Klub nie znaleziony</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPEN':
        return 'bg-green-100 hover:bg-green-200 border-green-300 text-green-800';
      case 'RESERVATION':
        return 'bg-red-100 border-red-300 text-red-800 cursor-not-allowed';
      case 'CLOSE':
        return 'bg-gray-200 border-gray-300 text-gray-600 cursor-not-allowed';
      default:
        return 'bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'OPEN':
        return 'Wolny';
      case 'RESERVATION':
        return 'Zajęty';
      case 'CLOSE':
        return 'Zamknięte';
      default:
        return status;
    }
  };

  const ReservationTable = ({ data }) => {
    // Process each court to merge consecutive same status (except OPEN)
    const processedCourts = data.courts.map(court => {
      const processed = [];
      let i = 0;
      
      while (i < court.hours.length) {
        const current = court.hours[i];
        let count = 1;
        
        // Only merge if NOT OPEN status
        if (current.hourStatus !== 'OPEN') {
          while (
            i + count < court.hours.length && 
            court.hours[i + count].hourStatus === current.hourStatus
          ) {
            count++;
          }
        }
        
        processed.push({
          ...current,
          rowspan: count,
          skip: false
        });
        
        // Mark next items as skip
        for (let j = 1; j < count; j++) {
          processed.push({
            ...court.hours[i + j],
            skip: true
          });
        }
        
        i += count;
      }
      
      return { ...court, processedHours: processed };
    });

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#2C3E50]">
              <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold w-32">
                Godzina
              </th>
              {data.courts.map((court) => (
                <th key={court.courtId} className="border border-gray-300 px-4 py-3 text-center text-white font-bold">
                  <div className="text-base">{court.courtName}</div>
                  <div className="text-xs font-normal opacity-80 mt-1">{court.courtDescription}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.courts[0]?.hours.map((hour, hourIdx) => (
              <tr key={hourIdx} className={hourIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2C3E50] text-sm h-16">
                  {hour.hourName}
                </td>
                {processedCourts.map((court) => {
                  const processedHour = court.processedHours[hourIdx];
                  
                  // Skip cells that are part of merged cell above
                  if (processedHour.skip) {
                    return null;
                  }
                  
                  const height = processedHour.rowspan > 1 
                    ? `${processedHour.rowspan * 64}px` 
                    : '48px';
                  
                  return (
                    <td 
                      key={court.courtId} 
                      className="border border-gray-300 p-2"
                      rowSpan={processedHour.rowspan}
                      style={{ height: processedHour.rowspan > 1 ? `${processedHour.rowspan * 64}px` : '64px' }}
                    >
                      <button
                        className={`w-full text-sm font-medium border-2 rounded transition-all ${getStatusColor(processedHour.hourStatus)}`}
                        style={{ height: height }}
                        disabled={processedHour.hourStatus !== 'OPEN'}
                      >
                        <div>{getStatusText(processedHour.hourStatus)}</div>
                        {processedHour.rowspan > 1 && (
                          <div className="text-xs mt-1 opacity-75">
                            {processedHour.hourName} - {court.processedHours[hourIdx + processedHour.rowspan - 1]?.hourName}
                          </div>
                        )}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${club.images?.[0] || club.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
              <h1 className="text-5xl font-bold text-white mb-4">{club.fullName}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white text-lg">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  <span>{club.city}</span>
                </div>
                {club.phone && (
                  <div className="flex items-center">
                    <Phone className="mr-2" size={20} />
                    <span>{club.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Tabs defaultValue="profil" className="w-full">
            <TabsList className="w-full justify-start bg-white border-b-2 border-gray-200 rounded-none h-auto p-0">
              <TabsTrigger value="profil" className="px-6 py-4 text-base font-semibold data-[state=active]:border-b-4 data-[state=active]:border-[#A4C639] rounded-none">
                Profil ośrodka
              </TabsTrigger>
              <TabsTrigger value="tenis" className="px-6 py-4 text-base font-semibold data-[state=active]:border-b-4 data-[state=active]:border-[#A4C639] rounded-none">
                Tenis
              </TabsTrigger>
              <TabsTrigger value="padel" className="px-6 py-4 text-base font-semibold data-[state=active]:border-b-4 data-[state=active]:border-[#A4C639] rounded-none">
                Padel
              </TabsTrigger>
              <TabsTrigger value="sparingpartner" className="px-6 py-4 text-base font-semibold data-[state=active]:border-b-4 data-[state=active]:border-[#A4C639] rounded-none">
                Znajdź sparingpartnera
              </TabsTrigger>
              <TabsTrigger value="liga" className="px-6 py-4 text-base font-semibold data-[state=active]:border-b-4 data-[state=active]:border-[#A4C639] rounded-none">
                Liga
              </TabsTrigger>
            </TabsList>

            {/* Profil ośrodka */}
            <TabsContent value="profil" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">O klubie</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {club.description}
                      </p>
                      
                      {club.facilities && (
                        <>
                          <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Udogodnienia</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {club.facilities.map((facility, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <span className="text-[#A4C639]">✓</span>
                                <span className="text-gray-700">{facility}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  {/* Gallery */}
                  {club.images && (
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Galeria</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {club.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${club.name} ${idx + 1}`}
                              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="border-4 border-[#A4C639]">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-[#2C3E50] mb-4">Kontakt</h2>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="text-[#A4C639] mt-1" size={20} />
                          <div>
                            <p className="font-semibold text-[#2C3E50]">Adres</p>
                            <p className="text-gray-600">{club.address}</p>
                          </div>
                        </div>
                        {club.phone && (
                          <div className="flex items-start space-x-3">
                            <Phone className="text-[#A4C639] mt-1" size={20} />
                            <div>
                              <p className="font-semibold text-[#2C3E50]">Telefon</p>
                              <a href={`tel:${club.phone}`} className="text-[#A4C639]">{club.phone}</a>
                            </div>
                          </div>
                        )}
                        {club.email && (
                          <div className="flex items-start space-x-3">
                            <Mail className="text-[#A4C639] mt-1" size={20} />
                            <div>
                              <p className="font-semibold text-[#2C3E50]">Email</p>
                              <a href={`mailto:${club.email}`} className="text-[#A4C639]">{club.email}</a>
                            </div>
                          </div>
                        )}
                        {club.website && (
                          <div className="flex items-start space-x-3">
                            <Globe className="text-[#A4C639] mt-1" size={20} />
                            <div>
                              <p className="font-semibold text-[#2C3E50]">Strona www</p>
                              <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="text-[#A4C639]">{club.website}</a>
                            </div>
                          </div>
                        )}
                        {club.openingHours && (
                          <div className="flex items-start space-x-3">
                            <Clock className="text-[#A4C639] mt-1" size={20} />
                            <div>
                              <p className="font-semibold text-[#2C3E50]">Godziny otwarcia</p>
                              <p className="text-gray-600">{club.openingHours}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#2C3E50] mb-3">Informacje</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Liczba kortów:</strong> {club.courts}</p>
                        <p><strong>Nawierzchnia:</strong> {club.surface}</p>
                        <p><strong>Rodzaj:</strong> {club.indoor && 'Halowe'}{club.indoor && club.outdoor && ', '}{club.outdoor && 'Zewnętrzne'}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Tenis */}
            <TabsContent value="tenis" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#2C3E50]">{club.fullName}</h2>
                      <p className="text-gray-600">{club.phone} • {club.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#2C3E50]">
                        {courtReservations.tennis.dateOfWeek}
                      </p>
                      <p className="text-gray-600">{courtReservations.tennis.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-4">Legenda:</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 border-2 border-green-300 rounded mr-2"></div>
                        <span className="text-sm">Wolny</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-100 border-2 border-red-300 rounded mr-2"></div>
                        <span className="text-sm">Zajęty</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded mr-2"></div>
                        <span className="text-sm">Zamknięte</span>
                      </div>
                    </div>
                  </div>

                  <ReservationTable data={courtReservations.tennis} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Padel */}
            <TabsContent value="padel" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#2C3E50]">{club.fullName} - Padel</h2>
                      <p className="text-gray-600">{club.phone} • {club.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#2C3E50]">
                        {courtReservations.padel.dateOfWeek}
                      </p>
                      <p className="text-gray-600">{courtReservations.padel.date}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-4">Legenda:</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 border-2 border-green-300 rounded mr-2"></div>
                        <span className="text-sm">Wolny</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-100 border-2 border-red-300 rounded mr-2"></div>
                        <span className="text-sm">Zajęty</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded mr-2"></div>
                        <span className="text-sm">Zamknięte</span>
                      </div>
                    </div>
                  </div>

                  <ReservationTable data={courtReservations.padel} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sparingpartner */}
            <TabsContent value="sparingpartner" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#2C3E50]">{club.fullName}</h2>
                    <p className="text-gray-600">{club.phone} • {club.email}</p>
                  </div>

                  <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center">
                    <Users className="mr-2 text-[#A4C639]" size={24} />
                    Szukam partnera do gry
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clubSparingPartners.map((partner) => (
                      <Card key={partner.id} className="border-2 hover:border-[#A4C639] transition-all">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-[#2C3E50] mb-2">{partner.name}</h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong>Poziom:</strong> <span className="text-[#A4C639]">{' '}{'★'.repeat(partner.level)}</span>
                            </p>
                            <p>
                              <strong>Dostępność:</strong> {partner.availability}
                            </p>
                            <p>
                              <strong>Telefon:</strong> <a href={`tel:${partner.phone}`} className="text-[#A4C639]">{partner.phone}</a>
                            </p>
                            <p className="text-gray-600 mt-3">{partner.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Liga */}
            <TabsContent value="liga" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#2C3E50]">{club.fullName}</h2>
                    <p className="text-gray-600">{club.phone} • {club.email}</p>
                  </div>

                  <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center">
                    <Trophy className="mr-2 text-[#A4C639]" size={24} />
                    Ligi i turnieje klubowe
                  </h3>

                  <div className="space-y-6">
                    {clubLeagues.map((league) => (
                      <Card key={league.id} className="border-2 hover:border-[#A4C639] transition-all">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-[#2C3E50] mb-2">{league.name}</h4>
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                league.status === 'W trakcie' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {league.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="text-[#A4C639]" size={18} />
                              <div>
                                <p className="text-xs text-gray-500">Start</p>
                                <p className="font-semibold">{league.startDate}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="text-[#A4C639]" size={18} />
                              <div>
                                <p className="text-xs text-gray-500">Koniec</p>
                                <p className="font-semibold">{league.endDate}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="text-[#A4C639]" size={18} />
                              <div>
                                <p className="text-xs text-gray-500">Uczestnicy</p>
                                <p className="font-semibold">{league.participants} osób</p>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">{league.description}</p>

                          <Button className="bg-[#A4C639] hover:bg-[#8FB82E] text-white">
                            {league.status === 'Zapisy otwarte' ? 'Zapisz się' : 'Zobacz szczegóły'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubDetailsPageNew;
