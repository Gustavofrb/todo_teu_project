import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '../components/NavigationMenu'; // Importando o menu de navegação

const Conheca: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      {/* Menu de navegação */}
      <NavigationMenu isScrolled={true} menuOpen={false} setMenuOpen={() => {}} />

      {/* Conteúdo principal */}
      <div className="container mx-auto py-10 px-0 mt-16">
        {/* Título da página */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Conheça Nossa Comunidade
        </h1>

        {/* Conteúdo da página */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Vídeo de apresentação */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <iframe
              className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Texto de apresentação */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <p className="text-lg text-gray-300 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore tenetur expedita, quo corrupti ratione dolores magni eligendi facere ullam repellendus quia blanditiis consequatur enim sed! Itaque corporis mollitia deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore rerum porro unde, odio incidunt perferendis veritatis, repudiandae fugiat et quos exercitationem pariatur in harum totam sequi omnis qui voluptas?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus officia, repellat impedit vitae similique exercitationem nemo at vero accusamus repudiandae corrupti quasi magnam minus facilis quae. Rem laudantium corrupti excepturi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iusto possimus quos nulla adipisci consectetur eius aspernatur, pariatur est ipsum accusamus sequi ducimus consequuntur voluptate corrupti. Quod dicta harum aliquid!
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => navigate('/participar')}
                className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conheca;