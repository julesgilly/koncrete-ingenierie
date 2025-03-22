import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projets';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Projet non trouvé</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/projets')}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux projets
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{project.title}</h1>
            
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
                  <h3 className="text-sm font-medium text-gray-500">Début des travaux</h3>
                  <p className="text-gray-900">{project.startDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fin des travaux</h3>
                  <p className="text-gray-900">{project.endDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Surface</h3>
                  <p className="text-gray-900">{project.surface}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description détaillée</h3>
              <p className="text-gray-600 text-justify leading-relaxed">{project.description}</p>
              <p className="text-gray-600 text-justify leading-relaxed">{project.detailedDescription}</p>
            </div>
          </div>

          <div className="relative mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[520px] object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}