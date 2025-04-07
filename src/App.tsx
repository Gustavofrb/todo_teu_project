import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MissionSection from './components/MissionSection';
import AboutSection from './components/AboutSection';
import HelpSection from './components/HelpSection'; // Importando o novo componente
import Footer from './components/Footer';
import Participar from './pages/Participar';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        {/* Rota principal */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header isScrolled={isScrolled} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
              <MissionSection />
              <AboutSection />
              <HelpSection /> {/* Adicionando a seção "Como Ajudar" */}
              <Footer />
              {showScrollTop && (
                <button
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                  aria-label="Voltar ao topo"
                >
                  ↑
                </button>
              )}
            </div>
          }
        />
        {/* Rota para a página de cadastro */}
        <Route path="/participar" element={<Participar />} />
      </Routes>
    </Router>
  );
}

export default App;
