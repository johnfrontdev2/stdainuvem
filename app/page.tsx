'use client';

import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProofSection from '@/components/sections/ProofSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import OfferSection from '@/components/sections/OfferSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import GeminiChatbot from '@/components/chat/GeminiChatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProofSection />
      <PortfolioSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <GeminiChatbot />
    </main>
  );
}