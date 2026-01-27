import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Edit, Trash2, Eye, X, MapPin, Award, Building2, Phone, Clock, PlusCircle } from 'lucide-react';
import { userAnnouncements, tennisClubs } from '../mockData';
import { useToast } from '../hooks/use-toast';

const MyAnnouncementsPage = () => {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState(userAnnouncements);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const getSkillLevelLabel = (level) => {
    const levels = {
      1: 'Początkujący',
      2: 'Podstawowy',
      3: 'Średniozaawansowany',
      4: 'Zaawansowany',
      5: 'Profesjonalny'
    };
    return levels[level] || 'Nieznany';
  };

  const getSkillLevelColor = (level) => {
    const colors = {
      1: 'bg-blue-100 text-blue-800',
      2: 'bg-green-100 text-green-800',
      3: 'bg-yellow-100 text-yellow-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  const handleViewDetails = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowDetailsModal(true);
  };

  const handleDeleteClick = (announcement) => {
    setAnnouncementToDelete(announcement);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setAnnouncements(prev => prev.filter(a => a.id !== announcementToDelete.id));
    toast({
      title: "Ogłoszenie usunięte",
      description: "Twoje ogłoszenie zostało pomyślnie usunięte.",
    });
    setShowDeleteModal(false);
    setAnnouncementToDelete(null);
  };

  const handleEdit = (announcement) => {
    toast({
      title: "Edycja ogłoszenia",
      description: `Funkcja edycji ogłoszenia "${announcement.discipline} - ${announcement.city}" jest w wersji demonstracyjnej.`,
    });
  };

  const getClubLink = (clubId) => {
    const club = tennisClubs.find(c => c.id === clubId);
    return club ? `/klub/${club.id}` : '#';
  };

  // Details Modal
  const DetailsModal = () => {
    if (!selectedAnnouncement) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] p-6 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <img
                  src={selectedAnnouncement.photo}
                  alt={selectedAnnouncement.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedAnnouncement.name}</h2>
                  <p className="text-gray-300 flex items-center gap-2">
                    <MapPin size={16} />
                    {selectedAnnouncement.city}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#A4C639] text-white px-4 py-2 rounded-full font-semibold">
                {selectedAnnouncement.discipline}
              </span>
              <span className={`px-4 py-2 rounded-full font-semibold ${getSkillLevelColor(selectedAnnouncement.skillLevel)}`}>
                <Award className="inline mr-1" size={16} />
                {getSkillLevelLabel(selectedAnnouncement.skillLevel)}
              </span>
            </div>

            {/* Playing Venue */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <Building2 size={16} />
                Miejsce gry
              </h4>
              <Link
                to={getClubLink(selectedAnnouncement.clubId)}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                {selectedAnnouncement.playingVenue}
              </Link>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Opis ogłoszenia</h4>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
                {selectedAnnouncement.description}
              </p>
            </div>

            {/* Preferred Times */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <Clock size={16} />
                Preferowane terminy gry
              </h4>
              <p className="text-gray-700 font-medium">
                {selectedAnnouncement.preferredTimes}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#A4C639]/10 p-4 rounded-xl border-2 border-[#A4C639]/30">
              <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                <Phone size={16} />
                Kontakt
              </h4>
              <p className="text-xl font-bold text-[#2C3E50]">
                {selectedAnnouncement.phone}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t">
              <Button
                onClick={() => {
                  setShowDetailsModal(false);
                  handleEdit(selectedAnnouncement);
                }}
                className="flex-1 bg-blue-500 hover:bg-blue-600"
              >
                <Edit className="mr-2" size={18} />
                Edytuj
              </Button>
              <Button
                onClick={() => setShowDetailsModal(false)}
                variant="outline"
                className="flex-1"
              >
                Zamknij
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Delete Confirmation Modal
  const DeleteModal = () => {
    if (!announcementToDelete) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Trash2 className="text-red-600" size={32} />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-900 mb-2">
              Usunąć ogłoszenie?
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Czy na pewno chcesz usunąć ogłoszenie "{announcementToDelete.discipline} - {announcementToDelete.city}"?
              Ta operacja jest nieodwracalna.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowDeleteModal(false);
                  setAnnouncementToDelete(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Anuluj
              </Button>
              <Button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-500 hover:bg-red-600"
              >
                Usuń
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#A4C639] p-3 rounded-full mr-4">
                <Users className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold text-white">Moje ogłoszenia</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">
              Zarządzaj swoimi ogłoszeniami sparingpartnerów
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Add new button */}
          <div className="flex justify-end mb-8">
            <Link to="/dodaj-ogloszenie">
              <Button className="bg-[#A4C639] hover:bg-[#8FB82E] text-white font-semibold px-6 py-3">
                <PlusCircle className="mr-2" size={20} />
                Dodaj nowe ogłoszenie
              </Button>
            </Link>
          </div>

          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2C3E50] border-b-4 border-[#A4C639] pb-2 inline-block">
              Sparingpartnerzy
            </h2>
          </div>

          {/* Announcements Grid */}
          {announcements.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <Users className="mx-auto text-gray-300 mb-4" size={64} />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Brak ogłoszeń
                </h3>
                <p className="text-gray-500 mb-6">
                  Nie masz jeszcze żadnych ogłoszeń sparingpartnerów.
                </p>
                <Link to="/dodaj-ogloszenie">
                  <Button className="bg-[#A4C639] hover:bg-[#8FB82E]">
                    <PlusCircle className="mr-2" size={18} />
                    Dodaj pierwsze ogłoszenie
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  {/* Card Header with gradient */}
                  <div className="bg-gradient-to-r from-[#A4C639] to-[#8FB82E] p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={announcement.photo}
                        alt={announcement.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {announcement.name}
                        </h3>
                        <p className="text-white/90 flex items-center gap-1 text-sm">
                          <MapPin size={14} />
                          {announcement.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-5">
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm w-24">Dyscyplina:</span>
                        <span className="bg-[#2C3E50] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {announcement.discipline}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm w-24">Miejsce gry:</span>
                        <Link
                          to={getClubLink(announcement.clubId)}
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm"
                        >
                          {announcement.playingVenue}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm w-24">Poziom:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillLevelColor(announcement.skillLevel)}`}>
                          {getSkillLevelLabel(announcement.skillLevel)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={() => handleEdit(announcement)}
                        className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-semibold"
                      >
                        <Edit className="mr-2" size={16} />
                        edytuj
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(announcement)}
                        variant="outline"
                        className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 font-semibold"
                      >
                        <Trash2 className="mr-2" size={16} />
                        usuń
                      </Button>
                      <Button
                        onClick={() => handleViewDetails(announcement)}
                        className="w-full bg-[#2C3E50] hover:bg-[#34495e] text-white font-semibold"
                      >
                        <Eye className="mr-2" size={16} />
                        zobacz więcej
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info Card */}
          <Card className="mt-12 border-l-4 border-[#A4C639] bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">💡 Wskazówka</h3>
              <p className="text-gray-700 leading-relaxed">
                Regularna aktualizacja ogłoszeń zwiększa szanse na znalezienie idealnego partnera do gry.
                Pamiętaj o aktualnych terminach dostępności i dokładnym opisie swoich oczekiwań.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modals */}
      {showDetailsModal && <DetailsModal />}
      {showDeleteModal && <DeleteModal />}

      <Footer />
    </div>
  );
};

export default MyAnnouncementsPage;
