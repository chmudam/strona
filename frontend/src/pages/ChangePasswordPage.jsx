import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { KeyRound } from 'lucide-react';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola",
        variant: "destructive"
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Błąd",
        description: "Nowe hasła nie są identyczne",
        variant: "destructive"
      });
      return;
    }

    if (formData.newPassword.length < 6) {
      toast({
        title: "Błąd",
        description: "Hasło musi mieć minimum 6 znaków",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Hasło zmienione!",
      description: "Twoje hasło zostało pomyślnie zaktualizowane.",
    });
    
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => navigate('/profil/dane'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white">Zmiana hasła</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Button onClick={() => navigate('/profil/dane')} variant="outline" className="w-full justify-start border-2">
                Twoje dane
              </Button>
              <Button onClick={() => navigate('/profil/edytuj')} variant="outline" className="w-full justify-start border-2">
                Edytuj profil
              </Button>
              <Button onClick={() => navigate('/profil/zmien-haslo')} className="w-full justify-start bg-[#A4C639] hover:bg-[#8FB82E] text-white">
                Zmiana hasła
              </Button>
              <Button onClick={() => navigate('/profil/usun-konto')} variant="outline" className="w-full justify-start border-2 border-red-300 text-red-600">
                Usuń konto
              </Button>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-2 border-[#A4C639]">
                <CardHeader className="bg-[#2C3E50] text-white">
                  <div className="flex items-center space-x-3">
                    <KeyRound size={28} />
                    <CardTitle className="text-2xl">Zmień hasło</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="currentPassword" className="text-[#2C3E50] font-semibold">
                        Obecne hasło <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                        placeholder="••••••••"
                        className="mt-2 border-2 focus:border-[#A4C639]"
                        required
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <Label htmlFor="newPassword" className="text-[#2C3E50] font-semibold">
                        Nowe hasło <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                        placeholder="••••••••"
                        className="mt-2 border-2 focus:border-[#A4C639]"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimum 6 znaków</p>
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword" className="text-[#2C3E50] font-semibold">
                        Powtórz nowe hasło <span className="text-red-500">*</span>
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

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Wskazówki dotyczące hasła:</strong>
                      </p>
                      <ul className="text-xs text-blue-700 mt-2 space-y-1 ml-4 list-disc">
                        <li>Użyj minimum 6 znaków</li>
                        <li>Użyj kombinacji liter, cyfr i znaków specjalnych</li>
                        <li>Nie używaj oczywistych haseł typu "12345" lub "haslo"</li>
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" className="flex-1 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-4">
                        Zmień hasło
                      </Button>
                      <Button type="button" onClick={() => navigate('/profil/dane')} variant="outline" className="flex-1 border-2 border-gray-400">
                        Anuluj
                      </Button>
                    </div>
                  </form>
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

export default ChangePasswordPage;