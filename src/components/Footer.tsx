import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Planos', href: '#plans' },
    { name: 'Contato', href: '#contact' },
  ];

  const services = [
    { name: 'Musculação', href: '#' },
    { name: 'Funcional', href: '#' },
    { name: 'Boxe/Muay Thai', href: '#' },
    { name: 'Yoga & Pilates', href: '#' },
    { name: 'Spinning', href: '#' },
    { name: 'Dança', href: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'WhatsApp', icon: '💬', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <span className="text-2xl font-bold gradient-text">GymFit</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Transformamos vidas através do fitness. Junte-se a nós e descubra seu potencial máximo 
              com equipamentos modernos e profissionais qualificados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Modalidades</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 text-lg mt-0.5">📍</span>
                <div>
                  <p className="text-gray-300">
                    Rua das Flores, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 text-lg">📞</span>
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 text-lg">✉️</span>
                <p className="text-gray-300">contato@gymfit.com.br</p>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-200 mb-2">Horário de Funcionamento</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Segunda a Sexta: 5h às 23h</p>
                  <p>Sábados: 6h às 20h</p>
                  <p>Domingos: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto section-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Fique por dentro das novidades</h3>
              <p className="text-gray-300">Receba dicas, promoções e conteúdos exclusivos</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© {currentYear} GymFit. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 