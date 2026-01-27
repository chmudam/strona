import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CalendarCheck, History, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { userReservations, tennisClubs } from '../mockData';

const MyReservationsPage = () => {
  const ITEMS_PER_PAGE = 10;
  
  const [currentPageCurrent, setCurrentPageCurrent] = useState(1);
  const [currentPageHistory, setCurrentPageHistory] = useState(1);

  // Split reservations into current (future/today) and historical (past)
  const { currentReservations, historicalReservations } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const current = [];
    const historical = [];

    userReservations.forEach(reservation => {
      const reservationDate = new Date(reservation.date);
      reservationDate.setHours(0, 0, 0, 0);
      
      if (reservationDate >= now) {
        current.push(reservation);
      } else {
        historical.push(reservation);
      }
    });

    // Sort current by date ascending (nearest first)
    current.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Sort historical by date descending (most recent first)
    historical.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { currentReservations: current, historicalReservations: historical };
  }, []);

  // Pagination for current reservations
  const totalPagesCurrent = Math.ceil(currentReservations.length / ITEMS_PER_PAGE);
  const paginatedCurrentReservations = currentReservations.slice(
    (currentPageCurrent - 1) * ITEMS_PER_PAGE,
    currentPageCurrent * ITEMS_PER_PAGE
  );

  // Pagination for historical reservations
  const totalPagesHistory = Math.ceil(historicalReservations.length / ITEMS_PER_PAGE);
  const paginatedHistoricalReservations = historicalReservations.slice(
    (currentPageHistory - 1) * ITEMS_PER_PAGE,
    currentPageHistory * ITEMS_PER_PAGE
  );

  // Get club link by ID
  const getClubLink = (clubId) => {
    const club = tennisClubs.find(c => c.id === clubId);
    return club ? `/klub/${club.id}` : '#';
  };

  // Format status text and color
  const getStatusDisplay = (status) => {
    switch (status) {
      case 'paid':
        return {
          text: 'Rezerwacja opłacona!',
          color: 'text-green-600 font-semibold'
        };
      case 'confirmed_pay_at_club':
        return {
          text: 'Rezerwacja potwierdzona. Płatność w klubie.',
          color: 'text-gray-700'
        };
      default:
        return {
          text: status,
          color: 'text-gray-700'
        };
    }
  };

  // Pagination component
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const showPages = 5;
      
      let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
      let endPage = Math.min(totalPages, startPage + showPages - 1);
      
      if (endPage - startPage + 1 < showPages) {
        startPage = Math.max(1, endPage - showPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    };

    return (
      <div className="flex items-center justify-center gap-1 mt-6">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-2 rounded bg-[#A4C639] hover:bg-[#8FB82E] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Pierwsza strona"
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded bg-[#A4C639] hover:bg-[#8FB82E] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Poprzednia strona"
        >
          <ChevronLeft size={16} />
        </button>
        
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded transition-colors ${
              currentPage === page
                ? 'bg-[#2C3E50] text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
        
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="px-2 text-gray-500">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded bg-[#A4C639] hover:bg-[#8FB82E] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Następna strona"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 rounded bg-[#A4C639] hover:bg-[#8FB82E] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Ostatnia strona"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    );
  };

  // Reservation table component
  const ReservationTable = ({ reservations, startNumber = 1 }) => {
    if (reservations.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Brak rezerwacji do wyświetlenia.
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-200">
              <th className="text-left p-4 font-semibold text-gray-700">Nr</th>
              <th className="text-left p-4 font-semibold text-gray-700">Klub</th>
              <th className="text-left p-4 font-semibold text-gray-700">Data rezerwacji</th>
              <th className="text-left p-4 font-semibold text-gray-700">Cena</th>
              <th className="text-left p-4 font-semibold text-gray-700">Status</th>
              <th className="text-left p-4 font-semibold text-gray-700">Utworzona</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => {
              const statusDisplay = getStatusDisplay(reservation.status);
              return (
                <tr 
                  key={reservation.id} 
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-800">{startNumber + index}</td>
                  <td className="p-4">
                    <Link 
                      to={getClubLink(reservation.clubId)}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {reservation.clubName}
                    </Link>
                  </td>
                  <td className="p-4">
                    <div className="text-gray-800">
                      {reservation.date} ({reservation.dayOfWeek})
                    </div>
                    <div className="text-gray-600">
                      {reservation.timeStart}-{reservation.timeEnd}
                    </div>
                    <div className="text-gray-600">
                      {reservation.court}
                    </div>
                  </td>
                  <td className="p-4 text-gray-800">
                    {reservation.price} {reservation.currency}
                  </td>
                  <td className="p-4">
                    <span className={statusDisplay.color}>
                      {statusDisplay.text}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    {reservation.createdAt}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-[#2C3E50] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <CalendarCheck className="text-[#A4C639] mr-3" size={40} />
              <h1 className="text-4xl font-bold text-white">Moje rezerwacje</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">
              Przeglądaj swoje aktualne i historyczne rezerwacje kortów
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Current Reservations Section */}
          <Card className="mb-12">
            <CardHeader className="bg-[#A4C639] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-3">
                <CalendarCheck size={24} />
                Aktualne rezerwacje
                <span className="ml-2 bg-white text-[#A4C639] px-3 py-1 rounded-full text-sm font-bold">
                  {currentReservations.length}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ReservationTable 
                reservations={paginatedCurrentReservations}
                startNumber={(currentPageCurrent - 1) * ITEMS_PER_PAGE + 1}
              />
              <div className="px-4 pb-4">
                <Pagination 
                  currentPage={currentPageCurrent}
                  totalPages={totalPagesCurrent}
                  onPageChange={setCurrentPageCurrent}
                />
              </div>
            </CardContent>
          </Card>

          {/* Historical Reservations Section */}
          <Card>
            <CardHeader className="bg-[#2C3E50] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-3">
                <History size={24} />
                Historyczne rezerwacje
                <span className="ml-2 bg-white text-[#2C3E50] px-3 py-1 rounded-full text-sm font-bold">
                  {historicalReservations.length}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ReservationTable 
                reservations={paginatedHistoricalReservations}
                startNumber={(currentPageHistory - 1) * ITEMS_PER_PAGE + 1}
              />
              <div className="px-4 pb-4">
                <Pagination 
                  currentPage={currentPageHistory}
                  totalPages={totalPagesHistory}
                  onPageChange={setCurrentPageHistory}
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 border-l-4 border-[#A4C639] bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">ℹ️ Informacja</h3>
              <p className="text-gray-700 leading-relaxed">
                To jest wersja <strong>demonstracyjna</strong> z przykładowymi danymi rezerwacji.
                W wersji produkcyjnej rezerwacje będą pobierane z Twojego konta użytkownika.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReservationsPage;
