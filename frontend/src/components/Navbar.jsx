import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2C3E50] shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="10" r="3" fill="#A4C639" />
                <ellipse cx="25" cy="35" rx="15" ry="10" fill="#A4C639" opacity="0.3" />
                <path d="M20 15 L25 35 L30 15" stroke="#A4C639" strokeWidth="2" fill="none" />
                <path d="M15 20 L35 20" stroke="#A4C639" strokeWidth="1.5" />
                <path d="M17 25 L33 25" stroke="#A4C639" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold tracking-wide">REZERWUJKORT</span>
              <span className="text-[#A4C639] text-xs tracking-wider">system rezerwacji online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:text-[#A4C639] transition-colors duration-200 flex items-center space-x-2"
            >
              <Home size={18} />
            </Link>
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
            <Button
              onClick={() => navigate('/login')}
              className="ml-4 bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold uppercase px-6 py-2 rounded shadow-lg transition-all duration-200"
            >
              Zaloguj się
            </Button>
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
              className="block px-4 py-2 text-white hover:bg-[#2C3E50] rounded transition-colors"
            >
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
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/login');
              }}
              className="w-full bg-[#A4C639] hover:bg-[#8FB82E] text-white font-bold uppercase mt-2"
            >
              Zaloguj się
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
