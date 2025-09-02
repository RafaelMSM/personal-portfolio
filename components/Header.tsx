'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-slate-800 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Medeiros Tech Solutions Ltda.
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Início', id: 'home' },
              { name: 'Sobre', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experiência', id: 'experience' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}