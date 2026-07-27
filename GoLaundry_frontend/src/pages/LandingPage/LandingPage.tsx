import React, { useState } from 'react';
import { HeroSection } from '../../features/landing/HeroSection.tsx/HeroSection';


const LandingPage: React.FC = () => {
  return (
    <main className='overflow-hidden'>
      <HeroSection></HeroSection>
    </main>
  );
};

export default LandingPage;