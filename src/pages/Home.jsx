import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import EducationSection from '../components/portfolio/EducationSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import DownloadCVSection from '../components/portfolio/DownloadCVSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

const PORTRAIT_IMAGE = 'port/Foto Web1.jpeg';

const UX_IMAGES = [
  '/port/Savey Portfolio.png',
  '/port/Gokas App.png',
  '/port/Booking com.png',
];

const GRAPHIC_IMAGES = [
  'port/Clicky Branding Port.jpeg',
  '/port/Aura Port.jpeg',
  '/port/Traveloka Port.jpeg',
  '/port/Nuoir Brand.jpeg',
];

export default function Home() {
  return (
    <div className="font-inter bg-white text-gray-900 antialiased">
      <Navbar />
      <HeroSection portraitImage={PORTRAIT_IMAGE} />
      <AboutSection portraitImage={PORTRAIT_IMAGE} />
      <EducationSection />
      <SkillsSection />
      <PortfolioSection uxImages={UX_IMAGES} graphicImages={GRAPHIC_IMAGES} />
      <DownloadCVSection />
      <ContactSection />
      <Footer />
    </div>
  );
}