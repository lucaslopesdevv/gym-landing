import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Transforme seu{' '}
              <span className="gradient-text">corpo</span>{' '}
              e sua{' '}
              <span className="gradient-text">mente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubra seu potencial máximo com nossos programas de treinamento personalizados, 
              equipamentos de última geração e uma comunidade que te motiva a alcançar seus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="btn-primary text-lg px-10 py-5">
                Comece sua Jornada
              </button>
              <button className="btn-secondary text-lg px-10 py-5">
                Agende uma Visita
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Alunos Ativos</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Modalidades</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-800/30 rounded-full blur-xl opacity-50"></div>
              
              {/* Main image placeholder */}
              <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800/50 backdrop-blur-sm">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-6xl animate-bounce-slow">
                      🏋️‍♂️
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Seu Novo Estilo de Vida
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Força • Resistência • Bem-estar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 