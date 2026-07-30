import React, { useState } from 'react';
import { HeroSection } from '../../features/landing/HeroSection/HeroSection';
import { FeatureSection } from '../../features/landing/FeatureSection/FeatureSection';
import { HowItWorksSection } from '../../features/landing/HowItWorksSection/HowItWorksSection';
import { PricingSection } from '../../features/landing/PricingSection/PricingSection';
import { TestimonialsSection } from '../../features/landing/TestimonialSection/TestimonialSection';
import { FAQSection } from '../../features/landing/FAQSection/FAQSection';

const LandingPage: React.FC = () => {
  return (
    <main className='overflow-hidden'>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <HowItWorksSection></HowItWorksSection>
      <PricingSection></PricingSection>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
    </main>
  );
};

export default LandingPage;