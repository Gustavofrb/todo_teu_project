import React from 'react';
import { useNavigate } from 'react-router-dom';

const Conheca: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Conheça Nossa Comunidade
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At illo velit labore cum impedit? Veniam exercitationem quae voluptate nesciunt illo maiores sint, dignissimos amet, dicta mollitia autem eligendi, facere illum!
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/participar')}
            className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conheca;