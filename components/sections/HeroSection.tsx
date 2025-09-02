'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-0">
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Agência Focada em Performance
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tráfego que <span className="text-blue-600">converte</span>.<br />
              Conteúdo que <span className="text-blue-600">vende</span>.<br />
              Design que <span className="text-blue-600">posiciona</span>.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Agência focada em resultados reais — sem blablablá.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Agende uma conversa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-black px-8 py-4 text-lg transition-all duration-300"
              >
                Ver cases de sucesso
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">+150 projetos ativos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Equipe certificada</span>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">ROAS Dashboard</h3>
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-100 text-sm">ROAS Atual</p>
                      <p className="text-3xl font-bold">12.4x</p>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Vendas</p>
                      <p className="text-3xl font-bold">R$ 89k</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Meta Ads</span>
                    <span className="text-green-600 font-bold">+284%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Google Ads</span>
                    <span className="text-blue-600 font-bold">+156%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">TikTok Ads</span>
                    <span className="text-purple-600 font-bold">+198%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                +R$ 50k hoje
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                ROAS 12x
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
    </section>
  );
}