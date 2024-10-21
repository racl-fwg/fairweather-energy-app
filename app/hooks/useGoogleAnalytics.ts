// app/hooks/useGoogleAnalytics.ts
"use client"; // This ensures it's client-side only
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useGoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    // Prevent this effect from running during server-side rendering
    if (typeof window === 'undefined') return;

    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-8DYQV5N47Q', {
          page_path: url,
        });
      }
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]); // Only rerun the effect if router.events changes
};
