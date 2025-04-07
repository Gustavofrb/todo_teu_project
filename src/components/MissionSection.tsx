import { Heart, HandHeart, Users, Church } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Missão</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default MissionSection;