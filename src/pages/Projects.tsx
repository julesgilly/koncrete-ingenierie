import { projects } from '../data/projets';

export function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-lg p-8 mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Nos Réalisations</h1>
          <p className="text-gray-100 text-lg">
            Découvrez l'ensemble de nos projets réalisés à travers la France. 
            Chaque projet témoigne de notre expertise en ingénierie structurelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg group">
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
          ))}
        </div>
      </div>
    </div>
  );
}