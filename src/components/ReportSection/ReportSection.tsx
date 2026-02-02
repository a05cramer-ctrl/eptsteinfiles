import { useState, type FormEvent } from 'react';
import './ReportSection.css';

interface ReportSectionProps {
  onShowPopup: (message: string) => void;
}

export function ReportSection({ onShowPopup }: ReportSectionProps) {
  const [formData, setFormData] = useState({
    reportType: '',
    platform: '',
    suspectAlias: '',
    description: '',
    evidence: [] as string[],
    contactEmail: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      onShowPopup('Please acknowledge the terms to submit your report.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    onShowPopup(
      `Report submitted successfully. Reference ID: RPT-${Date.now().toString(36).toUpperCase()}. Your report has been logged and will be forwarded to appropriate authorities. If you provided contact information, you may be contacted for follow-up. Thank you for helping protect the community.`
    );

    // Reset form
    setFormData({
      reportType: '',
      platform: '',
      suspectAlias: '',
      description: '',
      evidence: [],
      contactEmail: '',
      consent: false
    });
    setIsSubmitting(false);
  };

  const handleEvidenceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      evidence: prev.evidence.includes(value)
        ? prev.evidence.filter(e => e !== value)
        : [...prev.evidence, value]
    }));
  };

  return (
    <section id="report" className="report-section">
      <div className="section-header">
        <span className="section-tag">[05]</span>
        <h2 className="section-title glitch" data-text="REPORT SUSPICIOUS BEHAVIOR">
          REPORT SUSPICIOUS BEHAVIOR
        </h2>
        <p className="section-desc">Your report could protect someone from harm.</p>
      </div>

      <div className="report-container">
        <div className="report-info-box">
          <div className="info-header">
            <span className="info-icon">🛡</span>
            <h3>SECURE REPORTING</h3>
          </div>
          <div className="info-content">
            <p>All reports are:</p>
            <ul>
              <li>Encrypted and securely transmitted</li>
              <li>Reviewed by trained moderators</li>
              <li>Forwarded to appropriate authorities when warranted</li>
              <li>Kept confidential — your identity is protected</li>
            </ul>
            <p className="info-warning">
              <strong>Important:</strong> Never attempt to confront suspected predators yourself. 
              Let trained professionals handle investigations.
            </p>
          </div>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reportType">Type of Concern *</label>
            <select
              id="reportType"
              className="form-select"
              value={formData.reportType}
              onChange={(e) => setFormData(prev => ({ ...prev, reportType: e.target.value }))}
              required
            >
              <option value="">Select concern type...</option>
              <option value="grooming">Suspected Grooming Behavior</option>
              <option value="solicitation">Inappropriate Solicitation</option>
              <option value="threats">Threats or Blackmail</option>
              <option value="content">Inappropriate Content Sharing</option>
              <option value="impersonation">Age/Identity Deception</option>
              <option value="other">Other Concern</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="platform">Platform *</label>
              <select
                id="platform"
                className="form-select"
                value={formData.platform}
                onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                required
              >
                <option value="">Select platform...</option>
                <option value="discord">Discord</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="snapchat">Snapchat</option>
                <option value="roblox">Roblox</option>
                <option value="fortnite">Fortnite</option>
                <option value="minecraft">Minecraft</option>
                <option value="twitter">Twitter/X</option>
                <option value="facebook">Facebook</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="telegram">Telegram</option>
                <option value="reddit">Reddit</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="suspectAlias">Suspect Username/Alias</label>
              <input
                type="text"
                id="suspectAlias"
                className="form-input"
                placeholder="Enter their username..."
                value={formData.suspectAlias}
                onChange={(e) => setFormData(prev => ({ ...prev, suspectAlias: e.target.value }))}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of Behavior *</label>
            <textarea
              id="description"
              className="form-textarea"
              rows={6}
              placeholder="Describe what you observed in detail. Include dates, times, and specific behaviors if possible..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Evidence Available</label>
            <div className="checkbox-group">
              {[
                { value: 'screenshots', label: 'Screenshots' },
                { value: 'chatlogs', label: 'Chat Logs' },
                { value: 'usernames', label: 'Profile Links' },
                { value: 'recordings', label: 'Voice/Video Recordings' },
                { value: 'witnesses', label: 'Witness Accounts' },
                { value: 'other', label: 'Other Documentation' }
              ].map(item => (
                <label key={item.value} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.evidence.includes(item.value)}
                    onChange={() => handleEvidenceChange(item.value)}
                  />
                  <span className="checkbox-custom"></span>
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email (Optional)</label>
            <input
              type="email"
              id="contactEmail"
              className="form-input"
              placeholder="your@email.com — for follow-up if needed"
              value={formData.contactEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
            />
            <span className="form-hint">Your email will only be used if authorities need to follow up.</span>
          </div>

          <div className="form-group">
            <label className="checkbox-label consent-label">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                required
              />
              <span className="checkbox-custom"></span>
              I confirm that this report is made in good faith and the information provided is accurate to the best of my knowledge. I understand that false reports may have legal consequences.
            </label>
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary btn-submit ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            <span className="btn-text">
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REPORT'}
            </span>
            {!isSubmitting && <span className="btn-icon">→</span>}
          </button>
        </form>
      </div>
    </section>
  );
}
