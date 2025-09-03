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
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Projetos</h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
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
              <Card className="h-full bg-purple-800 border-purple-700 overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Imagem */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-300"></div>
                </div>

                {/* Conteúdo */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-3">{project.title}</h3>
                  <p className="text-cyan-200 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-300 text-blue-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botões */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-300 text-cyan-300 bg-purple-800 hover:bg-cyan-300 hover:text-blue-900 transition-colors duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-cyan-300 text-blue-900 hover:bg-cyan-200 transition-colors duration-300"
                    >
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
