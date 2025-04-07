const AboutSection: React.FC = () => {
  return (
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
              Somos uma organização dedicada a promover o amor, a solidariedade e a fé. Nosso objetivo é transformar vidas por meio de ações concretas e inspiradoras.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Trabalhamos em comunidade para ajudar aqueles que mais precisam, fortalecendo laços e construindo um futuro melhor para todos.
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
  );
};

export default AboutSection;