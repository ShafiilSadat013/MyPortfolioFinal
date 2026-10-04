import React, { useState } from 'react';
import './Footer.css';

export default function Footer({ onOpenHireModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  // get actual mesage on email
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: '2b786a01-171d-4b41-9b7f-81d8dc55aa9a',
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'New Portfolio Message',
      message: formData.message
    })
  });

  const result = await response.json();

  if (result.success) {
    setSent(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
  } else {
    alert('Something went wrong. Please try again.');
  }
};

  return (
    <footer id="contact" className="site-footer">
      <div className="container">

        <div className="footer-grid">
          
          <div className="footer-left">
            <span className="section-tag font-mono">07 // Inquiries</span>
            <h2 className="footer-title"><span id='yellow'>Let&apos;s build something resilient.</span></h2>
            <p className="footer-intro">
              Looking for a dedicated research partner from CSE 3rd year or want to learn
              the core of CSE? Send a transmission or ping me directly.
            </p>

            <div className="footer-contact-list font-mono">
               <div>
                  <span className="label">EMAIL:</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sadatshafiil@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="val"
                  >
                    sadatshafiil@gmail.com
                  </a>
                </div>
              <div>
                <span className="label">LOCATION:</span>
                <span className="val">Sylhet, Bangladesh (GMT+6)</span>
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

          <div className="footer-form">
            <h3 className="form-title font-mono">// TRANSMIT HERE</h3>
            
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
                    placeholder="e.g. Bruce Wayne"
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
                    placeholder="wayne@mail.com"
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
            <a href="https://github.com/ShafiilSadat013" target="_blank" rel="noreferrer" className="social-title">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/shafiil-ahmed-sadat-042a7824b/" target="_blank" rel="noreferrer" className="social-title">
              LinkedIn ↗
            </a>
            <a href="https://codeforces.com/profile/BlackHawk_0007" target="_blank" rel="noreferrer" className="social-title">
              CodeForces ↗
            </a>
            <a href="https://www.instagram.com/ghum_paitase_onek/" target="_blank" rel="noreferrer" className="social-title">
              Instagram ↗
            </a>
          </div>

          <div className="cpr font-mono">
            <span>© {new Date().getFullYear()} Sadat. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}