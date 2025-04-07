const HelpSection: React.FC = () => {
  return (
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
  );
};

export default HelpSection;