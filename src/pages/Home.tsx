import React from 'react';
import Hero from '../components/Hero';
import VeredaSection from '../components/VeredaSection';
import RutasSection from '../components/RutasSection';
import ActividadesSection from '../components/ActividadesSection';
import TestimoniosSection from '../components/TestimoniosSection';
import ContactoSection from '../components/ContactoSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VeredaSection />
      <RutasSection />
      <ActividadesSection />
      <TestimoniosSection />
      <ContactoSection />
    </div>
  );
};

export default Home;
