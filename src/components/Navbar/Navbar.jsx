import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ isDarkMode, toggleTheme, onOpenHireModal, onOpenCodeExplorer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#intro" className="nav-brand font-mono">
            SADAT
          </a>

          <div className="nav-controls">
            {/* dark mode button here */}
            <button 
              className="theme-btn font-mono" 
              onClick={toggleTheme}
              title="Toggle Black / White Mode"
            >
              {isDarkMode ? '☼ LIGHT' : '☾ DARK'}
            </button>  

            {/* for hamburger icon */}
            <button className={`hamburger-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hBar bar1"></span>
              <span className="hBar bar2"></span>
              <span className="hBar bar3"></span>
            </button>
          </div>
        </div>
      </header>


      {/* hamburger icon open close here */}
      <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={closeMenu} />
        <div className={`hamburger-drawer ${isOpen ? 'open' : ''}`}>
          <div className="drawer-header">
            <span className="font-mono drawer-title">INDEX</span>
            <button className="drawer-close" onClick={closeMenu}>X</button>
          </div>
        
        {/* nav infos inside hamburger */}
        <nav className="drawer-nav">
          <a href="#intro" onClick={closeMenu}><span className="nav-num font-mono">01</span> Intro</a>
          <a href="#about" onClick={closeMenu}><span className="nav-num font-mono">02</span> About</a>
          <a href="#education" onClick={closeMenu}><span className="nav-num font-mono">03</span> Education</a>
          <a href="#skills" onClick={closeMenu}><span className="nav-num font-mono">04</span> Skills</a>
          <a href="#github" onClick={closeMenu}><span className="nav-num font-mono">05</span> Github Contribution</a>
          <a href="#projects" onClick={closeMenu}><span className="nav-num font-mono">06</span> Projects</a>
          <a href="#contact" onClick={closeMenu}><span className="nav-num font-mono">07</span> Contact</a>
        </nav>

        {/* <div className="drawer-footer">
          <button className="drawer-hire-btn" onClick={() => { closeMenu(); onOpenHireModal(); }}>
            Hire Me &rarr;
          </button>
          <div className="drawer-sub font-mono">
            <span>CSE Undergrad '26</span>
            <span>Sylhet, BD</span>
          </div>
        </div> */}
      </div>
    </>
  );
}