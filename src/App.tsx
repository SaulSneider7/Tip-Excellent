
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Services from './components/Services';
import Consulting from './components/Consulting';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBanner />
      <About />
      <Services />
      <Consulting />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
