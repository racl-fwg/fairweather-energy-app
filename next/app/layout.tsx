import './globals.css';
import Header from './components/Header/Header';
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
