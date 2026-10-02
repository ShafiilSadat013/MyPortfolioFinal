import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-padding edu-sec">
      <div className="container">
        <div className="section-header">
          <span className="section-tag font-mono">03 // Academic Trajectory</span>
          <h2 className="section-title"><span id='yellow'>Education</span></h2>
        </div>

        <div className="edu-time font-mono">
          
          {/* MU */}
          <div className="edu-card running">
            <div>
              <div className="edu-level">B.Sc. in CSE</div>
              <div className="edu-period">2024 – Present</div>
            </div>
            <div>
              <h3 className="edu-inst">Metropolitan University</h3>
              <div className="edu-degree">Bachelor of Science in Computer Science and Engineering</div>
              <div className="edu-term">Current Status: 3rd Year, 3rd Semester Undergrad (Active)</div>
            </div>
            <div>
              <span className="edu-stat highlight">RUNNING</span>
            </div>
          </div>

          {/* NSTU */}
          <div className="edu-card">
            <div>
              <div className="edu-level">B.Sc. in ICE</div>
              <div className="edu-period">2022-2023</div>
            </div>
            <div>
              <h3 className="edu-inst">Noakhali Science and Technology University (NSTU)</h3>
              <div className="edu-degree">Information and Communication Engineering (ICE)</div>
              <div className="edu-note">Dropped Out due to health issues</div>
            </div>
            <div>
              <span className="edu-stat discontinued">DROP OUT</span>
            </div>
          </div>

          {/* HSC */}
          <div className="edu-card">
            <div>
              <div className="edu-level">HSC</div>
              <div className="edu-period">Higher Secondary Certificate</div>
            </div>
            <div>
              <h3 className="edu-inst">MC College, Sylhet</h3>
              <div className="edu-degree">Science Stream</div>
              <div className="edu-note">Result: GPA 5.00 </div>
            </div>
            <div>
              <span className="edu-stat two">GPA 5.00</span>
            </div>
          </div>

          {/* 4. SSC */}
          <div className="edu-card">
            <div>
              <div className="edu-level">SSC</div>
              <div className="edu-period">Secondary School Certificate</div>
            </div>
            <div>
              <h3 className="edu-inst">Sylhet Govt. Pilot High School</h3>
              <div className="edu-degree">Science Stream</div>
              <div className="edu-note">Result: GPA 5.00 </div>
            </div>
            <div>
              <span className="edu-stat two">GPA 5.00</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}