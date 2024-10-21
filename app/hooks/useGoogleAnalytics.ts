// app/hooks/useGoogleAnalytics.ts
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useGoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevent running in SSR

    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-8DYQV5N47Q', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
