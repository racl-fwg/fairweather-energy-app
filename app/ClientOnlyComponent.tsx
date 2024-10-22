// app/components/ClientOnlyComponent.tsx
"use client";

import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import Script from 'next/script';

export default function ClientOnlyComponent() {
  useGoogleAnalytics();

  return (
    <>
      {/* Load GA Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8DYQV5N47Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8DYQV5N47Q');
        `}
      </Script>
    </>
  );
}
