import { TACTICS_DATA, type TacticData } from '../../data/constants';
import './TacticsSection.css';

export function TacticsSection() {
  return (
    <section id="tactics" className="tactics-section">
      <div className="section-header">
        <span className="section-tag">[03]</span>
        <h2 className="section-title glitch" data-text="GROOMING TACTICS LIBRARY">
          GROOMING TACTICS LIBRARY
        </h2>
        <p className="section-desc">
          Understanding manipulation techniques is the first step to prevention.
        </p>
      </div>

      <div className="tactics-grid">
        {TACTICS_DATA.map((tactic, index) => (
          <TacticCard key={tactic.id} tactic={tactic} index={index} />
        ))}
      </div>
    </section>
  );
}

function TacticCard({ tactic, index }: { tactic: TacticData; index: number }) {
  return (
    <div 
      className="tactic-card" 
      data-tactic={tactic.id}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-front">
        <div className="card-icon">{tactic.icon}</div>
        <h3 className="card-title">{tactic.title}</h3>
        <p className="card-preview">{tactic.preview}</p>
        <span className="card-reveal-hint">[ HOVER FOR DETAILS ]</span>
      </div>
      <div className="card-back">
        <h4>How It Works:</h4>
        <ul>
          {tactic.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <span className="card-warning">RECOGNIZE & REPORT</span>
      </div>
    </div>
  );
}
