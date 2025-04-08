const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Quem Somos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/about.jpg" // Substitua pelo caminho correto da imagem
            alt="Somos uma comunidade católica"
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident suscipit culpa dignissimos praesentium voluptas alias fuga obcaecati iste deserunt sapiente, voluptatibus eum! Nam minus voluptatem, ut voluptatum commodi laudantium.
            </p>
            <p className="text-lg text-gray-700 mb-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut laudantium optio doloremque ex porro consectetur labore molestiae fugit fugiat tenetur praesentium possimus id, illo eos, expedita temporibus explicabo aliquam?
             
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