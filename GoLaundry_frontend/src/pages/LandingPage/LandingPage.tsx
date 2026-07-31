import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../../features/landing/HeroSection/HeroSection';
import { FeatureSection } from '../../features/landing/FeatureSection/FeatureSection';
import { HowItWorksSection } from '../../features/landing/HowItWorksSection/HowItWorksSection';
import { PricingSection } from '../../features/landing/PricingSection/PricingSection';
import { TestimonialsSection } from '../../features/landing/TestimonialSection/TestimonialSection';
import { FAQSection } from '../../features/landing/FAQSection/FAQSection';
import { CTASection } from '../../features/landing/CTASection/CTASection';

const LandingPage: React.FC = () => {

  const { hash } = useLocation();

  useEffect(() => {
    // Mengecek apakah URL memiliki hash (misal: /#fitur)
    if (hash) {
      // Menghapus tanda '#' untuk mendapatkan ID elemen
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Memberi sedikit jeda (100ms) agar elemen selesai di-render sebelum di-scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Jika kembali ke Beranda (hanya /), paksa scroll ke paling atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <main className='overflow-hidden'>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <HowItWorksSection></HowItWorksSection>
      <PricingSection></PricingSection>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <CTASection></CTASection>
    </main>
  );
};

export default LandingPage;