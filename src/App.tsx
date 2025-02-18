import { Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Engagement" element={<Engagement />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/equipe" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;