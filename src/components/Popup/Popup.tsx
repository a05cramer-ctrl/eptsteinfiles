import { useEffect } from 'react';
import './Popup.css';

interface PopupProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export function Popup({ isOpen, message, onClose }: PopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <span className="popup-icon">ℹ</span>
          <h3>INFORMATION</h3>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>
        <p className="popup-text">{message}</p>
        <button className="btn btn-primary popup-btn" onClick={onClose}>
          UNDERSTOOD
        </button>
      </div>
    </div>
  );
}
