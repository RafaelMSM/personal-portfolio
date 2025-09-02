'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Dashboard BI Vendas',
    description: 'Dashboard interativo em Power BI para análise de vendas com KPIs em tempo real, filtros dinâmicos e visualizações avançadas.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    tech: ['Power BI', 'SQL Server', 'DAX'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Sistema RPA Automação',
    description: 'Solução RPA desenvolvida em C# para automatizar processo de extração e processamento de dados de múltiplas fontes.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    tech: ['C#', 'Power Automate', 'SQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'ETL Pipeline Analytics',
    description: 'Pipeline ETL robusto usando SSIS para integração de dados de sistemas legados com análises preditivas em Python.',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
    tech: ['SSIS', 'Python', 'SQL Server'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-white border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    <Button size="sm" className="flex-1 bg-slate-800 hover:bg-slate-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}