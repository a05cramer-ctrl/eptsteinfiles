import { useState } from 'react';
import { WarningBanner } from './components/WarningBanner/WarningBanner';
import { Navigation } from './components/Navigation/Navigation';
import { HeroSection } from './components/HeroSection/HeroSection';
import { DatabaseSection } from './components/DatabaseSection/DatabaseSection';
import { TacticsSection } from './components/TacticsSection/TacticsSection';
import { ProtectSection } from './components/ProtectSection/ProtectSection';
import { ReportSection } from './components/ReportSection/ReportSection';
import { Footer } from './components/Footer/Footer';
import { Popup } from './components/Popup/Popup';
import { EducationalPopup } from './components/EducationalPopup/EducationalPopup';

function App() {
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <WarningBanner />
      <Navigation />
      <main>
        <HeroSection />
        <DatabaseSection />
        <TacticsSection />
        <ProtectSection />
        <ReportSection onShowPopup={showPopup} />
      </main>
      <Footer />
      <Popup isOpen={isPopupOpen} message={popupMessage} onClose={closePopup} />
      <EducationalPopup />
    </>
  );
}

export default App;
