import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
// Si tu préfères une icône, tu peux importer { Menu, X } depuis "lucide-react" ou "react-icons".

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToTop();
    }
  };

  // Gère l'ouverture/fermeture du menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/60 backdrop-blur-sd shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center focus:outline-none">
            <img
              src="/Logo_K.png"
              alt="Logo K"
              className="h-16 w-auto"
            />
            <span className="ml-2 text-2xl font-tahoma text-gray-900">koncrete ingénierie</span>
          </Link>

          {/* MENU DESKTOP (caché sur mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/engagement"
              className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Engagements
            </Link>
            <Link
              to="/projets"
              className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Projets
            </Link>
            <Link
              to="/equipe"
              className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Équipe
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </div>

          {/* BOUTON BURGER (visible seulement sur mobile) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen
              ? (
                // Icône X (croix) : tu peux remplacer par <X size={28} /> depuis "lucide-react" si tu veux
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )
              : (
                // Icône Menu (burger)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )
            }
          </button>
        </div>
      </div>

      {/* MENU MOBILE (visible si isOpen === true) */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sd shadow-sm">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/engagement"
                className="text-gray-700 block"
                onClick={() => setIsOpen(false)}
              >
                Engagements
              </Link>
            </li>
            <li>
              <Link
                to="/projets"
                className="text-gray-700 block"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to="/equipe"
                className="text-gray-700 block"
                onClick={() => setIsOpen(false)}
              >
                Équipe
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
