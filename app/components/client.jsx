'use client';

import HeroSection from './homepage/hero-section';
import AboutSection from './homepage/about';
import Experience from './homepage/experience';
import Skills from './homepage/skills';
import Projects from './homepage/projects';
import Education from './homepage/education';
import ContactSection from './homepage/contact';

const Client = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
};

export default Client;
