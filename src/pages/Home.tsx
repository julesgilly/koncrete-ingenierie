import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CheckCircle} from 'lucide-react';
import { projects } from '../data/projets';

const heroImages = [
  {
    url:"/homepage_1.webp",
    alt:"Page de garde 1",
  },
  {
    url:"/homepage_2.webp",
    alt:"Page de garde 2"
  },
  {
    url:"/homepage_3.webp",
    alt:"Page de garde 3"
  }
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const randomProjects = useMemo(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const scrollToEngagement = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('engagement');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[100vh]">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image.url}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ objectPosition: 'center 25%' }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-7xl">
              Nous plaçons la collaboration et l’ingéniosité au cœur de nos méthodes et de notre savoir-faire pour offrir une expertise de qualité. 
            </p>
            <a
              href="#engagement"
              onClick={scrollToEngagement}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Découvrir
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Engagement Section */}
      <section id="engagement" className="bg-white/100 flex flex-col items-center py-24 px-4 sm:px-6 lg:px-8 pt16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-m font-bold text-gray-900 text-justify mb-4">Koncrete Ingénierie est un bureau d’études spécialisé dans le dimensionnement des structures pour les ouvrages neufs de bâtiment et la réhabilitation des constructions existantes. </h2>
                <h2 className="text-m text-gray-900 text-justify mb-4">Notre bureau d’études, spécialisé dans les structures en bois, métal, maçonnerie et béton armé, accompagne les architectes et maîtres d’ouvrage dans une approche sobre, cohérente et innovante des projets. Nous intervenons dès la phase de conception, en réalisant diagnostics structurels, études de conception, visas techniques et assistance à la maîtrise d’ouvrage, puis tout au long de l’exécution, en apportant notre expertise aux entreprises de construction à travers l’élaboration des plans d’exécution, le suivi de chantier et l’accompagnement technique. </h2>
                <h2 className="text-m text-gray-900 text-justify mb-4">Notre entreprise repose sur des valeurs fortes — prise en charge et responsabilité personnelles et mutuelles, démocratie, égalité, équité et solidarité — qui nous inspirent au quotidien. C’est pourquoi nous avons choisi d’incarner notre vision sous la forme d’une SCOP (Société Coopérative de Production), privilégiant la participation et le partage pour construire ensemble un avenir solidaire. </h2>
                <h2 className="text-m font-bold text-gray-900 text-justify mb-4">Nos services : </h2>
                {/* CheckCircle avec missions */}
                <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Diagnostic et faisabilité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Conception</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Exécution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Suivi de travaux</span>
                  </div>
                </div>

                {/* Bouton vers la page Engagement */}
                <div className="text-center">
                  <Link
                  to="/engagement"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                  >
                  En savoir plus
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/homepage_description.webp"
                  alt="Équipe d'ingénieurs au travail"
                  className="shadow-xl w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
              </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Nos Projets</h2>
            <Link 
              to="/projets" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Voir tous nos projets
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomProjects.map((project, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageMiniature}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-2xl font-semibold mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}