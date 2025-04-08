import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationMenuProps {
  isScrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isScrolled, menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate('/'); // Redireciona para a página inicial
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Aguarda a navegação para garantir que a página inicial seja carregada
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Imagem clicável que redireciona para o home */}
        <a href="/" className="flex items-center">
          <img
            src="/images/image.png"
            alt="Comunidade Católica Todo Teu"
            className="w-12 h-12 rounded-full"
          />
        </a>
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleNavigation('about')}
            className="hover:text-blue-500 transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavigation('mission')}
            className="hover:text-blue-500 transition-colors"
          >
            Missão
          </button>
          <button
            onClick={() => handleNavigation('help')}
            className="hover:text-blue-500 transition-colors"
          >
            Ajude
          </button>
          <button
            onClick={() => handleNavigation('contact')}
            className="hover:text-blue-500 transition-colors"
          >
            Contato
          </button>
        </div>
        <button
          className={`md:hidden ${
            isScrolled ? 'text-black' : 'text-white'
          } transition-colors`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white text-black p-4 rounded shadow-md">
          <button onClick={() => handleNavigation('about')} className="hover:text-blue-500">
            Sobre
          </button>
          <button onClick={() => handleNavigation('mission')} className="hover:text-blue-500">
            Missão
          </button>
          <button onClick={() => handleNavigation('help')} className="hover:text-blue-500">
            Ajude
          </button>
          <button onClick={() => handleNavigation('contact')} className="hover:text-blue-500">
            Contato
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;