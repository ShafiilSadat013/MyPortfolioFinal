import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme-preference', next ? 'dark' : 'light');
  };

  return (
    <div className="portfolio-app">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onOpenHireModal={() => setIsHireModalOpen(true)} 
      />
      <main>
        <Hero onOpenHireModal={() => setIsHireModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer onOpenHireModal={() => setIsHireModalOpen(true)} />
    </div>
  );
}