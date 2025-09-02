'use client';

import { useInView } from '@/hooks/useInView';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, TrendingUp, Award, Users } from 'lucide-react';

export default function ProofSection() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO - Fashion Store',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face',
      quote: 'Em 3 meses aumentamos o faturamento em 280%. A equipe da Studio Nuvem entende realmente de performance.',
      result: '+280% faturamento'
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor - Tech Startup',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=150&h=150&fit=crop&crop=face',
      quote: 'ROI de 15x no primeiro mês. Nunca vi uma agência tão focada em resultados quanto a Studio Nuvem.',
      result: 'ROI 15x'
    },
    {
      name: 'Ana Costa',
      role: 'CMO - E-commerce',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face',
      quote: 'Triplicamos nossos leads qualificados e reduzimos o CAC em 40%. Parceria que realmente vale a pena.',
      result: '+300% leads'
    }
  ];

  const achievements = [
    { icon: TrendingUp, label: '+150 leads/mês', value: 'Média dos clientes' },
    { icon: Award, label: 'ROI validado', value: 'Resultados comprovados' },
    { icon: Users, label: 'Equipe certificada', value: 'Meta & Google Partner' }
  ];

  const campaigns = [
    {
      title: 'E-commerce Fashion',
      spend: 'R$ 8.500',
      revenue: 'R$ 127.000',
      roas: '14.9x',
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'SaaS B2B',
      spend: 'R$ 12.000',
      revenue: 'R$ 84.000',
      roas: '7.0x',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Infoprodutos',
      spend: 'R$ 5.200',
      revenue: 'R$ 89.400',
      roas: '17.2x',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="results" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados que <span className="text-blue-600">nossos clientes alcançaram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada case é uma história de crescimento real e sustentável
          </p>
        </div>

        {/* Campaign Results */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {campaigns.map((campaign, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 shadow-lg transform transition-all duration-700 hover:scale-105 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${campaign.color}`}></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{campaign.title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investimento:</span>
                    <span className="font-semibold">{campaign.spend}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Faturamento:</span>
                    <span className="font-semibold text-green-600">{campaign.revenue}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-gray-600">ROAS:</span>
                    <span className="text-2xl font-bold text-blue-600">{campaign.roas}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`border-0 shadow-lg transform transition-all duration-700 hover:shadow-xl ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-blue-600 font-semibold">{testimonial.result}</span>
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 mb-3" />
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-gray-50 rounded-2xl transform transition-all duration-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${1200 + index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.label}</h3>
              <p className="text-gray-600">{achievement.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}