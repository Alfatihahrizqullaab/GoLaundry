import React, { useState } from 'react';
import { HeroSection } from '../../features/landing/HeroSection/HeroSection';
import { FeatureSection } from '../../features/landing/FeatureSection/FeatureSection';
import { HowItWorksSection } from '../../features/landing/HowItWorksSection/HowItWorksSection';

const LandingPage: React.FC = () => {
  return (
    <main className='overflow-hidden'>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <HowItWorksSection></HowItWorksSection>
    </main>
  );
};

export default LandingPage;