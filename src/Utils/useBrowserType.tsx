import { useEffect, useState } from 'react';

export type BrowserType = 'Mobile Safari' | 'Mobile Chrome' | 'Desktop' | 'Others';

export type BrowserTypeMap = {
  [key in BrowserType]: string
};

export const useBrowserType = (): BrowserType => {
  const [browserType, setBrowserType] = useState<BrowserType>('Others');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    
    if (/CriOS/i.test(userAgent) && /Mobile/i.test(userAgent)) {
      setBrowserType('Mobile Chrome');
    }
    else if (/Safari/i.test(userAgent) && /Mobile/i.test(userAgent)) {
      setBrowserType('Mobile Safari');
    } else if (!/Mobile/i.test(userAgent)) {
      setBrowserType('Desktop');
    }
  }, []);

  return browserType;
};

