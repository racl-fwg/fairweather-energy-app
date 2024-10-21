"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle the newsletter form submission
  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset state
    setMessage('');
    setIsLoading(true);

    if (!email) {
      setMessage('Vänligen fyll i din e-postadress.');
      setIsLoading(false);
      return;
    }

    try {
      // Make a POST request to /api/newsletter
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const successMessage = process.env.NEXT_PUBLIC_DEBUG === 'true'
          ? 'Debug: Email added successfully to the newsletter!'
          : 'Tack för att du prenumererar på vårt nyhetsbrev!';
        
        setMessage(successMessage);
        setEmail('');
      } else {
        const errorData = await response.json();
        const errorMessage = process.env.NEXT_PUBLIC_DEBUG === 'true'
          ? `Error: ${errorData.message}`
          : 'Något gick fel. Försök igen senare.';

        setMessage(errorMessage);
      }
    } catch (error) {
      const errorMessage = process.env.NEXT_PUBLIC_DEBUG === 'true'
        ? `Error connecting to the server: ${error}`
        : 'Något gick fel vid anslutning till servern.';

      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-darkNature text-energy py-8 overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 space-y-6">
        {/* Row 1: Logo and Navigation Sections */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-start text-lightNeon">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="/logotypes/Fairweather_Symbol_Energy_RGB.png"
                alt="Fairweather Energy Logo"
                width={80}
                height={80}
                className="mb-4 md:mb-0 cursor-pointer"
              />
            </Link>
          </div>

          {/* Om oss */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Om oss</h3>
            <Link href="/about" className="hover:text-white">Fairweather Energy</Link>
            <Link href="/about#contact" className="hover:text-white">Kontakt</Link>
            <Link href="/sustainability" className="hover:text-white">Hållbarhet</Link>
          </div>

          {/* Tjänster */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Tjänster</h3>
            <Link href="/services/auxiliary-services" className="hover:text-white">Stödtjänster</Link>
            <Link href="/services/retrofit" className="hover:text-white">Retrofitting</Link>
            <Link href="/services/services" className="hover:text-white">Tjänster</Link>
          </div>

          {/* Kontakta oss */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Kontakta oss</h3>
            <p>Fairweather Energy</p>
            <p>Post-anders gata 9</p>
            <p>722 12 Västerås</p>
            <p>hello@fairweather.se</p>
          </div>

          {/* Produkter */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Produkter</h3>
            <Link href="/products/huawei" className="hover:text-white">Huawei</Link>
            <Link href="/products/pixii" className="hover:text-white">Pixii</Link>
            <Link href="/products/saj" className="hover:text-white">SAJ</Link>
            <Link href="/products/emaldo" className="hover:text-white">Emaldo</Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-lightNeon text-sm flex flex-col items-center space-y-4">
          <h3 className="text-base font-bold">Vill du få de senaste nyheterna?</h3>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col items-center space-y-4 w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Skriv din email adress här"
              className="w-full px-4 py-2 rounded-full bg-white text-darkNature border border-energy focus:outline-none focus:ring-2 focus:ring-energy"
              required
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded-full bg-energy text-darkNature font-semibold transition duration-300 hover:bg-white border-2 border-energy ${
                isLoading ? 'cursor-not-allowed opacity-50' : 'hover:text-darkNature'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Skickar...' : 'Prenumerera'}
            </button>
          </form>

          {/* Message Section */}
          {message && <p className="text-xs text-center mt-4">{message}</p>}

          <p className="text-xs text-center">
            Jag samtycker till att Fairweather Energy använder mina personuppgifter i enlighet med deras integritetspolicy.
          </p>
        </div>
      </div>

      {/* Large ENERGY Background Logo with Link */}
      <div className="absolute bottom-0 left-0 w-screen z-0 pointer-events-none">
        <Link href="/">
          <Image
            src="/logotypes/footer_logo.png"
            alt="Energy Logo Background"
            width={2500}
            height={500}
            style={{ objectFit: 'contain' }}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>
    </footer>
  );
}
