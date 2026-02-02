import { SAFETY_TIPS, WARNING_STEPS, RESOURCES } from '../../data/constants';
import './ProtectSection.css';

export function ProtectSection() {
  return (
    <section id="protect" className="protect-section">
      <div className="section-header">
        <span className="section-tag">[04]</span>
        <h2 className="section-title glitch" data-text="HOW TO PROTECT YOURSELF">
          HOW TO PROTECT YOURSELF
        </h2>
        <p className="section-desc">Knowledge is your first line of defense.</p>
      </div>

      <div className="protect-grid">
        <div className="protect-column">
          <div className="protect-card tips-card">
            <div className="protect-card-header">
              <span className="protect-icon">🛡</span>
              <h3>SAFETY TIPS</h3>
            </div>
            <ul className="protect-list">
              {SAFETY_TIPS.map((tip) => (
                <li key={tip.number}>
                  <span className="list-number">{tip.number}</span>
                  <div className="list-content">
                    <strong>{tip.title}</strong>
                    <p>{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="protect-column">
          <div className="protect-card warning-card">
            <div className="protect-card-header">
              <span className="protect-icon">🚨</span>
              <h3>IF YOU SUSPECT GROOMING</h3>
            </div>
            <div className="warning-steps">
              {WARNING_STEPS.map((step) => (
                <div key={step.number} className="warning-step">
                  <span className="step-icon">{step.number}</span>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="protect-card resources-card">
            <div className="protect-card-header">
              <span className="protect-icon">📞</span>
              <h3>OFFICIAL RESOURCES & HOTLINES</h3>
            </div>
            <div className="resources-list">
              {RESOURCES.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <span className="resource-name">{resource.name}</span>
                  <span className="resource-action">↗</span>
                </a>
              ))}
            </div>
            <p className="resources-note">These organizations can help. You are not alone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
