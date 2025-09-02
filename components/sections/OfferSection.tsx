'use client';

import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function OfferSection() {
  const { ref, isInView } = useInView();

  const benefits = [
    'Auditoria completa gratuita',
    'Estratégia personalizada',
    'Acompanhamento em tempo real',
    'Garantia de resultados'
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <Card className={`max-w-4xl mx-auto border-0 shadow-2xl transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Oferta Especial
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quer uma estratégia <span className="text-blue-600">sob medida?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Receba uma análise gratuita do seu negócio e descubra como podemos multiplicar seus resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">O que você vai receber:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`flex items-center transform transition-all duration-500 ${
                        isInView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${300 + index * 150}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`text-center transform transition-all duration-700 delay-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Gratuito</div>
                  <div className="text-sm text-gray-500 mt-2">Sem compromisso</div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Sim, quero minha análise gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  ⚡ Resposta em até 24 horas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}