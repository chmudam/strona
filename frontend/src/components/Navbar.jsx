import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [profileSubOpen, setProfileSubOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Demo logout
    navigate('/');
  };

  return (
    <nav className="bg-[#2C3E50] shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12">
              <img 
                src="/assets/images/logo.png" 
                alt="Rezerwujkort Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight leading-none uppercase">
                Rezerwujkort
              </h1>
              <span className="text-[#97c93c] text-xs md:text-sm font-medium uppercase tracking-wider">
                system rezerwacji online
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home Icon Button - Sprite */}
            <Link
              to="/"
              className="home-icon"
              aria-label="Strona główna"
            />
            <Link
              to="/sparingpartnerzy"
              className="px-4 py-2 text-white hover:text-[#A4C639] transition-colors duration-200 uppercase text-sm font-medium"
            >
              Sparingpartnerzy
            </Link>
            <Link
              to="/kluby"
              className="px-4 py-2 text-white hover:text-[#A4C639] transition-colors duration-200 uppercase text-sm font-medium"
            >
              Kluby
            </Link>
            <Link
              to="/turnieje"
              className="px-4 py-2 text-white hover:text-[#A4C639] transition-colors duration-200 uppercase text-sm font-medium"
            >
              Turnieje
            </Link>
            <Link
              to="/o-nas"
              className="px-4 py-2 text-white hover:text-[#A4C639] transition-colors duration-200 uppercase text-sm font-medium"
            >
              O nas
            </Link>
            
            {/* Profil Dropdown */}
            <div className="relative ml-4 dropdown-container">
              <button className="flex items-center gap-1 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-semibold py-2 px-4 rounded transition-colors uppercase text-sm">
                Profil
                <ChevronDown size={16} />
              </button>
              
              {/* Dropdown Menu */}
              <div className="dropdown-menu absolute right-0 top-full mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible transition-all duration-200 z-50">
                {/* Profil z podmenu - klikalne */}
                <div className="profile-submenu-container">
                  <button 
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-t-lg font-medium"
                    onClick={() => setProfileSubOpen(!profileSubOpen)}
                  >
                    <span>Profil</span>
                    <ChevronDown size={14} className={`transform transition-transform ${profileSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Podmenu Profil - rozwija się w dół */}
                  <div className={`overflow-hidden transition-all duration-300 ${profileSubOpen ? 'max-h-48' : 'max-h-0'}`}>
                    <Link
                      to="/profil/dane"
                      className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#A4C639] text-sm"
                    >
                      Twoje dane
                    </Link>
                    <Link
                      to="/profil/edytuj"
                      className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#A4C639] text-sm"
                    >
                      Edytuj profil
                    </Link>
                    <Link
                      to="/profil/zmiana-hasla"
                      className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#A4C639] text-sm"
                    >
                      Zmiana hasła
                    </Link>
                    <Link
                      to="/profil/usun-konto"
                      className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#A4C639] text-sm"
                    >
                      Usuń konto
                    </Link>
                  </div>
                </div>
                
                <Link
                  to="/profil/rezerwacje"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#A4C639] font-medium"
                >
                  Rezerwacje
                </Link>
                <Link
                  to="/profil/karnety"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#A4C639] font-medium"
                >
                  Karnety
                </Link>
                <Link
                  to="/moje-ogloszenia"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#A4C639] font-medium"
                >
                  Sparingpartnerzy
                </Link>
                
                {/* Wyloguj - czerwony przycisk */}
                <div className="border-t border-gray-200 mt-2 pt-2 px-3 pb-3">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    <LogOut size={16} />
                    Wyloguj
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#34495E] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#34495E] border-t border-[#4A5F7F]">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors"
            >
              <div className="home-icon-small" />
              Strona główna
            </Link>
            <Link
              to="/sparingpartnerzy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors uppercase text-sm"
            >
              Sparingpartnerzy
            </Link>
            <Link
              to="/kluby"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors uppercase text-sm"
            >
              Kluby
            </Link>
            <Link
              to="/turnieje"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors uppercase text-sm"
            >
              Turnieje
            </Link>
            <Link
              to="/o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors uppercase text-sm"
            >
              O nas
            </Link>
            
            {/* Mobile Profil Menu */}
            <div className="border-t border-[#4A5F7F] pt-2 mt-2">
              <button
                onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors uppercase text-sm font-semibold"
              >
                Profil
                <ChevronDown size={16} className={`transform transition-transform ${mobileProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileProfileOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  <Link
                    to="/profil/dane"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Twoje dane
                  </Link>
                  <Link
                    to="/profil/edytuj"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Edytuj profil
                  </Link>
                  <Link
                    to="/profil/zmiana-hasla"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Zmiana hasła
                  </Link>
                  <Link
                    to="/profil/usun-konto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Usuń konto
                  </Link>
                  <Link
                    to="/profil/rezerwacje"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Rezerwacje
                  </Link>
                  <Link
                    to="/profil/karnety"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Karnety
                  </Link>
                  <Link
                    to="/moje-ogloszenia"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:bg-[#2C3E50] hover:text-white rounded transition-colors text-sm"
                  >
                    Sparingpartnerzy
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500 hover:text-white rounded transition-colors text-sm font-semibold mt-2"
                  >
                    <LogOut size={16} />
                    Wyloguj
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Styles for sprite icons and dropdown */}
      <style>{`
        .home-icon {
          width: 50px;
          height: 50px;
          background: url('/assets/images/home.png') no-repeat 0 0;
          background-size: 50px auto;
          cursor: pointer;
          display: block;
        }
        .home-icon:hover {
          background-position: 0 -50px;
        }
        
        .home-icon-small {
          width: 24px;
          height: 24px;
          background: url('/assets/images/home.png') no-repeat 0 0;
          background-size: 24px auto;
        }
        
        /* Dropdown styles */
        .dropdown-container:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        
        .dropdown-menu {
          padding-top: 8px;
        }
        
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: transparent;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
