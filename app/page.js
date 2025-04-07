"use client";
import dynamic from 'next/dynamic'; // Import dynamic for client-side rendering

// Dynamically import the client-side components
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: true });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });



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