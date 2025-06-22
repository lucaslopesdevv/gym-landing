import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏋️‍♂️',
      title: 'Musculação',
      description: 'Equipamentos de última geração para desenvolvimento de força e massa muscular.',
      features: ['Acompanhamento profissional', 'Equipamentos modernos', 'Planos personalizados']
    },
    {
      icon: '🤸‍♀️',
      title: 'Funcional',
      description: 'Treinamento funcional para melhorar movimentos do dia a dia.',
      features: ['Exercícios variados', 'Melhora da coordenação', 'Fortalecimento do core']
    },
    {
      icon: '🥊',
      title: 'Boxe/Muay Thai',
      description: 'Artes marciais para condicionamento físico e defesa pessoal.',
      features: ['Técnicas de combate', 'Cardio intenso', 'Disciplina e foco']
    },
    {
      icon: '🧘‍♀️',
      title: 'Yoga & Pilates',
      description: 'Práticas para flexibilidade, equilíbrio e bem-estar mental.',
      features: ['Relaxamento', 'Flexibilidade', 'Postura corporal']
    },
    {
      icon: '🚴‍♂️',
      title: 'Spinning',
      description: 'Aulas de ciclismo indoor com música motivacional.',
      features: ['Queima de calorias', 'Música motivante', 'Grupos dinâmicos']
    },
    {
      icon: '💃',
      title: 'Dança',
      description: 'Modalidades de dança para diversão e condicionamento.',
      features: ['Zumba', 'Dança do ventre', 'Ritmos latinos']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nossas <span className="gradient-text">Modalidades</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de modalidades para atender todos os perfis e objetivos. 
            Encontre a atividade perfeita para você!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 w-full py-3 px-4 bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-all duration-200 group-hover:border-primary-500 group-hover:text-primary-500">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Não encontrou o que procurava? Temos muito mais!
          </p>
          <button className="btn-primary">
            Ver Todas as Modalidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 