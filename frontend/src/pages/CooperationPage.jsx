import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Check, Calendar, DollarSign, BarChart3, Users, Smartphone, Globe, Trophy, Phone, Mail } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const CooperationPage = () => {
  const [formData, setFormData] = useState({
    clubName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.clubName || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
    });

    // Reset form
    setFormData({
      clubName: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const features = [
    {
      icon: Calendar,
      title: 'Centralne zarządzanie rezerwacjami',
      description: 'System rezerwacji online dostępny 24/7 dla Twoich klientów. Pełna kontrola nad grafikiem wszystkich kortów.'
    },
    {
      icon: DollarSign,
      title: 'Kontrola płatności',
      description: 'Monitorowanie płatności za rezerwacje, raporty finansowe, automatyczne przypomnienia o płatnościach.'
    },
    {
      icon: BarChart3,
      title: 'Raporty wykorzystania',
      description: 'Szczegółowe analizy obłożenia kortów, statystyki użytkowania, optymalizacja cennika.'
    },
    {
      icon: Users,
      title: 'Dostęp dla pracowników',
      description: 'Możliwość utworzenia loginów dla wielu pracowników z różnymi poziomami dostępu.'
    },
    {
      icon: Smartphone,
      title: 'Aplikacja mobilna',
      description: 'Dedykowana aplikacja na Android i iOS dla Twoich klientów - rezerwacje z każdego miejsca.'
    },
    {
      icon: Globe,
      title: 'Widget na stronę WWW',
      description: 'Grafik dostępności kortów możemy umieścić bezpośrednio na Twojej stronie internetowej.'
    },
    {
      icon: Trophy,
      title: 'Organizacja lig i turniejów',
      description: 'Narzędzia do prowadzenia lig klubowych, turniejów i wydarzeń sportowych.'
    },
    {
      icon: Check,
      title: 'Elastyczne rozwiązania',
      description: 'Dostosowujemy system do Twoich potrzeb - od prostego grafiku po zaawansowane funkcje.'
    }
  ];

  const benefits = [
    'Intuicyjna obsługa - nie potrzebujesz specjalistycznej wiedzy',
    'Działanie w chmurze - brak instalacji, dostęp z każdego miejsca',
    'Automatyzacja procesów - oszczędność czasu pracowników',
    'Zwiększenie obłożenia kortów dzięki rezerwacjom online',
    'Profesjonalny wizerunek klubu',
    'Wsparcie techniczne i szkolenia'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Współpraca</h1>
            <p className="text-2xl text-[#A4C639] font-semibold mb-4">
              Profesjonalna aplikacja dla klubów sportów rakietowych
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stworzona z myślą o klubach tenisowych, padelowych i squashowych – 
              łączy intuicyjność obsługi z pełnym zestawem funkcji niezbędnych w nowoczesnym klubie.
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&h=600&fit=crop"
            alt="Korty tenisowe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/90 to-[#2C3E50]/70 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-4xl font-bold mb-4">
                Zarządzaj klubem sprawniej i prościej
              </h2>
              <p className="text-xl">
                Rezerwacje • Płatności • Raporty • Logowanie pracowników – wszystko w jednym miejscu
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Introduction */}
          <Card className="mb-12 border-l-4 border-[#A4C639] shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nasza platforma to kompleksowe rozwiązanie dla klubów, które chcą zwiększyć efektywność 
                zarządzania i komfort użytkowników. System jest prosty w obsłudze, nawet dla osób 
                z podstawową znajomością komputera, zapewniając pełną kontrolę nad klubem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Produkt dedykowany klubom posiadającym minimum dwa korty</strong>, które chcą 
                wyeliminować chaos w rezerwacjach i zapewnić klientom wygodny dostęp do systemu online.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Co oferuje nasz system?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-[#A4C639] to-[#8FB82E] rounded-2xl p-12 mb-16 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">
              Dlaczego warto wybrać naszą platformę?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <Card className="mb-16 bg-blue-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C3E50] text-center">
                Potrzebujesz więcej?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold mr-3">✓</span>
                  <span>Grafik dostępności kortów możemy umieścić na Twojej stronie internetowej</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold mr-3">✓</span>
                  <span>Posiadamy narzędzia do organizowania lig i wydarzeń sportowych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold mr-3">✓</span>
                  <span>Jesteśmy elastyczni – jeżeli potrzebujesz wyłącznie programu do zarządzania (bez ogólnodostępnego grafiku), możemy taki dla Ciebie przygotować</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A4C639] font-bold mr-3">✓</span>
                  <span>Posiadamy aplikację mobilną dostępną na Android i iOS</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">
                Skontaktuj się z nami
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Wypełnij formularz lub zadzwoń. Udostępnimy Ci program, abyś sam mógł sprawdzić jego możliwości.
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-[#A4C639]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#A4C639] p-3 rounded-full">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefon</p>
                        <p className="text-xl font-bold text-[#2C3E50]">660 916 097</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#A4C639]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#A4C639] p-3 rounded-full">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-xl font-bold text-[#2C3E50]">kontakt@rezerwujkort.pl</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>💡 Wskazówka:</strong> Zajrzyj również na stronę{' '}
                  <a href="/o-nas" className="text-[#A4C639] hover:underline font-semibold">
                    o nas
                  </a>
                  {' '}aby poznać naszą historię i filozofię działania.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-4 border-[#A4C639] shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E]">
                <CardTitle className="text-2xl text-white text-center">
                  Formularz kontaktowy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="clubName" className="text-[#2C3E50] font-semibold">
                      Nazwa Klubu <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="clubName"
                      type="text"
                      value={formData.clubName}
                      onChange={(e) => setFormData({...formData, clubName: e.target.value})}
                      placeholder="np. Klub Tenisowy Warszawa"
                      className="mt-2 border-2 focus:border-[#A4C639]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#2C3E50] font-semibold">
                      Telefon <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="np. 600 123 456"
                      className="mt-2 border-2 focus:border-[#A4C639]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#2C3E50] font-semibold">
                      E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="twoj@email.com"
                      className="mt-2 border-2 focus:border-[#A4C639]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#2C3E50] font-semibold">
                      Treść wiadomości <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Opisz swoje potrzeby i oczekiwania..."
                      className="mt-2 border-2 focus:border-[#A4C639] min-h-[120px]"
                      required
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    Pola oznaczone <span className="text-red-500">*</span> są wymagane
                  </p>

                  <Button
                    type="submit"
                    className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg"
                  >
                    Wyślij wiadomość
                  </Button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    * To jest wersja demonstracyjna. Formularz nie wysyła rzeczywistych wiadomości.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CooperationPage;
