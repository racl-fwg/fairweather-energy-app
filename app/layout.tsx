// app/layout.tsx
import './globals.css';
import { QuoteProvider } from './context/QuouteContext';
import Script from 'next/script';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Fairweather Energy',
  description: 'Empowering the Future with Sustainable Energy Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DYQV5N47Q"
          strategy="afterInteractive" // Ensures it runs after the page has loaded
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DYQV5N47Q');
          `}
        </Script>

        {/* Consent Manager Script */}
        <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/535a3bcdd1cf1.js"
          strategy="afterInteractive"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-ab="1"
          data-cmp-codesrc="16"
        />
      </head>
      <body className="bg-lightNeon">
        <QuoteProvider>
          <HeaderContainer />
          <main className="no-top-padding">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
