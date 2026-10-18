import { useEffect, useRef, useState } from 'react';
import './IntroLoader.css';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState('welcome');
  const [progress, setProgress] = useState(0);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const finishIntro = () => {
    timers.current.forEach(clearTimeout);
    setPhase('exiting');
    timers.current.push(setTimeout(onComplete, 650));
  };

  const startLoading = () => {
    if (phase !== 'welcome') return;
    setPhase('loading');
    let current = 0;

    const tick = () => 
      {
      current = Math.min(100, current + (current < 70 ? 2 : 1));
      setProgress(current);

      if (current >= 100) {
        timers.current.push(setTimeout(() => setPhase('exiting'), 250));
        timers.current.push(setTimeout(onComplete, 900));
        return;
      }

      timers.current.push(setTimeout(tick, current < 70 ? 35 : 48));
    };

    timers.current.push(setTimeout(tick, 120));
  };

  const status = progress < 25
    ? 'INITIALIZING INTERFACE...'
    : progress < 55
      ? 'LOADING CREATIVITY...'
      : progress < 85
        ? 'PREPARING PORTFOLIO...'
        : progress < 100
          ? 'ALMOST THERE...'
          : 'SYSTEM READY.';

  return (
    <div
      className={`intro-loader ${phase === 'exiting' ? 'intro-loader--exit' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio intro"
      aria-hidden={phase === 'exiting' ? 'true' : 'false'}
    >
      <div className="intro-loader__content">
        <div className="intro-loader__topline">
          <span className="intro-loader__pixel" aria-hidden="true">■</span>
          <span>SADAT's Portfolio.EXE</span>
          <span className="intro-loader__version">V 1.0</span>
        </div>

        <div className="intro-loader__main">
          <h1 className="intro-loader__title">
            {phase === 'welcome' ? <>READY TO<br /><span>DIVE?</span></> : <>BOOTING<br /><span>SYSTEM...</span></>}
          </h1>
          <p className="intro-loader__description">
            {phase === 'welcome'
              ? 'A little corner of the internet built by Sadat.'
              : status}
          </p>

          <div className="intro-loader__progress-wrap" aria-live="polite">
            <div className="intro-loader__progress-label">
              <span>{phase === 'welcome' ? 'SYSTEM STANDBY' : status}</span>
              <span>{String(progress).padStart(3, '0')}%</span>
            </div>
            <div
              className="intro-loader__progress-track"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress}
              aria-label="Portfolio intro progress"
            >
              <div className="intro-loader__progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {phase === 'welcome' ? (
            <button className="intro-loader__start" onClick={startLoading}>
              <span aria-hidden="true">▶</span> CLICK HERE TO LOAD
            </button>
          ) : (
            <div className="intro-loader__loading-note">
              <span className="intro-loader__blink" aria-hidden="true">▮</span>
              PLEASE WAIT !!!
            </div>
          )}
        </div>

        <div className="intro-loader__footer">
          <button className="intro-loader__skip" onClick={finishIntro}>SKIP INTRO ↗</button>
          <span>PRESS START TO BEGIN</span>
        </div>
      </div>
    </div>
  );
}
