'use client';

import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Instagram, 
  Palette, 
  Monitor,
  ArrowRight,
  TrendingUp,
  Users,
  Eye
} from 'lucide-react';

export default function ServicesSection() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: Target,
      title: 'Tráfego Pago',
      description: 'Campanhas otimizadas para máximo ROI em Meta Ads, Google Ads e TikTok Ads',
      mockup: (
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium">Meta Ads Campaign</span>
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold">ROAS: 8.4x</div>
          <div className="text-xs opacity-80">R$ 15.000 → R$ 126.000</div>
        </div>
      )
    },
    {
      icon: Instagram,
      title: 'Gestão de Instagram',
      description: 'Conteúdo estratégico que gera engajamento real e converte followers em clientes',
      mockup: (
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium">Instagram Growth</span>
            <Users className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold">+2.5M alcance</div>
          <div className="text-xs opacity-80">180% mais engagement</div>
        </div>
      )
    },
    {
      icon: Palette,
      title: 'Branding e Visual',
      description: 'Identidade visual forte que diferencia sua marca no mercado digital',
      mockup: (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium">Brand Recognition</span>
            <Eye className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold">+350% recall</div>
          <div className="text-xs opacity-80">Identidade memorável</div>
        </div>
      )
    },
    {
      icon: Monitor,
      title: 'Sites e Landing Pages',
      description: 'Páginas de alta conversão otimizadas para performance e experiência do usuário',
      mockup: (
        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium">Landing Page</span>
            <Target className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold">24% conversão</div>
          <div className="text-xs opacity-80">Acima da média do setor</div>
        </div>
      )
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços que <span className="text-blue-600">entregam resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada serviço é pensado estrategicamente para maximizar o retorno do seu investimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 transform hover:-translate-y-2 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  {service.mockup}
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-black group-hover:text-white transition-all duration-300 border-gray-300"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Ver todos os serviços
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}