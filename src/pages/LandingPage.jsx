import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Benefits from '@/components/landing/Benefits';
import About from '@/components/landing/About';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>CMIS - Smart Car Incident Management for Modern Fleets</title>
        <meta name="description" content="Professional car management information system for dealerships and fleet managers. Track incidents, manage inventory, and optimize operations with our comprehensive platform." />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;