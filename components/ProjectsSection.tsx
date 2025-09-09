'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Processo de Reenvio com SSIS',
    description:
      'Desenvolvimento de fluxo no SSIS para reenvio automatizado de dados, garantindo integração contínua e confiabilidade da informação.',
    image: 'https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg',
    tech: ['SSIS', 'SQL Server'],
  },
  {
    title: 'Organização de Arquivos com PowerShell',
    description:
      'Script criado em PowerShell para organizar, estruturar e padronizar diretórios, reduzindo retrabalho e facilitando a gestão de arquivos.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    tech: ['PowerShell'],
  },
  {
    title: 'Download de Imagens de Peças',
    description:
      'Automação em PowerShell para realizar download em massa de imagens, com foco em relatórios corporativos e padronização de dados visuais.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    tech: ['PowerShell'],
  },
  {
    title: 'Cadastro de Arquivos com Power Automate Desktop',
    description:
      'Automação de processos repetitivos de cadastro de arquivos, aumentando a produtividade e reduzindo falhas manuais.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    tech: ['Power Automate Desktop'],
  },
  {
    title: 'Automação de Processos no SharePoint',
    description:
      'Criação de fluxos automatizados no Power Automate para integração com SharePoint, otimizando a gestão de documentos e aprovações.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    tech: ['Power Automate', 'SharePoint'],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white"
    >
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
                  <h3 className="text-xl font-semibold text-cyan-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-cyan-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-300 text-blue-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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
