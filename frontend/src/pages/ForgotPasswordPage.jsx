import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { KeyRound, ArrowLeft } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Błąd",
        description: "Proszę podać adres email",
        variant: "destructive"
      });
      return;
    }

    setSent(true);
    toast({
      title: "Email wysłany!",
      description: "Link do resetowania hasła został wysłany na podany adres.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <Card className="w-full max-w-md border-4 border-[#A4C639] shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white rounded-t-lg">
            <div className="flex items-center justify-center mb-4">
              <KeyRound size={48} />
            </div>
            <CardTitle className="text-2xl text-center">Przypomnij hasło</CardTitle>
            <p className="text-center text-gray-300 mt-2 text-sm">
              Podaj adres email przypisany do konta
            </p>
          </CardHeader>
          <CardContent className="p-8">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-[#2C3E50] font-semibold">
                    Adres email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj@email.com"
                    className="mt-2 border-2 focus:border-[#A4C639]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg"
                >
                  Wyślij link resetujący
                </Button>

                <div className="text-center">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center text-[#A4C639] hover:text-[#8FB82E] font-semibold"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Powrót do logowania
                  </Link>
                </div>

                <p className="text-xs text-gray-400 text-center mt-4">
                  * To jest wersja demonstracyjna. Email nie zostanie wysłany.
                </p>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 mb-3">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Email wysłany!</h3>
                  <p className="text-green-700 mb-4">
                    Sprawdź swoją skrzynkę email. Jeśli konto z tym adresem istnieje, otrzymasz link do resetowania hasła.
                  </p>
                  <p className="text-sm text-green-600">
                    Link jest ważny przez 24 godziny.
                  </p>
                </div>

                <Button
                  onClick={() => setSent(false)}
                  variant="outline"
                  className="w-full border-2 border-[#A4C639] text-[#A4C639] hover:bg-[#A4C639] hover:text-white"
                >
                  Wyślij ponownie
                </Button>

                <div className="text-center">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center text-[#A4C639] hover:text-[#8FB82E] font-semibold"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Powrót do logowania
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;