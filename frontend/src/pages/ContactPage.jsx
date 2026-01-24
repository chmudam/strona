import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="text-[#A4C639] mr-4" size={64} />
              <h1 className="text-5xl font-bold text-white">Kontakt</h1>
            </div>
            <p className="text-2xl text-gray-300">
              Masz pytania? Chętnie odpowiemy!
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-l-4 border-[#A4C639] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A4C639] p-3 rounded-full flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">Telefon</h3>
                      <a 
                        href="tel:660916097" 
                        className="text-lg text-[#A4C639] hover:text-[#8FB82E] font-semibold"
                      >
                        660 916 097
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Pon-Pt: 9:00 - 17:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#A4C639] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A4C639] p-3 rounded-full flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">Email</h3>
                      <a 
                        href="mailto:kontakt@rezerwujkort.pl" 
                        className="text-lg text-[#A4C639] hover:text-[#8FB82E] font-semibold break-all"
                      >
                        kontakt@rezerwujkort.pl
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Odpowiadamy w ciągu 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#A4C639] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A4C639] p-3 rounded-full flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">Adres</h3>
                      <p className="text-gray-700">
                        RezerwujKort.pl<br />
                        ul. Tenisowa 1<br />
                        00-001 Warszawa<br />
                        Polska
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#A4C639] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A4C639] p-3 rounded-full flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E50] mb-2">Godziny pracy</h3>
                      <div className="text-gray-700 space-y-1">
                        <p><strong>Poniedziałek - Piątek:</strong></p>
                        <p className="ml-2">9:00 - 17:00</p>
                        <p className="mt-2"><strong>Sobota - Niedziela:</strong></p>
                        <p className="ml-2">Nieczynne</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#2C3E50] mb-3 flex items-center">
                    <MessageSquare className="mr-2 text-[#A4C639]" size={20} />
                    Potrzebujesz pomocy?
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Sprawdź naszą sekcję często zadawanych pytań lub skontaktuj się z nami bezpośrednio.
                  </p>
                  <Button
                    onClick={() => window.location.href = '/o-nas'}
                    variant="outline"
                    className="w-full border-2 border-[#A4C639] text-[#A4C639] hover:bg-[#A4C639] hover:text-white"
                  >
                    Więcej informacji
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-4 border-[#A4C639] shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E]">
                  <CardTitle className="text-3xl text-white flex items-center">
                    <Send className="mr-3" size={32} />
                    Wyślij wiadomość
                  </CardTitle>
                  <p className="text-gray-300 mt-2">
                    Wypełnij formularz poniżej, a skontaktujemy się z Tobą tak szybko, jak to możliwe
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-[#2C3E50] font-semibold">
                          Imię <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="Jan"
                          className="mt-2 border-2 focus:border-[#A4C639]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName" className="text-[#2C3E50] font-semibold">
                          Nazwisko <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Kowalski"
                          className="mt-2 border-2 focus:border-[#A4C639]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-[#2C3E50] font-semibold">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="jan.kowalski@example.com"
                          className="mt-2 border-2 focus:border-[#A4C639]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-[#2C3E50] font-semibold">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="600 123 456"
                          className="mt-2 border-2 focus:border-[#A4C639]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-[#2C3E50] font-semibold">
                        Temat
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Jak mogę Ci pomóc?"
                        className="mt-2 border-2 focus:border-[#A4C639]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#2C3E50] font-semibold">
                        Wiadomość <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Opisz swoje pytanie lub problem..."
                        className="mt-2 border-2 focus:border-[#A4C639] min-h-[180px]"
                        required
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-2">
                        <span className="text-red-500">*</span> Pola wymagane
                      </p>
                      <p className="text-xs text-gray-500">
                        Przesyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych 
                        zgodnie z naszą polityką prywatności.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Wyślij wiadomość</span>
                    </Button>

                    <p className="text-xs text-gray-400 text-center mt-4">
                      * To jest wersja demonstracyjna. Formularz nie wysyła rzeczywistych wiadomości.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="mt-8 bg-green-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Często zadawane pytania</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#2C3E50] mb-2">
                        Jak długo czekam na odpowiedź?
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Odpowiadamy zwykle w ciągu 24 godzin roboczych. W pilnych sprawach prosimy o kontakt telefoniczny.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C3E50] mb-2">
                        Czy mogę odwiedzić biuro osobiście?
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Tak, ale prosimy o wcześniejsze umówienie spotkania telefonicznie lub przez email.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C3E50] mb-2">
                        Pytania dotyczące współpracy klubów?
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Odwiedź naszą stronę{' '}
                        <a href="/wspolpraca" className="text-[#A4C639] hover:underline font-semibold">
                          Współpraca
                        </a>
                        {' '}gdzie znajdziesz szczegółowe informacje i dedykowany formularz.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section (Optional) */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-[#2C3E50] flex items-center">
                <MapPin className="mr-2 text-[#A4C639]" size={24} />
                Jak do nas trafić?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-[#A4C639] mx-auto mb-4" size={64} />
                  <p className="text-gray-600 text-lg">
                    Mapa zostanie wkrótce dodana
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    ul. Tenisowa 1, 00-001 Warszawa
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
