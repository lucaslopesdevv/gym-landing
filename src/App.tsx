import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}

export default App;
