import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a252f] text-white">
      {/* Mobile App Section */}
      <div className="bg-[#2C3E50] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Aplikacja Mobilna</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="#"
                className="bg-[#3b5998] hover:bg-[#2d4373] p-4 rounded-lg transition-colors"
              >
                <Facebook size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#A4C639]">Menu:</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-[#A4C639] transition-colors">
                    - Strona główna
                  </Link>
                </li>
                <li>
                  <Link to="/sparingpartnerzy" className="hover:text-[#A4C639] transition-colors">
                    - Sparingpartnerzy
                  </Link>
                </li>
                <li>
                  <Link to="/kluby" className="hover:text-[#A4C639] transition-colors">
                    - Kluby
                  </Link>
                </li>
                <li>
                  <Link to="/turnieje" className="hover:text-[#A4C639] transition-colors">
                    - Turnieje
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold mb-4 invisible">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="hover:text-[#A4C639] transition-colors">
                    - Zaloguj się
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-[#A4C639] transition-colors">
                    - Załóż konto
                  </Link>
                </li>
                <li>
                  <Link to="/regulamin" className="hover:text-[#A4C639] transition-colors">
                    - Regulamin
                  </Link>
                </li>
                <li>
                  <Link to="/polityka-cookies" className="hover:text-[#A4C639] transition-colors">
                    - Polityka cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold mb-4 invisible">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/o-nas" className="hover:text-[#A4C639] transition-colors">
                    - O nas
                  </Link>
                </li>
                <li>
                  <Link to="/wspolpraca" className="hover:text-[#A4C639] transition-colors">
                    - Współpraca
                  </Link>
                </li>
                <li>
                  <Link to="/aplikacja-mobilna" className="hover:text-[#A4C639] transition-colors">
                    - Aplikacja mobilna
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-[#A4C639] transition-colors">
                    - Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0f1419] py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="10" r="3" fill="#A4C639" />
                <ellipse cx="25" cy="35" rx="15" ry="10" fill="#A4C639" opacity="0.3" />
                <path d="M20 15 L25 35 L30 15" stroke="#A4C639" strokeWidth="2" fill="none" />
                <path d="M15 20 L35 20" stroke="#A4C639" strokeWidth="1.5" />
                <path d="M17 25 L33 25" stroke="#A4C639" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright © Rezerwujkort.pl Wszelkie prawa zastrzeżone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
