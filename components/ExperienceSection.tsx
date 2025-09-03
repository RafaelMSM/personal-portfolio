'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    company: 'MKDEV Marketing and Development',
    position: 'Analista e Desenvolvedor de Sistemas Júnior',
    period: 'Set/2024 – Atual',
    location: 'Presidente Prudente, SP',
    description: 'Desenvolvimento de soluções em RPA, BI e automação de processos empresariais.',
  },
  {
    company: 'MKDEV Marketing and Development',
    position: 'Estagiário de Suporte e Desenvolvimento',
    period: 'Set/2022 – Set/2024',
    location: 'Presidente Prudente, SP',
    description: 'Suporte técnico, desenvolvimento de dashboards e automação de relatórios.',
  },
  {
    company: 'Micro2000',
    position: 'Estagiário em Eletroeletrônica',
    period: 'Abr/2022 – Jul/2022',
    location: 'Presidente Prudente, SP',
    description: 'Manutenção e suporte técnico em equipamentos eletroeletrônicos.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-100 mb-4">Experiência</h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Linha central da timeline */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 via-purple-300 to-blue-300"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Marcador da timeline */}
              <div className="absolute w-5 h-5 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full border-4 border-white left-2 md:left-auto md:right-[-11px] top-6 shadow-md"></div>
              
              <Card className="bg-purple-800 border-cyan-300/30 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center text-cyan-200 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-300" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-cyan-200 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-purple-300" />
                    {exp.location}
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-100 mb-2">{exp.position}</h3>
                  <h4 className="text-lg font-medium text-purple-200 mb-3">{exp.company}</h4>
                  <p className="text-cyan-200 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
