'use client';

import { useInView } from '@/hooks/useInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const { ref, isInView } = useInView();

  const faqs = [
    {
      question: 'Vocês atendem qualquer negócio?',
      answer: 'Trabalhamos principalmente com e-commerces, infoprodutos e serviços B2B que já têm um produto validado no mercado. Nosso foco é escalar negócios que já convertem, multiplicando os resultados através de estratégias de tráfego pago e marketing digital.'
    },
    {
      question: 'Qual o custo médio para começar?',
      answer: 'O investimento varia de acordo com o escopo do projeto e objetivos. Geralmente trabalhamos com budgets a partir de R$ 5.000/mês para tráfego pago + nossa taxa de gestão. Fazemos uma análise gratuita para definir a estratégia ideal para o seu orçamento.'
    },
    {
      question: 'Posso ver resultados reais de clientes?',
      answer: 'Sim! Temos diversos cases documentados com ROAS, faturamento e métricas reais. Durante nossa conversa inicial, compartilhamos cases similares ao seu segmento, sempre respeitando a confidencialidade dos clientes.'
    },
    {
      question: 'Como funciona o processo de trabalho?',
      answer: 'Primeiro fazemos uma auditoria gratuita, depois criamos uma estratégia personalizada. O acompanhamento é semanal com relatórios detalhados. Você tem acesso direto às contas de anúncio e dashboards em tempo real.'
    },
    {
      question: 'Oferecem garantia de resultados?',
      answer: 'Sim, trabalhamos com metas claras e mensuráveis. Se não atingirmos os KPIs acordados nos primeiros 90 dias, ajustamos a estratégia sem custo adicional ou você pode cancelar sem multa.'
    }
  ];

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-blue-600">frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respondemos as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border border-gray-200 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}