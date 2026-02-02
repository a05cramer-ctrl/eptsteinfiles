import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 40, delay: number = 500) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeoutId: number;

    const startTyping = () => {
      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeNextChar();
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
