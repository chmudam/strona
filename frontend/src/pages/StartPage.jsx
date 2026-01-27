import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { userProfile, userApplications, userFavoriteClubs, userReservations, tennisClubs } from '../mockData';

const StartPage = () => {
  // Get upcoming reservations (future dates only)
  const upcomingReservations = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    return userReservations
      .filter(reservation => {
        const reservationDate = new Date(reservation.date);
        reservationDate.setHours(0, 0, 0, 0);
        return reservationDate >= now;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5); // Show only first 5
  }, []);

  // Get club link by ID
  const getClubLink = (clubId) => {
    const club = tennisClubs.find(c => c.id === clubId);
    return club ? `/klub/${club.id}` : '#';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-20">
        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Twoje dane Section */}
          <section className="mb-8">
            <h2 className="text-xl text-gray-500 border-b border-gray-300 pb-2 mb-6">
              Twoje dane
            </h2>
            <div className="ml-8 space-y-3">
              <div className="flex">
                <span className="text-gray-700 w-32 font-medium">Imie:</span>
                <span className="text-gray-900">{userProfile.firstName}</span>
              </div>
              <div className="flex">
                <span className="text-gray-700 w-32 font-medium">Nazwisko:</span>
                <span className="text-gray-900">{userProfile.lastName}</span>
              </div>
              <div className="flex">
                <span className="text-gray-700 w-32 font-medium">Telefon:</span>
                <span className="text-gray-900">
                  {userProfile.phone}
                  {userProfile.phoneVerified && (
                    <span className="ml-4 text-green-600">(Zweryfikowany!)</span>
                  )}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-700 w-32 font-medium">Email:</span>
                <span className="text-gray-900">{userProfile.email}</span>
              </div>
            </div>
          </section>

          {/* Rezerwacje Section */}
          <section className="mb-8">
            <h2 className="text-xl text-gray-500 border-b border-gray-300 pb-2 mb-6">
              Rezerwacje
            </h2>
            <div className="ml-8">
              {upcomingReservations.length === 0 ? (
                <p className="text-gray-700">- Brak rezerwacji</p>
              ) : (
                <div className="space-y-3">
                  {upcomingReservations.map((reservation) => (
                    <div key={reservation.id} className="text-gray-700">
                      <Link 
                        to={getClubLink(reservation.clubId)}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {reservation.clubName}
                      </Link>
                      <span className="ml-2">
                        - {reservation.date} ({reservation.dayOfWeek}) {reservation.timeStart}-{reservation.timeEnd}, {reservation.court}
                      </span>
                    </div>
                  ))}
                  {userReservations.length > 5 && (
                    <Link 
                      to="/profil/rezerwacje" 
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      Zobacz wszystkie rezerwacje →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Aplikacje Section */}
          <section className="mb-8">
            <h2 className="text-xl text-gray-500 border-b border-gray-300 pb-2 mb-6">
              Aplikacje
            </h2>
            <div className="ml-8">
              {userApplications.length === 0 ? (
                <p className="text-gray-700">- Brak</p>
              ) : (
                <div className="space-y-2">
                  {userApplications.map((app) => (
                    <p key={app.id} className="text-gray-700">
                      {app.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Ulubione Ośrodki Tenisowe Section */}
          <section className="mb-8">
            <h2 className="text-xl text-gray-500 border-b border-gray-300 pb-2 mb-6">
              Ulubione Ośrodki Tenisowe
            </h2>
            <div className="ml-8">
              {userFavoriteClubs.length === 0 ? (
                <p className="text-gray-700">- Brak</p>
              ) : (
                <div className="space-y-2">
                  {userFavoriteClubs.map((club) => (
                    <p key={club.id} className="text-gray-700">
                      <Link 
                        to={`/klub/${club.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {club.name}
                      </Link>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartPage;
