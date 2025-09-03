'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rafaelm.s.m@hotmail.com?subject=Contato do Portfolio&body=Nome: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensagem:%0A${formData.message}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'rafaelm.s.m@hotmail.com',
      link: 'mailto:rafaelm.s.m@hotmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(14) 98152-1917',
      link: 'tel:+5514981521917',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(14) 98152-1917',
      link: 'https://wa.me/5514981521917',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      link: 'https://linkedin.com/in/rafael-medeiros-509524214',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Vamos Conversar?</h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
          <p className="text-xl text-cyan-100 mt-4 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.label === 'LinkedIn' ? '_blank' : '_self'}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-300 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-white group-hover:text-blue-900" />
                  </div>
                  <div>
                    <p className="text-cyan-200 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-50 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-purple-800 border-purple-700 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-blue-900 border-cyan-400 text-white placeholder:text-cyan-200 focus:ring-cyan-300 focus:border-cyan-300"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-blue-900 border-cyan-400 text-white placeholder:text-cyan-200 focus:ring-cyan-300 focus:border-cyan-300"
                    required
                  />
                  <Textarea
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-blue-900 border-cyan-400 text-white placeholder:text-cyan-200 min-h-32 focus:ring-cyan-300 focus:border-cyan-300"
                    required
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-cyan-400 text-blue-900 hover:bg-cyan-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-purple-700"
        >
          <p className="text-cyan-200">
            © 2025 Rafael Medeiros. Desenvolvido com Next.js e Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
