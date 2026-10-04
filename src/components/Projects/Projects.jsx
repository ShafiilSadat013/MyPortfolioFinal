import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "PacMan clone using java",
    desc: "A clone of famous PacMan game using java. Made this understand the concepts of OOP",
    tags: ["Java", "OOP", "Java Swing", "Retro Game"],
    github: "https://github.com/ShafiilSadat013/PacMan-Game-using-Java-OOP2-3-",
    demo: "https://github.com/ShafiilSadat013/PacMan-Game-using-Java-OOP2-3-",
    tag: "Core CSE"
  },
  {
    title: "LitCart, A bookstore",
    desc: "A full-stack bookstore web app made for Database Management Systems Course",
    tags: ["React", "Node.js", "MySQL","Group Project"],
    github: "https://github.com/ShafiilSadat013/Bookstore",
    demo: "https://youtu.be/FlvUBG0JKmk?si=ovhxdTlUdKciqYnY",
    tag: "Full-Stack"
  },
  {
    title: "Arduino Based Surveillance Car",
    desc: "Made using ESP-32 and ESP-32 CAM, to understand how a system works in micro level",
    tags: ["C Language", "Arduino IDE", "ELECTRONICS", "MICROPROCESSOR"],
    github: "https://github.com/ShafiilSadat013/MP-I-PROJECT2",
    demo: "https://github.com",
    tag: "Systems"
  },
  {
    title: "Some Mini Python Projects",
    desc: "These mini projects are from the practice part of my python learning",
    tags: ["Python","Mini Projects", "OOP"],
    github: "https://github.com/ShafiilSadat013/PYTHONprojects",
    demo: "https://github.com",
    tag: "Python"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag font-mono">06 // Portfolio</span>
          <h2 className="section-title"><span id='yellow'>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <article key={idx} className="project-card">
              <div className="project-top font-mono">
                <span>0{idx + 1}</span>
                <span className="project-cat">{proj.tag}</span>
              </div>

              <h3 className="project-name">{proj.title}</h3>
              <p className="project-about">{proj.desc}</p>

              <div className="project-tags font-mono">
                {proj.tags.map((t, tIdx) => (
                  <span key={tIdx} className="tag-design">{t}</span>
                ))}
              </div>

              <div className="proj-action">
                <a href={proj.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-border">
                  Source Code ↗
                </a>
                <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-fill">
                  Live Preview &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}