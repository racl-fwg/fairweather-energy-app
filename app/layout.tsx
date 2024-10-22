// app/layout.tsx
"use client";
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import Script from 'next/script';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the GA hook to initialize and track page views
  useGoogleAnalytics();

  return (
    <>
      <head>
        {/* GA and ConsentManager scripts are placed here */}
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

        {/* ConsentManager Script */}
        <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/535a3bcdd1cf1.js"
          strategy="afterInteractive"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-ab="1"
          data-cmp-codesrc="16"
        />
      </head>
      {children}
    </>
  );
}
