
import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './Github.css';

function Github() {
  return (
    <section id="github" className="github-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag font-mono">
            05 // GitHub Activity
          </span>

          <h2>GitHub Contributions</h2>

          <p className="github-description">
            A snapshot of my coding activity and contributions.
          </p>
        </div>

        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="ShafiilSadat013"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>

        <div className="github-link-wrapper">
          <a
            href="https://github.com/ShafiilSadat013"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View GitHub Profile →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Github;
