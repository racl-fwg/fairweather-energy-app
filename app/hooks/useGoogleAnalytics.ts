// app/hooks/useGoogleAnalytics.ts
"use client"; // Ensure it's client-side only

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_TRACKING_ID = 'G-8DYQV5N47Q';

export const useGoogleAnalytics = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window === 'undefined') return;

    const loadGAScript = (): void => {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: [string, ...unknown[]]): void => {
        window.dataLayer!.push(args);
      };

      window.gtag = window.gtag || gtag;

      window.gtag('js', new Date());
      window.gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
      });
    };

    loadGAScript();

    const handleRouteChange = (url: string): void => {
      if (window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname);
  }, [pathname]);
};
