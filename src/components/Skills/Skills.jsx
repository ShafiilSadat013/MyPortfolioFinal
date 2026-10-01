import React, { useState } from 'react';
import './Skills.css';

const categories = [
  {
    name: "Languages & Core CSE",
    tag: "LANG",
    skills: ["C / C++", "Java", "Python", "JavaScript", "DSA", "OOP", "Algorithm Analysis"]
  },
  {
    name: "Frontend Development",
    tag: "UI",
    skills: ["React.js", "Vite", "Raw CSS3", "HTML5", "Responsive UI"]
  },
  {
    name: "Backend & Databases",
    tag: "SERVER",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    name: "Developer Tools",
    tag: "TOOLS",
    skills: ["Git", "GitHub", "Linux (Bash)", "VS Code", "Vercel / Netlify","Arduino IDE"]
  }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = activeFilter === "ALL"
    ? categories
    : categories.filter(c => c.name.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag font-mono">03 // Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* <div className="filter-row">
          {["ALL", "Languages", "Frontend", "Backend", "Tools"].map((tab) => (
            <button
              key={tab}
              className={`filter-tab font-mono ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div> */}

        <div className="skills-grid">
          {filtered.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-cat-tag font-mono">{cat.tag}</span>
                <span className="font-mono text-muted">0{idx + 1}</span>
              </div>
              <h3 className="skill-cat-name">{cat.name}</h3>
              <div className="skill-names">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-name font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}