import React, { useState } from 'react';
import { HeroSection } from '../../features/landing/HeroSection/HeroSection';
import { FeatureSection } from '../../features/landing/FeatureSection/FeatureSection';

const LandingPage: React.FC = () => {
  return (
    <main className='overflow-hidden'>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
    </main>
  );
};

export default LandingPage;