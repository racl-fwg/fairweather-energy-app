// app/hooks/useGoogleAnalytics.ts
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Replaces useRouter from next/router

const GA_TRACKING_ID = 'G-8DYQV5N47Q'; // Replace with your GA tracking ID

export const useGoogleAnalytics = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    const loadGAScript = (): void => {
      // Load Google Analytics Script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize GA4
      window.dataLayer = window.dataLayer || [];
      
      const gtag = (...args: [string, ...unknown[]]): void => {
        window.dataLayer!.push(args); // Ensuring dataLayer is initialized and can accept arguments
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

    // Fire a pageview event on route change
    handleRouteChange(pathname);
  }, [pathname]);
};
