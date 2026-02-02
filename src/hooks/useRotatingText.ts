import { useState, useEffect } from 'react';

export function useRotatingText(messages: string[], interval: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const rotate = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 300);
    };

    const intervalId = setInterval(rotate, interval);
    return () => clearInterval(intervalId);
  }, [messages.length, interval]);

  return { currentText: messages[currentIndex], isVisible };
}
