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
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        {/* Foto de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-slate-200">
            <Image
              src="\project\ProfilePicture.jpeg"
              alt="Foto de Rafael Medeiros"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rafael Medeiros
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Data & Process Automation | RPA Specialist | BI Developer | SQL Server | Power BI | Python | C# | Low-Code Solutions
          </motion.p>

          <motion.p
            className="text-lg text-slate-700 max-w-2xl mx-auto mb-12 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            "Apaixonado por transformar dados em insights estratégicos e automatizar processos para impulsionar resultados."
          </motion.p>

          {/* Botões */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3"
              asChild
            >
              <a
                href="\project\ProfilePicture.jpeg" // coloque seu currículo na pasta public/cv
                download
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar CV
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contato
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ícone scroll down */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown
          className="h-8 w-8 text-slate-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </motion.div>
    </section>
  );
}
