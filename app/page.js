"use client";
import dynamic from 'next/dynamic'; // Import dynamic for client-side rendering
import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";







// Dynamically import the client-side components



export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
};