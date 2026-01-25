import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { AlertTriangle, Trash2 } from 'lucide-react';

const DeleteAccountPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteRequest = (e) => {
    e.preventDefault();
    
    if (!password) {
      toast({
        title: "Błąd",
        description: "Proszę podać hasło",
        variant: "destructive"
      });
      return;
    }

    if (!confirmed) {
      toast({
        title: "Błąd",
        description: "Musisz potwierdzić usunięcie konta",
        variant: "destructive"
      });
      return;
    }

    setShowConfirmation(true);
  };

  const handleFinalDelete = () => {
    toast({
      title: "Konto usunięte",
      description: "Twoje konto zostało trwale usunięte.",
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-red-600 to-red-700 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle size={40} className="text-white" />
              <h1 className="text-4xl font-bold text-white">Usuń konto</h1>
            </div>
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
              <Button onClick={() => navigate('/profil/zmien-haslo')} variant="outline" className="w-full justify-start border-2">
                Zmiana hasła
              </Button>
              <Button onClick={() => navigate('/profil/usun-konto')} className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                Usuń konto
              </Button>
            </div>

            <div className="lg:col-span-2">
              {!showConfirmation ? (
                <Card className="border-2 border-red-500">
                  <CardHeader className="bg-red-600 text-white">
                    <div className="flex items-center space-x-3">
                      <Trash2 size={28} />
                      <CardTitle className="text-2xl">Usuń konto na stałe</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="font-bold text-red-800 text-lg mb-2">Ostrzeżenie!</h3>
                          <p className="text-red-700 mb-3">
                            Usunięcie konta jest <strong>nieodwracalne</strong>. Wszystkie Twoje dane zostaną trwale usunięte, w tym:
                          </p>
                          <ul className="text-red-700 space-y-1 ml-4 list-disc">
                            <li>Profil użytkownika</li>
                            <li>Historia rezerwacji</li>
                            <li>Dane osobowe</li>
                            <li>Wszystkie powiązane informacje</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleDeleteRequest} className="space-y-6">
                      <div>
                        <Label htmlFor="password" className="text-[#2C3E50] font-semibold">
                          Potwierdź hasłem <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Wpisz swoje hasło"
                          className="mt-2 border-2 focus:border-red-500"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Aby potwierdzić usunięcie konta, wprowadź swoje aktualne hasło
                        </p>
                      </div>

                      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="confirm"
                            checked={confirmed}
                            onCheckedChange={(checked) => setConfirmed(checked)}
                            className="mt-1"
                          />
                          <label htmlFor="confirm" className="text-sm text-gray-700 cursor-pointer">
                            Rozumiem, że usunięcie konta jest <strong>nieodwracalne</strong> i wszystkie moje dane zostaną <strong>trwale usunięte</strong>.
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4">
                          <Trash2 className="mr-2" size={20} />
                          Usuń moje konto
                        </Button>
                        <Button type="button" onClick={() => navigate('/profil/dane')} variant="outline" className="flex-1 border-2 border-gray-400">
                          Anuluj
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-red-500">
                  <CardHeader className="bg-red-600 text-white">
                    <CardTitle className="text-2xl">Ostateczne potwierdzenie</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <AlertTriangle className="text-red-600 mx-auto" size={64} />
                      <h3 className="text-2xl font-bold text-red-800">
                        Czy na pewno chcesz usunąć konto?
                      </h3>
                      <p className="text-gray-700">
                        To jest ostatnia szansa na zmianę decyzji. Po kliknięciu "Tak, usuń konto" nie będzie można cofnąć tej operacji.
                      </p>
                      <div className="flex gap-4 pt-4">
                        <Button onClick={handleFinalDelete} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                          Tak, usuń konto
                        </Button>
                        <Button onClick={() => setShowConfirmation(false)} variant="outline" className="flex-1 border-2 border-gray-400 py-4 text-lg">
                          Nie, zachowaj konto
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeleteAccountPage;