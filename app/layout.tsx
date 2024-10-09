// app/layout.tsx or any root-level layout component
import './globals.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import { QuoteProvider } from './context/QuouteContext';

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
          <HeaderContainer />
          <main className="no-top-padding">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
