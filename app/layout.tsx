// app/layout.tsx
import './globals.css';
import { QuoteProvider } from './context/QuouteContext';
import Script from 'next/script';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import ClientOnlyComponent from './ClientOnlyComponent';

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
      <body className="bg-lightNeon">
        <QuoteProvider>
          <HeaderContainer />
          <main className="no-top-padding">{children}</main>
          <Footer />
          {/* This ensures client-only code is separated */}
          <ClientOnlyComponent />
        </QuoteProvider>
      </body>
    </html>
  );
}
