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

const PORTRAIT_IMAGE = 'https://media.base44.com/images/public/69e0ea0196d06c0fe2814fe2/ba85e363e_generated_image.png';

const UX_IMAGES = [
  '/port/Savey Portfolio.png',
  '/port/Gokas App.png',
  '/port/Booking com.png',
];

const GRAPHIC_IMAGES = [
  'https://media.base44.com/images/public/69e0ea0196d06c0fe2814fe2/04fc25e47_generated_image.png',
  'https://media.base44.com/images/public/69e0ea0196d06c0fe2814fe2/c2e67c9f9_generated_image.png',
  'https://media.base44.com/images/public/69e0ea0196d06c0fe2814fe2/be3a3c915_generated_image.png',
  'https://media.base44.com/images/public/69e0ea0196d06c0fe2814fe2/602863eb4_generated_image.png',
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