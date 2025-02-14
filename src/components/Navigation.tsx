import { Link, useLocation } from 'react-router-dom';


export function Navigation() {
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
  return (
    <nav className="fixed w-full bg-white/60 backdrop-blur-sd shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center focus:outline-none">
            <img 
              src="/Logo_K.png" 
              alt="Logo K" 
              className="h-16 w-auto"
            />
            <span className="ml-2 text-2xl font-tahoma text-gray-900">koncrete ingénierie</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/engagement" className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Engagements</Link>
            <Link to="/projets" className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Projets</Link>
            <a href="/#team" className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Équipe</a>
            <Link to="/contact" className="text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}