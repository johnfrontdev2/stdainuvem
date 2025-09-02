'use client';

import { useInView } from '@/hooks/useInView';
import { TrendingUp, Target, Zap } from 'lucide-react';

export default function AboutSection() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: '+R$ 312.000', label: 'gerados em vendas' },
    { value: 'ROAS médio: 12x', label: 'retorno comprovado' },
    { value: 'Clientes que viram', label: 'lucro, não só cliques' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Foco',
      description: 'Estratégias direcionadas para resultados mensuráveis'
    },
    {
      icon: Zap,
      title: 'Inteligência',
      description: 'Dados e insights que otimizam cada campanha'
    },
    {
      icon: TrendingUp,
      title: 'Resultado',
      description: 'Performance real que impacta o seu faturamento'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Números que <span className="text-blue-600">falam por si</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 delay-${index * 200} ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Growth Chart Visual */}
          <div className={`relative max-w-2xl mx-auto mb-16 transform transition-all duration-1000 delay-600 ${
            isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl flex items-end justify-center p-4">
              <div className="flex items-end gap-2 w-full max-w-md">
                {[20, 35, 55, 40, 70, 85, 100].map((height, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t flex-1 transition-all duration-1000 delay-700"
                    style={{ 
                      height: isInView ? `${height}%` : '0%',
                      transitionDelay: `${700 + index * 100}ms`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="absolute -top-2 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              ↗ Crescimento consistente
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 transform transition-all duration-700 delay-${800 + index * 200} ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}