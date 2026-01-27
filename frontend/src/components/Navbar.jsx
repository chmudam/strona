import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeHovered, setHomeHovered] = useState(false);
  const [loginHovered, setLoginHovered] = useState(false);
  const navigate = useNavigate();

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
            {/* Home Icon Button */}
            <Link
              to="/"
              className="px-3 py-2 transition-all duration-200"
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
            >
              <img 
                src="/assets/images/home.png" 
                alt="Home"
                className={`w-10 h-10 object-contain transition-all duration-200 ${
                  homeHovered ? 'brightness-125 scale-110' : 'brightness-100'
                }`}
                style={{
                  filter: homeHovered ? 'brightness(1.3) saturate(1.2)' : 'brightness(1)'
                }}
              />
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
            {/* Login Button with Image */}
            <button
              onClick={() => navigate('/login')}
              className="ml-4 transition-all duration-200"
              onMouseEnter={() => setLoginHovered(true)}
              onMouseLeave={() => setLoginHovered(false)}
            >
              <img 
                src="/assets/images/button-login.png" 
                alt="Zaloguj się"
                className={`h-10 object-contain transition-all duration-200 ${
                  loginHovered ? 'brightness-110 scale-105' : 'brightness-100'
                }`}
                style={{
                  filter: loginHovered ? 'brightness(1.2) saturate(1.1)' : 'brightness(1)'
                }}
              />
            </button>
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
              <img 
                src="/assets/images/home.png" 
                alt="Home"
                className="w-6 h-6 object-contain"
              />
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
