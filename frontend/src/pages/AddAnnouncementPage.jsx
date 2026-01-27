import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { UserPlus, Upload, X, Eye, Send, ImageIcon } from 'lucide-react';
import { tennisClubs } from '../mockData';
import { useToast } from '../hooks/use-toast';

const AddAnnouncementPage = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    discipline: 'tenis',
    selectedClubs: [],
    description: '',
    preferredTimes: '',
    phone: '',
    skillLevel: '',
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const disciplines = [
    { value: 'tenis', label: 'Tenis' },
    { value: 'padel', label: 'Padel' },
    { value: 'squash', label: 'Squash' },
    { value: 'badminton', label: 'Badminton' }
  ];

  const skillLevels = [
    { value: '1', label: 'Poziom 1 - Początkujący' },
    { value: '2', label: 'Poziom 2 - Podstawowy' },
    { value: '3', label: 'Poziom 3 - Średniozaawansowany' },
    { value: '4', label: 'Poziom 4 - Zaawansowany' },
    { value: '5', label: 'Poziom 5 - Profesjonalny' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClubSelect = (e) => {
    const clubId = parseInt(e.target.value);
    if (clubId && !formData.selectedClubs.includes(clubId)) {
      setFormData(prev => ({
        ...prev,
        selectedClubs: [...prev.selectedClubs, clubId]
      }));
    }
    e.target.value = ''; // Reset select
  };

  const removeClub = (clubId) => {
    setFormData(prev => ({
      ...prev,
      selectedClubs: prev.selectedClubs.filter(id => id !== clubId)
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setFormData(prev => ({ ...prev, photo: null }));
    setPhotoPreview(null);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleSubmit = () => {
    toast({
      title: "Ogłoszenie dodane!",
      description: "Twoje ogłoszenie zostało pomyślnie dodane. (Demo)",
    });
    setShowPreview(false);
  };

  const getClubName = (clubId) => {
    const club = tennisClubs.find(c => c.id === clubId);
    return club ? club.name : 'Nieznany klub';
  };

  const getSkillLevelLabel = (value) => {
    const level = skillLevels.find(l => l.value === value);
    return level ? level.label : 'Nie wybrano';
  };

  const getDisciplineLabel = (value) => {
    const discipline = disciplines.find(d => d.value === value);
    return discipline ? discipline.label : value;
  };

  // Preview Modal
  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#2C3E50] to-[#34495e]">
                <CardTitle className="text-white flex items-center gap-3">
                  <Eye size={24} />
                  Podgląd ogłoszenia
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Photo preview */}
                  {photoPreview && (
                    <div className="flex justify-center mb-6">
                      <img 
                        src={photoPreview} 
                        alt="Preview" 
                        className="max-w-full max-h-64 rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Dyscyplina</h4>
                      <p className="text-lg font-semibold text-[#2C3E50]">
                        {getDisciplineLabel(formData.discipline)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Poziom gry</h4>
                      <p className="text-lg font-semibold text-[#2C3E50]">
                        {getSkillLevelLabel(formData.skillLevel)}
                      </p>
                    </div>
                  </div>

                  {formData.selectedClubs.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Wybrane kluby</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.selectedClubs.map(clubId => (
                          <span 
                            key={clubId}
                            className="bg-[#A4C639] text-white px-3 py-1 rounded-full text-sm"
                          >
                            {getClubName(clubId)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Opis ogłoszenia</h4>
                    <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                      {formData.description || 'Brak opisu'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Preferowane terminy gry</h4>
                      <p className="text-gray-700">
                        {formData.preferredTimes || 'Nie podano'}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Telefon kontaktowy</h4>
                      <p className="text-gray-700">
                        {formData.phone || 'Nie podano'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-6 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setShowPreview(false)}
                    className="flex-1"
                  >
                    Wróć do edycji
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1 bg-[#A4C639] hover:bg-[#8FB82E] text-white"
                  >
                    <Send className="mr-2" size={18} />
                    Opublikuj ogłoszenie
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                <UserPlus className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold text-white">Dodaj ogłoszenie</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">
              Znajdź partnera do gry lub poinformuj o swoich preferencjach
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-8">
                
                {/* Dyscyplina */}
                <div className="space-y-2">
                  <Label htmlFor="discipline" className="text-base font-semibold text-[#2C3E50]">
                    Dyscyplina
                  </Label>
                  <select
                    id="discipline"
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all bg-white text-gray-700"
                  >
                    {disciplines.map(d => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </div>

                {/* Wybierz klub */}
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <Label htmlFor="club" className="text-base font-semibold text-[#2C3E50]">
                        Wybierz klub
                      </Label>
                      <select
                        id="club"
                        onChange={handleClubSelect}
                        className="w-full mt-2 p-3 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all bg-white text-gray-700"
                        defaultValue=""
                      >
                        <option value="" disabled>-- Wybierz klub --</option>
                        {tennisClubs.map(club => (
                          <option 
                            key={club.id} 
                            value={club.id}
                            disabled={formData.selectedClubs.includes(club.id)}
                          >
                            {club.name} - {club.city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <Label className="text-base font-semibold text-[#2C3E50]">
                        Wybrane kluby:
                      </Label>
                      <div className="mt-2 min-h-[48px] p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        {formData.selectedClubs.length === 0 ? (
                          <span className="text-gray-400 text-sm">Brak wybranych klubów</span>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {formData.selectedClubs.map(clubId => (
                              <span 
                                key={clubId}
                                className="inline-flex items-center bg-[#A4C639] text-white px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {getClubName(clubId)}
                                <button
                                  type="button"
                                  onClick={() => removeClub(clubId)}
                                  className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                                >
                                  <X size={14} />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opis ogłoszenia */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-semibold text-[#2C3E50]">
                    Opis ogłoszenia
                  </Label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Opisz czego szukasz, jakie masz oczekiwania wobec partnera do gry..."
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all resize-none text-gray-700"
                  />
                </div>

                {/* Preferowane terminy gry */}
                <div className="space-y-2">
                  <Label htmlFor="preferredTimes" className="text-base font-semibold text-[#2C3E50]">
                    Preferowane terminy gry
                  </Label>
                  <textarea
                    id="preferredTimes"
                    name="preferredTimes"
                    value={formData.preferredTimes}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="np. Poniedziałki i środy 18:00-20:00, weekendy rano"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all resize-none text-gray-700"
                  />
                </div>

                {/* Telefon */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold text-[#2C3E50]">
                    Telefon kontaktowy
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="np. 600 123 456"
                    className="p-3 border-2 border-gray-200 focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all"
                  />
                </div>

                {/* Poziom gry */}
                <div className="space-y-2">
                  <Label htmlFor="skillLevel" className="text-base font-semibold text-[#2C3E50]">
                    Poziom gry
                  </Label>
                  <select
                    id="skillLevel"
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#A4C639] focus:ring-2 focus:ring-[#A4C639]/20 transition-all bg-white text-gray-700"
                  >
                    <option value="">Wybierz poziom</option>
                    {skillLevels.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>

                {/* Zdjęcie */}
                <div className="space-y-2">
                  <Label className="text-base font-semibold text-[#2C3E50]">
                    Zdjęcie
                  </Label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                      <span className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors shadow-sm">
                        <Upload className="mr-2" size={18} />
                        Dodaj zdjęcie
                      </span>
                    </label>
                    {photoPreview ? (
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={photoPreview} 
                            alt="Preview" 
                            className="w-16 h-16 object-cover rounded-lg shadow-sm border-2 border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-sm"
                          >
                            <X size={12} />
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">{formData.photo?.name}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400 flex items-center gap-2">
                        <ImageIcon size={18} />
                        Brak pliku
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    onClick={handlePreview}
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    <Eye className="mr-2" size={20} />
                    Podgląd
                  </Button>
                </div>

              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 border-l-4 border-[#A4C639] bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">💡 Wskazówka</h3>
              <p className="text-gray-700 leading-relaxed">
                Im więcej szczegółów podasz w opisie ogłoszenia, tym łatwiej będzie Ci znaleźć idealnego partnera do gry.
                Pamiętaj o podaniu preferowanych terminów i poziomu gry!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddAnnouncementPage;
