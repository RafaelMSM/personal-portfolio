'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
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
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-slate-600" />
                  Português
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Sou <span className="font-semibold text-slate-800">Tecnólogo em Análise e Desenvolvimento de Sistemas</span> pela Fatec Presidente Prudente, 
                  com experiência em <span className="font-medium">RPA, ETL, Business Intelligence e Desenvolvimento de Soluções</span>.  
                  Tenho como propósito transformar dados em insights estratégicos e criar automações que geram eficiência, inovação e escalabilidade.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-slate-600" />
                  English
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  I hold a <span className="font-semibold text-slate-800">degree in Systems Analysis and Development</span> and have experience in 
                  <span className="font-medium"> RPA, ETL, Business Intelligence, and Software Development</span>.  
                  My goal is to leverage data and automation to deliver <span className="font-medium">efficient, innovative, and scalable solutions</span> that drive business impact.
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
            <Card className="bg-slate-50 border-slate-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-slate-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Localização</h3>
                </div>
                <p className="text-slate-600">Presidente Prudente – SP, Brasil</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="h-6 w-6 text-slate-600 mr-3" />
                  <h3 className="text-lg font-semibold text-slate-800">Idiomas</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Português</span>
                    <span className="text-slate-500 text-sm">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Inglês</span>
                    <span className="text-slate-500 text-sm">Limited Working Proficiency</span>
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
