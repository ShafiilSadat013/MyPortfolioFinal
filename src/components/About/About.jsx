import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag font-mono">02 // Background</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          
          <div className="about-story">
            <h3 className="about-subtitle">
              Computer Science Undergrad heavily focused on academics, tech and
              machines.
            </h3>
            <p>
              I am an engineering student currently tackling core CSE subjects in my <strong>3rd Year, 3rd Semester</strong>. 
              My passion spans from doing research on <strong>Human Computer Interaction</strong> to photography,tweaking electronics and video games.
            </p>

            <div className="curriculum-box">
              <span className="curriculum-head font-mono">CORE COURSEWORK:</span>
              <div className="curriculum-tags font-mono">
                <span>[Data Structures &amp; Algorithms]</span>
                <span>[Database Management Systems]</span>
                <span>[Object Oriented Programming]</span>
                <span>[Computer Networks]</span>
                <span>[Operating Systems]</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <span className="card-title font-mono">Degree</span>
              <h4>B.Sc. in Computer Science & Engineering</h4>
              <p>Undergraduate (Year 3, Semester 3)</p>
            </div>

            <div className="info-card">
              <span className="card-title font-mono">Core Focus</span>
              <h4>Research and Academics</h4>
              <p>HCI, UI/UX etc</p>
            </div>

            <div className="info-card">
              <span className="card-title font-mono">Based In</span>
              <h4>Sylhet, Bangladesh </h4>
              <p>Currently Not Available For Work</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}