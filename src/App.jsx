import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ExperienceBanner from './components/ExperienceBanner';
import About from './components/About';
import Contact from './components/Contact';

import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Hero />
        <ExperienceBanner />
        <About />
        <Services />
        <Philosophy />
        <Testimonials />
        <Contact />
        <AIAssistant />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
