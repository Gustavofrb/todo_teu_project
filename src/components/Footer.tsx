import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Todo Teu</h3>
          <p className="text-gray-300">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-300 hover:text-white">Sobre</a></li>
            <li><a href="#mission" className="text-gray-300 hover:text-white">Missão</a></li>
            <li><a href="#help" className="text-gray-300 hover:text-white">Como Ajudar</a></li>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/+555199980035" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="WhatsApp">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="/login" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">Intranet</a>
      </div>
      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} Todo Teu. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;