import { useState, useEffect, useCallback } from 'react';
import { EDUCATIONAL_FACTS } from '../../data/constants';
import './EducationalPopup.css';

export function EducationalPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState('');

  const showRandomFact = useCallback(() => {
    const randomFact = EDUCATIONAL_FACTS[Math.floor(Math.random() * EDUCATIONAL_FACTS.length)];
    setCurrentFact(randomFact);
    setIsVisible(true);

    // Auto-hide after 8 seconds
    setTimeout(() => setIsVisible(false), 8000);
  }, []);

  useEffect(() => {
    // Show first popup after 10 seconds
    const initialTimeout = setTimeout(showRandomFact, 10000);

    // Show popup every 30 seconds
    const interval = setInterval(showRandomFact, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showRandomFact]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className={`edu-popup ${isVisible ? 'active' : ''}`}
      onClick={handleDismiss}
    >
      <div className="edu-popup-content">
        <span className="edu-icon">💡</span>
        <p className="edu-text">{currentFact}</p>
      </div>
    </div>
  );
}
