import NavigationMenu from './NavigationMenu';

interface HeaderProps {
  isScrolled: boolean;
  setMenuOpen: (open: boolean) => void;
  menuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, setMenuOpen, menuOpen }) => {
  return (
    <header className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Subcomponente NavigationMenu */}
      <NavigationMenu isScrolled={isScrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-white text-5xl font-bold mb-6">Todo Teu</h2>
        <p className="text-white text-xl max-w-2xl mb-8">
          Inflamar a chama de amor aos Sagrados!
        </p>
        <a
          href="/participar" // Substitua "/participar" pelo caminho da página de destino
          className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          Faça Parte
        </a>
      </div>
    </header>
  );
};

export default Header;