import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileDataPage = () => {
  const navigate = useNavigate();
  
  // Mock user data
  const userData = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '+48 600 123 456',
    city: 'Warszawa',
    memberSince: '15.01.2024'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#A4C639] p-4 rounded-full">
                <User size={48} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">{userData.firstName} {userData.lastName}</h1>
                <p className="text-gray-300 text-lg">Członek od {userData.memberSince}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Menu */}
            <div className="space-y-2">
              <Button
                onClick={() => navigate('/profil/dane')}
                className="w-full justify-start bg-[#A4C639] hover:bg-[#8FB82E] text-white"
              >
                Twoje dane
              </Button>
              <Button
                onClick={() => navigate('/profil/edytuj')}
                variant="outline"
                className="w-full justify-start border-2 border-gray-300 hover:border-[#A4C639]"
              >
                Edytuj profil
              </Button>
              <Button
                onClick={() => navigate('/profil/zmien-haslo')}
                variant="outline"
                className="w-full justify-start border-2 border-gray-300 hover:border-[#A4C639]"
              >
                Zmiana hasła
              </Button>
              <Button
                onClick={() => navigate('/profil/usun-konto')}
                variant="outline"
                className="w-full justify-start border-2 border-red-300 hover:border-red-500 text-red-600 hover:text-red-700"
              >
                Usuń konto
              </Button>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-[#A4C639]">
                <CardHeader className="bg-[#2C3E50] text-white">
                  <CardTitle className="text-2xl">Twoje dane</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 pb-6 border-b">
                      <User className="text-[#A4C639] mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Imię i nazwisko</p>
                        <p className="text-lg font-semibold text-[#2C3E50]">
                          {userData.firstName} {userData.lastName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 pb-6 border-b">
                      <Mail className="text-[#A4C639] mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="text-lg font-semibold text-[#2C3E50]">{userData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 pb-6 border-b">
                      <Phone className="text-[#A4C639] mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Telefon</p>
                        <p className="text-lg font-semibold text-[#2C3E50]">{userData.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 pb-6 border-b">
                      <MapPin className="text-[#A4C639] mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Miasto</p>
                        <p className="text-lg font-semibold text-[#2C3E50]">{userData.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Calendar className="text-[#A4C639] mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Członek od</p>
                        <p className="text-lg font-semibold text-[#2C3E50]">{userData.memberSince}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <Button
                      onClick={() => navigate('/profil/edytuj')}
                      className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-4 text-lg"
                    >
                      <Edit className="mr-2" size={20} />
                      Edytuj dane
                    </Button>
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

export default ProfileDataPage;