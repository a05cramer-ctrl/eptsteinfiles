import './Footer.css';

export function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">epstein.tools</span>
          <span className="logo-bracket">]</span>
        </div>
        <p className="footer-tagline">
          Exposing predatory patterns. Protecting the vulnerable. Empowering communities.
        </p>
        <div className="footer-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('database')}>Database</button>
          <button onClick={() => scrollToSection('tactics')}>Tactics</button>
          <button onClick={() => scrollToSection('protect')}>Protect</button>
          <button onClick={() => scrollToSection('report')}>Report</button>
        </div>
        <div className="footer-emergency">
          <p>🚨 <strong>Emergency?</strong> Contact local law enforcement immediately or call <strong>911</strong></p>
        </div>
        <p className="footer-copyright">© 2026 epstein.tools | Awareness • Prevention • Protection</p>
      </div>
    </footer>
  );
}
