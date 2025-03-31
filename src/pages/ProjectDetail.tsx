import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { projects } from '../data/projets';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Index de l'image courante
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // État pour la modal de zoom
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Projet non trouvé</h2>
        </div>
      </div>
    );
  }

  // Navigation d'images (hors zoom)
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
    );
  };

  // Ouvrir/fermer la modal
  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate('/projets')}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux projets
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Infos sur le projet */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            <div className="bg-gray-50 shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Client</h3>
                  <p className="text-gray-900">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                  <p className="text-gray-900">{project.budget}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phases</h3>
                  <p className="text-gray-900">{project.phase}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Localisation</h3>
                  <p className="text-gray-900">{project.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Début des travaux
                  </h3>
                  <p className="text-gray-900">{project.startDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Fin des travaux
                  </h3>
                  <p className="text-gray-900">{project.endDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Surface</h3>
                  <p className="text-gray-900">{project.surface}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Description détaillée
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-600 text-justify leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          </div>

          {/* Affichage de l'image + boutons navigation/zoom */}
          <div className="relative mb-8">
            <div className="relative h-full shadow-lg overflow-hidden group bg-gray-50">
              {/* Image courante */}
              <div className="absolute inset-0 flex items-center justify-center">
                {project.image.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Boutons de navigation (si nécessaire) */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Bouton Zoom (ouvre la modal) */}
              <button
                onClick={openZoom}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Zoom"
              >
                <ZoomIn className="h-6 w-6" />
              </button>

              {/* Affichage compteur d'images */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.image.length}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
          </div>
        </div>
      </div>

      {/* Modal Zoom */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center">
          {/* Image courante en grand */}
          <div className="relative w-full max-w-5xl max-h-full flex items-center justify-center p-4">
            <img
              src={project.image[currentImageIndex].url}
              alt={project.image[currentImageIndex].alt}
              className="object-contain max-h-[80vh] max-w-[90vw]"
            />
            {/* Bouton Fermer */}
            <button
              onClick={closeZoom}
              className="absolute top-0 right-0 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity group-hover:opacity-100"
            >
              <ZoomOut className="h-6 w-6" />
            </button>
          </div>

          {/* Boutons de navigation */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={previousImage}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity group-hover:opacity-100 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={nextImage}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity group-hover:opacity-100 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
