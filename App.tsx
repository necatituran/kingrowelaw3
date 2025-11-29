import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Awards from './components/Awards';
import Blog from './components/Blog';
import { PracticeAreas } from './components/PracticeAreas';
import ServiceAreas from './components/ServiceAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyChat } from './components/StickyChat';

function App() {
  return (
    <div className="min-h-screen bg-cream font-lora text-charcoal selection:bg-ncred selection:text-white overflow-x-hidden">
      {/* Design 4 Sections */}
      <Header />

      <main>
        <Hero />
        <About />
        <Stats />

        {/* Design 3 Sections */}
        <PracticeAreas />
        <ServiceAreas />
        <Awards />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <Team />
        <Contact />
      </main>

      <Footer />
      <StickyChat />
    </div>
  );
}

export default App;
