import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Smartphone, Check, Star, Download, Calendar, MapPin, Clock, Bell } from 'lucide-react';

const MobileAppPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Szybkie rezerwacje',
      description: 'Zarezerwuj kort w kilka sekund bezpośrednio z telefonu'
    },
    {
      icon: MapPin,
      title: 'Znajdź kluby',
      description: 'Przeglądaj dostępne kluby w Twojej okolicy'
    },
    {
      icon: Clock,
      title: 'Sprawdź dostępność',
      description: 'Zobacz wolne terminy w czasie rzeczywistym'
    },
    {
      icon: Bell,
      title: 'Powiadomienia',
      description: 'Otrzymuj przypomnienia o swoich rezerwacjach'
    }
  ];

  const screenshots = [
    {
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop',
      alt: 'Ekran główny aplikacji'
    },
    {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop',
      alt: 'Lista klubów'
    },
    {
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=600&fit=crop',
      alt: 'Rezerwacja kortu'
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
              <Smartphone className="text-[#A4C639] mr-4" size={64} />
              <h1 className="text-5xl font-bold text-white">Aplikacja Mobilna</h1>
            </div>
            <p className="text-2xl text-[#A4C639] font-semibold mb-4">
              Aplikacja RezerwujKort.pl jest już dostępna
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oficjalna aplikacja portalu www.RezerwujKort.pl
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section with Phone Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Text */}
            <div>
              <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">
                Rezerwuj korty zawsze i wszędzie
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Dzięki aplikacji mobilnej z łatwością sprawdzisz dostępność kortów 
                lub dokonasz rezerwacji w swoim ulubionym klubie. Wszystko w jednym miejscu, 
                szybko i wygodnie.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="text-[#A4C639] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    <strong>Dostępna na Android i iOS</strong> - Pobierz z Google Play lub App Store
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-[#A4C639] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    <strong>Synchronizacja z kontem</strong> - Wszystkie rezerwacje w jednym miejscu
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-[#A4C639] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    <strong>Intuicyjny interfejs</strong> - Prosta i przyjazna obsługa
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=pl.avroit.rezerwujkort.pl&hl=pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Pobierz z Google Play"
                    className="h-12"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/rezerwujkort-pl/id6475010687?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Pobierz z App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            {/* Right side - Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-24 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                    {/* Screen Content */}
                    <img
                      src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=500&fit=crop"
                      alt="Aplikacja RezerwujKort"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-4 top-20 bg-[#A4C639] text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                  <Download size={24} />
                </div>
                <div className="absolute -left-4 bottom-32 bg-[#2C3E50] text-white px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="text-[#A4C639]" size={20} />
                    <span className="font-bold">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Zobacz jak działa aplikacja
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <Card className="overflow-hidden shadow-xl">
                    <div className="relative" style={{ paddingBottom: '200%' }}>
                      <img
                        src={screenshot.url}
                        alt={screenshot.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 bg-white">
                      <p className="text-center text-sm font-semibold text-[#2C3E50]">
                        {screenshot.alt}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Główne funkcje aplikacji
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#A4C639]">
                    <CardContent className="p-6 text-center">
                      <div className="bg-[#A4C639] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-lg font-bold text-[#2C3E50] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#A4C639] to-[#8FB82E] text-white text-center p-12">
            <h2 className="text-4xl font-bold mb-6">
              Pobierz i sprawdź!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dołącz do tysięcy użytkowników, którzy już korzystają z naszej aplikacji
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=pl.avroit.rezerwujkort.pl&hl=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Pobierz z Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/rezerwujkort-pl/id6475010687?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Pobierz z App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Miłego korzystania! 🎾
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileAppPage;
