import { useRotatingText } from '../../hooks/useRotatingText';
import { WARNING_MESSAGES } from '../../data/constants';
import './WarningBanner.css';

export function WarningBanner() {
  const { currentText, isVisible } = useRotatingText(WARNING_MESSAGES, 5000);

  return (
    <div className="warning-banner">
      <span className="warning-icon">⚠</span>
      <span className={`warning-text ${isVisible ? 'visible' : ''}`}>
        {currentText}
      </span>
      <span className="warning-icon">⚠</span>
    </div>
  );
}
