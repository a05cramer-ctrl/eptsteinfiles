import { useState, useEffect } from 'react';
import './Navigation.css';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'database', label: 'DATABASE' },
  { id: 'tactics', label: 'TACTICS' },
  { id: 'protect', label: 'PROTECT' },
  { id: 'report', label: 'REPORT' },
];

const CONTRACT_ADDRESS = 'BLxt8pwxiNtbuANTnP6BUv7BGLtB39ih8o7mX37Fpump';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="main-nav">
      <div className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text glitch" data-text="epstein.tools">epstein.tools</span>
        <span className="logo-bracket">]</span>
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button 
          onClick={copyCA}
          className={`nav-ca ${copied ? 'copied' : ''}`}
          title="Click to copy"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span className="ca-label">COPIED!</span>
            </>
          ) : (
            <>
              <span className="ca-label">CA:</span>
              <span className="ca-address">{CONTRACT_ADDRESS.slice(0, 4)}...{CONTRACT_ADDRESS.slice(-4)}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </>
          )}
        </button>
        <a 
          href="https://x.com/EpsteinTools" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-social"
          aria-label="Follow us on X (Twitter)"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
