
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Github from './components/Github/Github';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import IntroLoader from './components/IntroLoader';
import './App.css';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <div
        className={`portfolio-app ${
          hasEntered
            ? 'portfolio-app--intro-visible'
            : 'portfolio-app--intro-hidden'
        }`}
      >
        <Navbar
          onOpenHireModal={() => setIsHireModalOpen(true)}
        />

        <main>
          <Hero onOpenHireModal={() => setIsHireModalOpen(true)} />
          <About />
          <Education />
          <Skills />
          <Github />
          <Projects />
        </main>

        <Footer onOpenHireModal={() => setIsHireModalOpen(true)} />
      </div>

      {!hasEntered && (
        <IntroLoader onComplete={() => setHasEntered(true)} />
      )}
    </>
  );
}
