import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Hero />
        <Services />
        <Philosophy />
        <Testimonials />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
