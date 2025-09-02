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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experiência</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            
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
                <div className="absolute w-4 h-4 bg-slate-800 rounded-full border-4 border-white left-2 md:left-auto md:right-[-9px] top-6"></div>
                
                <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center text-slate-500 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-600 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}