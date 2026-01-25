import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { UserPlus } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Błąd",
        description: "Hasła nie są identyczne",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: "Błąd",
        description: "Musisz zaakceptować regulamin",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Rejestracja zakończona!",
      description: "Witamy w RezerwujKort.pl! Możesz się teraz zalogować.",
    });
    
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <Card className="w-full max-w-2xl border-4 border-[#A4C639] shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white rounded-t-lg">
            <div className="flex items-center justify-center mb-4">
              <UserPlus size={48} />
            </div>
            <CardTitle className="text-3xl text-center">Uzupełnij dane</CardTitle>
            <p className="text-center text-gray-300 mt-2">Załóż bezpłatne konto</p>
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
                <div className="flex mt-2">
                  <span className="inline-flex items-center px-3 border-2 border-r-0 border-gray-300 bg-gray-100 text-gray-600 rounded-l-md">
                    +48
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="600 123 456"
                    className="border-2 focus:border-[#A4C639] rounded-l-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="password" className="text-[#2C3E50] font-semibold">
                    Hasło <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="••••••••"
                    className="mt-2 border-2 focus:border-[#A4C639]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-[#2C3E50] font-semibold">
                    Powtórz hasło <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="••••••••"
                    className="mt-2 border-2 focus:border-[#A4C639]"
                    required
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 mb-3">
                  Pola oznaczone <span className="text-red-500">*</span> są wymagane
                </p>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked})}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                    Akceptuję{' '}
                    <Link to="/regulamin" className="text-[#A4C639] hover:underline font-semibold">
                      regulamin
                    </Link>
                    {' '}serwisu Rezerwujkort.pl
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg"
              >
                Zarejestruj się
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Masz już konto?{' '}
                  <Link to="/login" className="text-[#A4C639] hover:text-[#8FB82E] font-semibold underline">
                    Zaloguj się
                  </Link>
                </p>
              </div>

              <p className="text-xs text-gray-400 text-center mt-4">
                * To jest wersja demonstracyjna. Rejestracja nie zapisuje prawdziwych danych.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;