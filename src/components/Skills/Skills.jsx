import React from 'react';
import './Skills.css';

const categories = [
  {
    name: "Languages & Core CSE",
    tag: "LANG",
    skills: ["C / C++", "Java", "Python", "JavaScript", "DSA", "OOP", "Algorithm Analysis", "Operating Systems"]
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
    skills: ["Git", "GitHub", "Linux (Bash)", "VS Code", "Vercel / Netlify", "Arduino IDE"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">

        <div className="section-header">
          <span className="font-mono">
            04 // Capabilities
          </span>
          <h2 className="section-title">
            <span id="yellow">Technical Skills</span>
          </h2>
        </div>
        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-card">

              <div className="skill-card-top">

                <span className="skill-cat-tag font-mono">
                  {cat.tag}
                </span>

                <span className="font-mono text-muted">
                  0{idx + 1}
                </span>

              </div>

              <h3 className="skill-cat-name">
                {cat.name}
              </h3>

              <div className="skill-names">

                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-name font-mono"
                  >
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