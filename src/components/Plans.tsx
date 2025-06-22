import React, { useState } from 'react';

const Plans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Básico',
      description: 'Perfeito para quem está começando',
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        'Acesso à musculação',
        'Avaliação física inicial',
        'Programa de treino básico',
        'Horário livre',
        'App móvel'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Premium',
      description: 'A escolha mais popular',
      monthlyPrice: 129,
      annualPrice: 109,
      features: [
        'Tudo do plano Básico',
        'Todas as modalidades',
        'Acompanhamento nutricional',
        'Personal trainer 2x/mês',
        'Acesso a aulas coletivas',
        'Área de relaxamento'
      ],
      popular: true,
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Elite',
      description: 'Para resultados extraordinários',
      monthlyPrice: 199,
      annualPrice: 169,
      features: [
        'Tudo do plano Premium',
        'Personal trainer ilimitado',
        'Programa nutricional completo',
        'Consulta médica esportiva',
        'Acesso 24/7',
        'Spa e relaxamento',
        'Suplementação inclusa'
      ],
      popular: false,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha seu <span className="gradient-text">Plano</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Temos o plano ideal para o seu perfil e objetivos. Comece sua transformação hoje mesmo!
          </p>

          {/* Price Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                Economize 20%
              </span>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary-500 shadow-xl shadow-primary-500/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white text-2xl">
                    {plan.name === 'Básico' ? '🏃‍♂️' : plan.name === 'Premium' ? '💪' : '👑'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/mês</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      R$ {plan.monthlyPrice}/mês
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
              }`}>
                {plan.popular ? 'Começar Agora' : 'Escolher Plano'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Todos os planos incluem acompanhamento profissional e acesso ao app móvel
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Sem taxa de matrícula • Cancele quando quiser • Primeira semana grátis
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans; 