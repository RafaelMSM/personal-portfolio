'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-100">Sobre Mim</h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Descriptions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-100 mb-3 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-cyan-300" />
                  Português
                </h3>
                <p className="text-cyan-200 leading-relaxed">
                  Sou <span className="font-semibold text-cyan-100">Tecnólogo em Análise e Desenvolvimento de Sistemas</span> pela Fatec Presidente Prudente, 
                  com experiência em <span className="font-medium text-cyan-300">RPA, ETL, Business Intelligence e Desenvolvimento de Soluções</span>.  
                  Tenho como propósito transformar dados em insights estratégicos e criar automações que geram eficiência, inovação e escalabilidade.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-100 mb-3 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-cyan-300" />
                  English
                </h3>
                <p className="text-cyan-200 leading-relaxed">
                  I hold a <span className="font-semibold text-cyan-100">degree in Systems Analysis and Development</span> and have experience in 
                  <span className="font-medium text-cyan-300"> RPA, ETL, Business Intelligence, and Software Development</span>.  
                  My goal is to leverage data and automation to deliver <span className="font-medium text-cyan-300">efficient, innovative, and scalable solutions</span> that drive business impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-purple-800 border-cyan-300/30 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-cyan-300 mr-3" />
                  <h3 className="text-lg font-semibold text-cyan-100">Localização</h3>
                </div>
                <p className="text-cyan-200">Presidente Prudente – SP, Brasil</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800 border-cyan-300/30 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="h-6 w-6 text-cyan-300 mr-3" />
                  <h3 className="text-lg font-semibold text-cyan-100">Idiomas</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Português</span>
                    <span className="text-cyan-300 text-sm">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Inglês</span>
                    <span className="text-cyan-300 text-sm">Limited Working Proficiency</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
