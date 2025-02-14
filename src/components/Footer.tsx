import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo + Nom de l'entreprise centré */}
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/Logo_K_bg.png" 
            alt="Logo K" 
            className="h-16 w-auto"
          />
          <span className="mt-2 text-2xl font-bold">Koncrete Ingénierie</span>
        </div>

        {/* Informations de contact */}
        <div className="mt-4 text-gray-300">
          <p>73, rue de Vaugirard, 75006 Paris</p>
          <p>+33 6 10 96 31 69</p>
          <p>contact@koncrete-ing.fr</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400">
          <p>Copyright &copy; 2025 Bureau d'Études Techniques. Tous droits réservé.</p>
          <Link to="/mentions-legales" className="text-gray-300 text-sm hover:text-white underline">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}