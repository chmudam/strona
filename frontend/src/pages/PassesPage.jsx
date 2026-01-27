import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { CreditCard, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { userPasses, tennisClubs } from '../mockData';
import { useToast } from '../hooks/use-toast';

const PassesPage = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  // Pagination
  const totalPages = Math.ceil(userPasses.length / ITEMS_PER_PAGE);
  const paginatedPasses = userPasses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Get club link by ID
  const getClubLink = (clubId) => {
    const club = tennisClubs.find(c => c.id === clubId);
    return club ? `/klub/${club.id}` : '#';
  };

  // Handle top-up click
  const handleTopUp = (pass) => {
    toast({
      title: "Doładowanie karnetu",
      description: `Funkcja doładowania karnetu w klubie "${pass.clubName}" jest w wersji demonstracyjnej.`,
    });
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

  // Passes table component
  const PassesTable = ({ passes }) => {
    if (passes.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Brak karnetów do wyświetlenia.
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-200">
              <th className="text-left p-4 font-semibold text-gray-700 w-1/4">Klub</th>
              <th className="text-left p-4 font-semibold text-gray-700 w-1/2">Podstawowe informacje</th>
              <th className="text-center p-4 font-semibold text-gray-700 w-1/4"></th>
            </tr>
          </thead>
          <tbody>
            {passes.map((pass) => (
              <tr 
                key={pass.id} 
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 align-top">
                  <Link 
                    to={getClubLink(pass.clubId)}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                  >
                    {pass.clubName}
                  </Link>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="text-gray-800">
                      <span className="text-gray-600">Wartość karnetu:</span>{' '}
                      <span className="font-medium">{pass.passValue} {pass.currency}</span>
                    </div>
                    <div className="text-gray-800">
                      <span className="text-gray-600">Wolne środki:</span>{' '}
                      <span className="font-medium">{pass.availableFunds} {pass.currency}</span>
                    </div>
                    <div className="text-gray-800">
                      <span className="text-gray-600">Rezerwacje zaplanowane:</span>{' '}
                      <span className="font-medium">{pass.scheduledReservations}</span>
                    </div>
                    <div className="text-gray-800">
                      <span className="text-gray-600">Rezerwacje historyczne:</span>{' '}
                      <span className="font-medium">{pass.historicalReservations}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center align-middle">
                  <button
                    onClick={() => handleTopUp(pass)}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-6 rounded transition-colors shadow-sm"
                  >
                    Doładuj karnet
                  </button>
                </td>
              </tr>
            ))}
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
              <CreditCard className="text-[#A4C639] mr-3" size={40} />
              <h1 className="text-4xl font-bold text-white">Karnety</h1>
            </div>
            <p className="text-gray-300 text-lg text-center">
              Przeglądaj swoje karnety i doładowuj je w dowolnym momencie
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Card>
            <CardHeader className="bg-[#A4C639] rounded-t-lg">
              <CardTitle className="text-white flex items-center gap-3">
                <CreditCard size={24} />
                Twoje karnety
                <span className="ml-2 bg-white text-[#A4C639] px-3 py-1 rounded-full text-sm font-bold">
                  {userPasses.length}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <PassesTable passes={paginatedPasses} />
              <div className="px-4 pb-4">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 border-l-4 border-[#A4C639] bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">ℹ️ Informacja</h3>
              <p className="text-gray-700 leading-relaxed">
                To jest wersja <strong>demonstracyjna</strong> z przykładowymi danymi karnetów.
                W wersji produkcyjnej karnety będą pobierane z Twojego konta użytkownika, 
                a funkcja doładowania będzie połączona z systemem płatności.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PassesPage;
