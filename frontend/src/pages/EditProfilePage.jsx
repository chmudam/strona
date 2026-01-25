import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '600 123 456',
    city: 'Warszawa'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Dane zaktualizowane!",
      description: "Twoje dane zostały pomyślnie zapisane.",
    });
    setTimeout(() => navigate('/profil/dane'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white">Edytuj profil</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Button onClick={() => navigate('/profil/dane')} variant="outline" className="w-full justify-start border-2">
                Twoje dane
              </Button>
              <Button onClick={() => navigate('/profil/edytuj')} className="w-full justify-start bg-[#A4C639] hover:bg-[#8FB82E] text-white">
                Edytuj profil
              </Button>
              <Button onClick={() => navigate('/profil/zmien-haslo')} variant="outline" className="w-full justify-start border-2">
                Zmiana hasła
              </Button>
              <Button onClick={() => navigate('/profil/usun-konto')} variant="outline" className="w-full justify-start border-2 border-red-300 text-red-600">
                Usuń konto
              </Button>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-2 border-[#A4C639]">
                <CardHeader className="bg-[#2C3E50] text-white">
                  <CardTitle className="text-2xl">Edytuj dane osobowe</CardTitle>
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
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
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
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
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
                        className="mt-2 border-2 focus:border-[#A4C639]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-[#2C3E50] font-semibold">
                        Telefon
                      </Label>
                      <div className="flex mt-2">
                        <span className="inline-flex items-center px-3 border-2 border-r-0 border-gray-300 bg-gray-100 rounded-l-md">+48</span>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="border-2 focus:border-[#A4C639] rounded-l-none"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-[#2C3E50] font-semibold">
                        Miasto
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="mt-2 border-2 focus:border-[#A4C639]"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" className="flex-1 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-4">
                        Zapisz zmiany
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

export default EditProfilePage;