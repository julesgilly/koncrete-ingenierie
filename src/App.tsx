import { Routes, Route } from 'react-router-dom';
import  ScrollToTop from "./components/ScrollToTop";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import  Contact  from './pages/contact';
import  Engagement  from './pages/Engagement';
import { Legal }  from './pages/Legal';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Engagement" element={<Engagement />} />
        <Route path="/mentions-legales" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;