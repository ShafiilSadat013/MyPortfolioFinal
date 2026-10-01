import React, { useState } from 'react';
import './Footer.css';

export default function Footer({ onOpenHireModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">

        <div className="footer-grid">
          
          <div className="footer-left">
            <span className="section-tag font-mono">05 // Inquiries</span>
            <h2 className="footer-title">Let&apos;s build something resilient.</h2>
            <p className="footer-intro">
              Looking for a dedicated 3rd year CSE intern, or need a full-stack web application 
              delivered cleanly and promptly? Send a transmission or ping me directly.
            </p>

            <div className="footer-contact-list font-mono">
              <div>
                <span className="label">EMAIL:</span>
                <a href="mailto:sadat.cse@university.edu" className="val">sadat.cse@university.edu</a>
              </div>
              <div>
                <span className="label">LOCATION:</span>
                <span className="val">Sylhet, Bangladesh (UTC+6)</span>
              </div>
              <div>
                <span className="label">ACADEMIC:</span>
                <span className="val">CSE 3rd Year, 3rd Sem</span>
              </div>
            </div>

            <button className="footer-hire-btn" onClick={onOpenHireModal}>
              Hire Me Directly &rarr;
            </button>
          </div>

          <div className="footer-form-panel">
            <h3 className="form-legend font-mono">// TRANSMISSION FORM</h3>
            
            {sent ? (
              <div className="form-success font-mono">
                ✓ Message dispatched to Sadat! Expect a response within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-wrapper">
                <div className="field">
                  <label htmlFor="name" className="font-mono">Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Michael Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email" className="font-mono">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="chen@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="field">
                  <label htmlFor="subject" className="font-mono">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Internship / Full Stack Contract"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="field">
                  <label htmlFor="message" className="font-mono">Message *</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Briefly describe your team, project, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="submit-action font-mono">
                  Send Message &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="footer-base">
          <div className="social-links font-mono">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-badge">
              GitHub ↗
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-badge">
              LinkedIn ↗
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="social-badge">
              LeetCode ↗
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-badge">
              X (Twitter) ↗
            </a>
          </div>

          <div className="copyright font-mono">
            <span>© {new Date().getFullYear()} Sadat. All rights reserved.</span>
            <span className="text-muted">React + Vite + Raw CSS • Modular Black &amp; White</span>
          </div>
        </div>

      </div>
    </footer>
  );
}