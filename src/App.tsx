import { useState, useEffect } from 'react';
import { Heart, HandHeart, Users, Church, ArrowRight, ArrowUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define como "rolado" após 50px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

        {/* Barra de Navegação */}
        <nav
          className={`fixed top-0 left-0 w-full z-10 px-6 py-4 transition-colors duration-300 ${
            isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
          }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Todo Teu</h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a>
              <a href="#mission" className="hover:text-blue-500 transition-colors">Missão</a>
              <a href="#help" className="hover:text-blue-500 transition-colors">Ajude</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-white text-5xl font-bold mb-6">Todo Teu</h2>
          <p className="text-white text-xl max-w-2xl mb-8">
            Inflamar a chama de amor aos Sagrados!
          </p>
          <button
            type="button"
            className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            Faça Parte <ArrowRight size={20} />
          </button>
        </div>
      </header>
      <section id="mission" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Heart size={40} className="text-blue-700 mx-auto mb-4" />,
            title: 'Amor',
            desc: 'Levando amor e esperança para quem mais precisa',
            link: '#amor',
          },
          {
            icon: <HandHeart size={40} className="text-blue-700 mx-auto mb-4" />,
            title: 'Solidariedade',
            desc: 'Ajudando pessoas em situação de vulnerabilidade',
            link: '#solidariedade',
          },
          {
            icon: <Users size={40} className="text-blue-700 mx-auto mb-4" />,
            title: 'Comunidade',
            desc: 'Construindo uma comunidade de apoio e fraternidade',
            link: '#comunidade',
          },
          {
            icon: <Church size={40} className="text-blue-700 mx-auto mb-4" />,
            title: 'Fé',
            desc: 'Fortalecendo a fé através de ações concretas',
            link: '#fe',
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </a>
        ))}
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Quem Somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Voluntários em ação"
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Todo Teu é uma organização dedicada a transformar vidas através
                do amor e da solidariedade. Nosso trabalho é baseado no
                compromisso com aqueles que mais precisam de apoio e
                acolhimento.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Através de nossas ações e projetos, buscamos criar um impacto
                positivo na sociedade, levando esperança e dignidade para
                pessoas em situação de vulnerabilidade.
              </p>
              <button
                type="button"
                className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Como Ajudar</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Existem várias maneiras de fazer parte desta missão. Sua
            contribuição faz a diferença na vida de muitas pessoas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Doe',
                desc: 'Sua doação ajuda a manter nossos projetos e ações sociais',
                button: 'Fazer Doação',
              },
              {
                title: 'Voluntarie-se',
                desc: 'Doe seu tempo e talento para ajudar quem precisa',
                button: 'Seja Voluntário',
              },
              {
                title: 'Divulgue',
                desc: 'Compartilhe nossa missão e ajude a expandir nosso alcance',
                button: 'Compartilhar',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-600 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="mb-6">{item.desc}</p>
                <button
                  type="button"
                  className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-blue-800 text-white py-12 px-6"
        aria-label="Rodapé"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Todo Teu</h3>
            <p className="text-gray-300">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-300 hover:text-white">
                  Missão
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-300 hover:text-white">
                  Como Ajudar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contato@todoteu.org</li>
              <li>(38) 99999-9999</li>
              <li>João Pinheiro, MG</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/+555199980035"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 text-sm">
          © {new Date().getFullYear()} Todo Teu. Todos os direitos reservados.
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
