'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const education = [
  {
    institution: 'Fatec Presidente Prudente',
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    period: '2022 – 2024',
  },
  {
    institution: 'ETEC Amin Jundi',
    degree: 'Técnico em Desenvolvimento de Sistemas',
    period: '2020 – 2021',
  },
  {
    institution: 'ETEC Amin Jundi',
    degree: 'Ensino Médio',
    period: '2019 – 2021',
  },
];

const certifications = [
  'Apresentação de Artigo – XVI Semana de Tecnologia (Fatec Presidente Prudente, Nov 2024)',
  'Apresentação de Artigo – XVI Semana de Tecnologia (Fatec Presidente Prudente, Out 2024)',
  'Apresentação no I Congresso de Iniciação Científica (CIC/2024 – Fatec Presidente Prudente, Jun 2024)',
  'Desenvolvimento de API para Sistema Acadêmico das FATECs de SP – CIC/2024',
  'Coursera – Compartilhar os dados com a arte da visualização (Jan 2024)',
  'Coursera – Projeto final de Data Analytics do Google (Jan 2024)',
  'Coursera – Analisar os dados para responder às perguntas (Dez 2023)',
  'Coursera – Processar os dados para limpá-los (Dez 2023)',
  'TOEIC – Test of English for International Communication (Mai 2023)',
  'Coursera – Fundamentos: dados, dados, em todos os lugares (Jul 2022)',
  'AWS Cloud Practitioner Essentials (Second Edition) – AWS (Out 2021)',
  'Escola da Nuvem – Master Class: Configuração e Acesso do WordPress na AWS (Out 2021)',
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Formação & Certificações</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-slate-700 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-800">Formação Acadêmica</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-600 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 text-sm">
                        {edu.period}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-slate-700 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-800">Certificações</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="bg-white border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <p className="text-slate-700 font-medium">
                        {cert}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
