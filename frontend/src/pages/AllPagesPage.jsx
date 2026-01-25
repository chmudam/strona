import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Home, Users, Building2, Trophy, Info, LogIn, UserPlus, MapPin, FileText, Smartphone, Briefcase, Mail, List } from 'lucide-react';

const AllPagesPage = () => {
  const pages = [
    {
      category: 'Strony główne',
      items: [
        {
          path: '/',
          name: 'Strona główna',
          description: 'Hero section, proces 3-kroków, polecane kluby, sparingpartnerzy, mapa Polski',
          icon: Home,
          color: 'bg-blue-500'
        },
        {
          path: '/kluby',
          name: 'Lista klubów',
          description: 'Wszystkie kluby tenisowe z filtrowaniem po mieście i województwie',
          icon: Building2,
          color: 'bg-green-500'
        },
        {
          path: '/sparingpartnerzy',
          name: 'Sparingpartnerzy',
          description: 'Lista wszystkich dostępnych partnerów do gry w tenisa',
          icon: Users,
          color: 'bg-purple-500'
        },
        {
          path: '/turnieje',
          name: 'Turnieje',
          description: 'Nadchodzące turnieje tenisowe w całej Polsce',
          icon: Trophy,
          color: 'bg-yellow-500'
        },
      ]
    },
    {
      category: 'Szczegóły',
      items: [
        {
          path: '/klub/1',
          name: 'Szczegóły klubu (przykład)',
          description: 'WTS DeSki - Warszawa - informacje o klubie i system rezerwacji',
          icon: MapPin,
          color: 'bg-indigo-500'
        },
        {
          path: '/klub/2',
          name: 'MKT Łódź',
          description: 'Miejski Klub Tenisowy Łódź - szczegóły i rezerwacje',
          icon: MapPin,
          color: 'bg-indigo-500'
        },
        {
          path: '/klub/3',
          name: 'Wrocław Tenis Club',
          description: 'Klub tenisowy we Wrocławiu - informacje i rezerwacje',
          icon: MapPin,
          color: 'bg-indigo-500'
        },
      ]
    },
    {
      category: 'Informacje',
      items: [
        {
          path: '/o-nas',
          name: 'O nas',
          description: 'Poznaj platformę RezerwujKort.pl i naszą misję',
          icon: Info,
          color: 'bg-cyan-500'
        },
        {
          path: '/wspolpraca',
          name: 'Współpraca',
          description: 'System dla klubów - rezerwacje, płatności, raporty, aplikacja mobilna',
          icon: Briefcase,
          color: 'bg-orange-500'
        },
        {
          path: '/aplikacja-mobilna',
          name: 'Aplikacja mobilna',
          description: 'Oficjalna aplikacja na Android i iOS - rezerwuj korty z telefonu',
          icon: Smartphone,
          color: 'bg-pink-500'
        },
        {
          path: '/kontakt',
          name: 'Kontakt',
          description: 'Formularz kontaktowy, dane kontaktowe, adres, telefon 660 916 097',
          icon: Mail,
          color: 'bg-red-500'
        },
      ]
    },
    {
      category: 'Użytkownik',
      items: [
        {
          path: '/login',
          name: 'Logowanie',
          description: 'Zaloguj się do swojego konta',
          icon: LogIn,
          color: 'bg-teal-500'
        },
        {
          path: '/register',
          name: 'Rejestracja',
          description: 'Utwórz nowe konto',
          icon: UserPlus,
          color: 'bg-lime-500'
        },
        {
          path: '/forgot-password',
          name: 'Przypomnij hasło',
          description: 'Resetuj hasło do konta',
          icon: Mail,
          color: 'bg-amber-500'
        },
        {
          path: '/profil/dane',
          name: 'Twoje dane',
          description: 'Wyświetl dane osobowe (wymaga logowania)',
          icon: Users,
          color: 'bg-blue-500'
        },
        {
          path: '/profil/edytuj',
          name: 'Edytuj profil',
          description: 'Zmień swoje dane osobowe',
          icon: Users,
          color: 'bg-indigo-500'
        },
        {
          path: '/profil/zmien-haslo',
          name: 'Zmiana hasła',
          description: 'Zaktualizuj swoje hasło',
          icon: Users,
          color: 'bg-purple-500'
        },
        {
          path: '/profil/usun-konto',
          name: 'Usuń konto',
          description: 'Trwale usuń swoje konto',
          icon: Users,
          color: 'bg-red-500'
        },
      ]
    },
    {
      category: 'Dokumenty',
      items: [
        {
          path: '/regulamin',
          name: 'Regulamin',
          description: 'Regulamin korzystania z platformy',
          icon: FileText,
          color: 'bg-gray-500'
        },
        {
          path: '/polityka-cookies',
          name: 'Polityka cookies',
          description: 'Informacje o plikach cookie używanych w serwisie',
          icon: FileText,
          color: 'bg-gray-500'
        },
        {
          path: '/aktualnosci',
          name: 'Archiwum aktualności',
          description: 'Wszystkie newsy i ogłoszenia',
          icon: FileText,
          color: 'bg-gray-500'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <List className="text-[#A4C639] mr-3" size={40} />
              <h1 className="text-4xl font-bold text-white">Wszystkie strony</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">
              Kompletna lista wszystkich dostępnych stron w aplikacji
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {pages.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-6 pb-2 border-b-4 border-[#A4C639]">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((page, pageIndex) => {
                  const IconComponent = page.icon;
                  return (
                    <Link
                      key={pageIndex}
                      to={page.path}
                      className="block transform transition-all duration-200 hover:scale-105"
                    >
                      <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#A4C639]">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className={`${page.color} p-3 rounded-lg`}>
                              <IconComponent className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-[#2C3E50] text-lg mb-2">
                                {page.name}
                              </CardTitle>
                              <p className="text-sm text-gray-500 font-mono">
                                {page.path}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {page.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Informacja o mocku */}
          <Card className="mt-12 border-l-4 border-[#A4C639] bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">ℹ️ Informacja</h3>
              <p className="text-gray-700 leading-relaxed">
                To jest wersja <strong>demonstracyjna</strong> z mockowanymi danymi. 
                Wszystkie kluby, sparingpartnerzy, turnieje i rezerwacje są przykładowe. 
                Niektóre linki (np. Współpraca, Kontakt, Regulamin) mogą prowadzić do stron, 
                które nie zostały jeszcze zaimplementowane.
              </p>
            </CardContent>
          </Card>

          {/* Statystyki */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Card className="text-center p-6">
              <p className="text-4xl font-bold text-[#A4C639] mb-2">
                {pages.reduce((acc, cat) => acc + cat.items.length, 0)}
              </p>
              <p className="text-gray-600 text-sm">Łącznie stron</p>
            </Card>
            <Card className="text-center p-6">
              <p className="text-4xl font-bold text-[#A4C639] mb-2">
                {pages.length}
              </p>
              <p className="text-gray-600 text-sm">Kategorii</p>
            </Card>
            <Card className="text-center p-6">
              <p className="text-4xl font-bold text-[#A4C639] mb-2">6</p>
              <p className="text-gray-600 text-sm">Klubów</p>
            </Card>
            <Card className="text-center p-6">
              <p className="text-4xl font-bold text-[#A4C639] mb-2">4</p>
              <p className="text-gray-600 text-sm">Partnerów</p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllPagesPage;
