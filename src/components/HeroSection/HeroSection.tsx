import { useTypewriter } from '../../hooks/useTypewriter';
import { HERO_TEXT } from '../../data/constants';
import './HeroSection.css';

export function HeroSection() {
  const { displayText } = useTypewriter(HERO_TEXT, 40, 500);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="hero-content">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">awareness_protocol.exe</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">Expose the Patterns.</span>
          <span className="title-line accent">Protect the Vulnerable.</span>
        </h1>
        <p className="hero-subtitle">
          {displayText}
          <span className="cursor-blink">|</span>
        </p>
        <div className="hero-disclaimer">
          <span className="disclaimer-icon">🛡</span>
          <p>
            This platform aggregates <strong>reported behavioral patterns</strong> to help 
            communities identify and protect against predatory behavior. All reports are 
            forwarded to <strong>appropriate authorities</strong>. Together, we can protect the vulnerable.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#database" className="btn btn-primary">
            <span className="btn-text">ACCESS DATABASE</span>
            <span className="btn-icon">→</span>
          </a>
          <a href="#report" className="btn btn-secondary">
            <span className="btn-text">SUBMIT REPORT</span>
          </a>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}
