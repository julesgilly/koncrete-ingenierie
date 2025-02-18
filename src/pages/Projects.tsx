import { projects } from '../data/projets';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative w-fit mx-auto">
              Projets
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto pt-4">
              Découvrez nos réalisations et les clients qui nous font confiance.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projets/${project.id}`}
              className="bg-white overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
            >
            <div className="bg-white overflow-hidden shadow-lg group">
              <div className="relative text-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}