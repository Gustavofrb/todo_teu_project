interface NavigationMenuProps {
  isScrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isScrolled, menuOpen, setMenuOpen }) => {
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
            src="/public/images/image.png" // Substitua pelo caminho correto da imagem
            alt="Comunidade Católica Todo Teu"
            className="w-12 h-12 rounded-full"
          />
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a>
          <a href="#mission" className="hover:text-blue-500 transition-colors">Missão</a>
          <a href="#help" className="hover:text-blue-500 transition-colors">Ajude</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a>
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
          <a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a>
          <a href="#mission" className="hover:text-blue-500 transition-colors">Missão</a>
          <a href="#help" className="hover:text-blue-500 transition-colors">Ajude</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;