import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from '../hooks/use-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola",
        variant: "destructive"
      });
      return;
    }

    // Mock login
    toast({
      title: "Zalogowano!",
      description: "Witamy z powrotem!",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <Card className="w-full max-w-md border-4 border-[#A4C639] shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Zaloguj się</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-[#2C3E50] font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  className="mt-2 border-2 focus:border-[#A4C639]"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-[#2C3E50] font-semibold">Hasło</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 border-2 focus:border-[#A4C639]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold py-6 text-lg"
              >
                Zaloguj się
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Nie masz konta?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="text-[#A4C639] hover:text-[#8FB82E] font-semibold underline"
                  >
                    Załóż konto
                  </button>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className="text-[#A4C639] hover:text-[#8FB82E] font-semibold underline"
                  >
                    Zapomniałeś hasła?
                  </button>
                </p>
              </div>
            </form>

            <p className="text-xs text-gray-400 text-center mt-6">
              * To jest wersja demonstracyjna. Logowanie nie wymaga prawdziwych danych.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
