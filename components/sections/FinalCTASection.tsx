'use client';

import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

export default function FinalCTASection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Transforme seu negócio agora
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pronto para escalar com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">inteligência?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Receba uma proposta sob medida para multiplicar os resultados da sua empresa. 
            <strong className="text-white"> Sem compromisso, sem enrolação.</strong>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-700 delay-300 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Agendar conversa no WhatsApp
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <div className="text-center sm:text-left">
              <div className="text-sm text-gray-400">✅ Resposta em até 2 horas</div>
              <div className="text-sm text-gray-400">✅ Análise gratuita incluída</div>
            </div>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-700 delay-500 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">+300%</div>
              <div className="text-gray-400">Crescimento médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">12x</div>
              <div className="text-gray-400">ROAS médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90 dias</div>
              <div className="text-gray-400">Para ver resultados</div>
            </div>
          </div>
          
          {/* Footer replacement */}
          <div className={`pt-16 border-t border-gray-800 transform transition-all duration-700 delay-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-gray-500 text-sm">
              developed by{' '}
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                @johnfrontdev
              </a>
              , CEO at{' '}
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                The Deploy Co.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}