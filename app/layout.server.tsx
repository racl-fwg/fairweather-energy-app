// app/layout.server.tsx
import './globals.css';
import { QuoteProvider } from './context/QuouteContext';
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
