'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-50 text-center px-4">
      {/* Foto com borda animada */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto p-[3px] bg-gradient-to-r from-primary via-secondary to-accent animate-borderGlow"
      >
        <div className="rounded-full overflow-hidden shadow-2xl w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&h=500&fit=crop"
            alt="Foto de teste"
            width={192}
            height={192}
            className="object-cover rounded-full"
            priority
          />
        </div>
      </motion.div>

      {/* Nome e Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
      >
        Rafael Medeiros
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-3 text-lg text-muted-foreground"
      >
        Tecnólogo em Análise e Desenvolvimento de Sistemas
      </motion.p>

      {/* Botões com glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        <Button
          asChild
          className="relative group px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white shadow-lg animate-borderGlow"
        >
          <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Baixar CV
          </a>
        </Button>

        <Button
          className="relative group px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-lg animate-borderGlow"
          onClick={() => scrollToSection('contact')}
        >
          <Mail className="mr-2 h-5 w-5" />
          Contato
        </Button>
      </motion.div>

      {/* Ícone para rolar */}
      <motion.div
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
