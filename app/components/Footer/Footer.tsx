"use client";
import { useState } from 'react';
import Image from 'next/image';

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
        setMessage('Tack för att du prenumererar på vårt nyhetsbrev!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(`Något gick fel: ${errorData.message}`);
      }
    } catch {
      setMessage('Något gick fel vid anslutning till servern.');
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
            <Image
              src="/logotypes/Fairweather_Symbol_Energy_RGB.png"
              alt="Fairweather Energy Logo"
              width={80}
              height={80}
              className="mb-4 md:mb-0"
            />
          </div>

          {/* Om oss */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Om oss</h3>
            <a href="#about" className="hover:text-white">Fairweather Energy</a>
            <a href="#" className="hover:text-white">Kontakt</a>
            <a href="#" className="hover:text-white">Hållbarhet</a>
          </div>

          {/* Tjänster */}
          <div className="flex flex-col space-y-1 text-sm">
            <h3 className="font-bold text-energy">Tjänster</h3>
            <a href="#" className="hover:text-white">Stödtjänster</a>
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
            <a href="#" className="hover:text-white">Huawei</a>
            <a href="#" className="hover:text-white">Pixii</a>
            <a href="#" className="hover:text-white">SAJ</a>
            <a href="#" className="hover:text-white">Emaldo</a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-lightNeon text-sm flex flex-col items-center space-y-4">
          <h3 className="text-base font-bold">Vill få de senaste nyheterna?</h3>
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

      {/* Large ENERGY Background Logo */}
      <div className="absolute bottom-0 left-0 w-screen z-0 pointer-events-none">
        <Image
          src="/logotypes/footer_logo.png"
          alt="Energy Logo Background"
          layout="responsive"
          width={2500}
          height={500}
          className="object-contain w-full"
          priority
        />
      </div>
    </footer>
  );
}
