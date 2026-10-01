import React, { useState } from 'react';
import './Hero.css';

export default function Hero({ onOpenHireModal}) {
  const [downloadMsg, setDownloadMsg] = useState(false);

  const triggerCV = () => 
  {
    setDownloadMsg(true);
    setTimeout(() => setDownloadMsg(false), 3000);
  };

  return (
    <section id="intro" className="hero-section">
      <div className="container hero-container">
        
        {/* <div className="hero-tag font-mono">Year 3, Semester 3 Undergrad</div> */}

        <h1 className="hero-title">
          Hi, I am <span className="uline">Sadat</span>
        </h1>

        <p className="hero-description">
          Computer Science & Engineering undergraduate focusing on research, 
          data structures & algorithms, and Human Computer Interaction
        </p>

        {/* Action Buttons: Solid black text ensured in Light Mode */}
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={onOpenHireModal}>
            Hire Me
          </button>
          <a href="#projects" className="btn btn-outline">
            Explore Projects
          </a>
          
          {/* cv button */}
          <button className="btn btn-outline" onClick={triggerCV}>
            {downloadMsg ? 'CV Downloaded ✓' : 'Download CV'}
          </button>
        </div>

        <div className="hero-info">
          <div className="info-box">
            <span className="info-num">3rd</span>
            <span className="info-text font-mono">Year (Semester 3)</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-box">
            <span className="info-num">3.95</span>
            <span className="info-text font-mono">Academic CGPA</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-box">
            <span className="info-num">3</span>
            <span className="info-text font-mono">PROJECTS Done</span>
          </div>
          <div className="info-divider"></div>
          {/* <div className="info-box">
            <span className="info-num">100%</span>
            <span className="info-text font-mono">B&W Architecture</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}