'use client';

import { motion } from 'framer-motion';
import { 
  Database, BarChart, Zap, Code, Bot, TrendingUp, 
  Shield, Users, Wrench, Network, Cloud, FileText 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { icon: Database, title: 'SQL & Bancos de Dados', description: 'Microsoft SQL Server, queries otimizadas, procedures, funções, design de banco de dados' },
  { icon: TrendingUp, title: 'ETL & Integração', description: 'SSIS, Power Automate, SharePoint, APIs, arquivos legados, integração de sistemas' },
  { icon: BarChart, title: 'BI & Visualização', description: 'Power BI, dashboards interativos, análise de KPIs, storytelling com dados' },
  { icon: Bot, title: 'RPA & Automação', description: 'Automação de processos com Power Automate, PowerShell e C#' },
  { icon: Code, title: 'Linguagens & Frameworks', description: 'Java (Spring Boot), JavaScript (React, Vue, Angular), PHP (Laravel), Python, C#, PowerShell, .NET Framework, SQL, HTML, CSS e Tailwind CSS' },
  { icon: Zap, title: 'Low-Code Solutions', description: 'Power Platform, automação de fluxos de trabalho, soluções rápidas e escaláveis' },
  { icon: Shield, title: 'Segurança & Redes', description: 'Segurança da informação, firewalls, VPN, redes de computadores, gerenciamento de incidentes' },
  { icon: Users, title: 'Competências Interpessoais', description: 'Comunicação oral, apresentações técnicas, foco no cliente, relacionamento com clientes, trabalho em equipe' },
  { icon: FileText, title: 'Documentação & Gestão', description: 'Documentação técnica, testes funcionais, qualidade de software, gestão de projetos e equipes' },
  { icon: Wrench, title: 'Suporte & Infraestrutura', description: 'Suporte ao cliente, help desk, central de serviços, solução de problemas técnicos e manutenção de computadores' },
  { icon: Network, title: 'Tecnologias & Ferramentas', description: 'Office 365, Google Sheets, GitHub, Microsoft SharePoint, Salesforce' },
  { icon: Cloud, title: 'Cloud & Serviços', description: 'AWS (Cloud Practitioner Essentials), WordPress na AWS, Linux/Ubuntu' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-100">Competências</h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-purple-800 border-purple-700 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  {/* Ícone */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-cyan-300 rounded-full mb-6"
                  >
                    <skill.icon className="h-8 w-8 text-blue-900" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-cyan-100 mb-3">{skill.title}</h3>
                  <p className="text-cyan-200 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
