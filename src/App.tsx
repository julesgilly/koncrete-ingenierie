import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import  ScrollToTop from "./components/ScrollToTop";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import  Contact  from './pages/contact';
import  Engagement  from './pages/Engagement';
import { Legal }  from './pages/Legal';
import { ProjectDetail }  from './pages/ProjectDetail';
import { Team } from './pages/Team';
import { Assurance } from './pages/Assurance';

// Définition des titres et descriptions pour chaque route
const routeMetadata = {
  '/': {
    title: "Koncrete Ingénierie - Smart Engineering",
    description: "Nous plaçons la collaboration et l’ingéniosité au cœur de nos méthodes et de notre savoir-faire pour offrir une expertise de qualité."
  },
  '/projets': {
    title: "Projets - Koncrete Ingénierie",
    description: "Découvrez nos réalisations et les clients qui nous font confiance."
  },
  '/engagement': {
    title: "Engagements - Koncrete Ingénierie",
    description: "Notre philosophie, nos engagements et nos missions."
  },
  '/contact': {
    title: "Contact - Koncrete Ingénierie",
    description: "Notre fiche de contact."
  },
  '/equipe': {
    title: "Équipe - Koncrete Ingénierie",
    description: "Présentations de notre équipe d'experts passionnés."
  },
  '/mentions-legales': {
    title: "Mentions Légales - Koncrete Ingénierie",
    description: "Mentions légales et conditions d'utilisation du site du Bureau d'Études Techniques."
  },
  '/assurance': {
    title: "Assurance - Koncrete Ingénierie",
    description: "Attestation d'assurance professionnelle - Assurance de responsabilité civile et décennale"
  }
};

function App() {
  const location = useLocation();

  // Mise à jour du titre et de la description de la page
  React.useEffect(() => {
    const route = location.pathname;
    const metadata = routeMetadata[route as keyof typeof routeMetadata] || routeMetadata['/'];
    
    document.title = metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Engagement" element={<Engagement />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/assurance" element={<Assurance />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;