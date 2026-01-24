import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Cookie, Shield, Settings, TrendingUp, Bell, Eye } from 'lucide-react';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Niezbędne pliki cookies',
      description: 'Umożliwiają korzystanie z usług, np. uwierzytelnianie użytkownika.'
    },
    {
      icon: Shield,
      title: 'Pliki bezpieczeństwa',
      description: 'Wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania.'
    },
    {
      icon: TrendingUp,
      title: 'Wydajnościowe cookies',
      description: 'Zbierają informacje o sposobie korzystania ze stron internetowych.'
    },
    {
      icon: Settings,
      title: 'Funkcjonalne cookies',
      description: 'Zapamiętują wybrane przez Ciebie ustawienia (język, region, rozmiar czcionki).'
    },
    {
      icon: Eye,
      title: 'Reklamowe cookies',
      description: 'Dostarczają treści reklamowe dostosowane do Twoich zainteresowań.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <Cookie className="text-[#A4C639] mr-4" size={64} />
              <h1 className="text-5xl font-bold text-white">Polityka Cookies</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Informacje o plikach cookies stosowanych w naszym serwisie
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-[#A4C639]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Czym są pliki cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pliki cookies (tzw. ciasteczka) stanowią dane informatyczne, w szczególności pliki tekstowe, 
                które przechowywane są w urządzeniu końcowym Użytkownika i przeznaczone są do korzystania 
                ze stron internetowych Serwisu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pliki cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, 
                czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              </p>
            </CardContent>
          </Card>

          {/* Purpose */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C3E50]">W jakim celu używamy cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold text-2xl mr-3">1.</span>
                  <p className="text-gray-700">
                    <strong>Dostosowanie zawartości</strong> - pozwalają rozpoznać urządzenie i wyświetlić 
                    stronę dostosowaną do indywidualnych potrzeb użytkownika.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold text-2xl mr-3">2.</span>
                  <p className="text-gray-700">
                    <strong>Tworzenie statystyk</strong> - pomagają zrozumieć sposób korzystania 
                    ze stron, co umożliwia ulepszanie ich struktury i zawartości.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold text-2xl mr-3">3.</span>
                  <p className="text-gray-700">
                    <strong>Utrzymanie sesji</strong> - dzięki czemu nie musisz na każdej podstronie 
                    ponownie wpisywać loginu i hasła.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold text-2xl mr-3">4.</span>
                  <p className="text-gray-700">
                    <strong>Treści reklamowe</strong> - dostarczanie reklam bardziej dostosowanych 
                    do zainteresowań użytkownika.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-8">
            Rodzaje stosowanych plików cookies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {cookieTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-[#A4C639]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#A4C639] p-3 rounded-full flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2C3E50] mb-2">{type.title}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Settings */}
          <Card className="mb-8 bg-blue-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C3E50] flex items-center">
                <Settings className="mr-3 text-[#A4C639]" size={28} />
                Zarządzanie plikami cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                W wielu przypadkach przeglądarka internetowa domyślnie dopuszcza przechowywanie plików cookies 
                w urządzeniu końcowym. Możesz w każdym czasie zmienić ustawienia dotyczące plików cookies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną 
                obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich 
                każdorazowym zamieszczeniu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są 
                w ustawieniach przeglądarki internetowej (menu „Pomoc").
              </p>
            </CardContent>
          </Card>

          {/* Warning */}
          <Card className="mb-8 border-l-4 border-yellow-500 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Bell className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#2C3E50] mb-2">Ważne</h3>
                  <p className="text-gray-700">
                    Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności 
                    dostępne na stronach internetowych Serwisu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publisher Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C3E50]">Wydawca Serwisu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                ESOR - Elektroniczne Systemy Obsługi Rezerwacji<br />
                z siedzibą w Starachowicach
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="border-2 border-[#A4C639]">
            <CardContent className="p-6 text-center">
              <p className="text-gray-700 mb-4">
                Więcej informacji na temat plików cookies dostępnych jest pod adresem:
              </p>
              <a 
                href="http://wszystkoociasteczkach.pl/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A4C639] hover:text-[#8FB82E] font-semibold text-lg underline"
              >
                wszystkoociasteczkach.pl
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
