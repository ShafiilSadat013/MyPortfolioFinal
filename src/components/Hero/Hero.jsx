import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {

  return (
    <section id="intro" className="hero-section">
      <div className="container hero-container">
        
        {/* <div className="hero-tag font-mono">Year 3, Semester 3 Undergrad</div> */}

        <h1 className="hero-title">
          Hi, I am <span className="uline">Sadat</span>
        </h1>

        <p className="hero-desc">
          Third Year Computer Science & Engineering undergraduate focusing on research and
          Academics
        </p>

        <div className="hero-buttons">
          <button className="btn btn-prim">
            Hire Me
          </button>
          <a href="#projects" className="btn btn-two">
            Explore Projects
          </a>
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
            <span className="info-num">4</span>
            <span className="info-text font-mono">PROJECTS Done</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-box">
            <span className="info-num">200+</span>
            <span className="info-text font-mono">Books Read</span>
          </div> 
        </div>

      </div>
    </section>
  );
}