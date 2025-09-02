import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Studio Nuvem - Tráfego que Converte, Conteúdo que Vende, Design que Posiciona',
  description: 'Agência focada em resultados reais. Tráfego pago, gestão de Instagram, branding e sites que geram ROI comprovado.',
  keywords: 'tráfego pago, marketing digital, agência, ROAS, conversão, Instagram, branding, landing pages',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://studionuvem.com',
    siteName: 'Studio Nuvem',
    title: 'Studio Nuvem - Agência de Marketing Digital Focada em Performance',
    description: 'Resultados reais: +312k em vendas geradas, ROAS médio de 12x. Tráfego pago, gestão de redes sociais e branding que converte.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}