"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '../Buttons/QuoteButton';
import DropdownWrapper from '../ModalWrapper/DropdownWrapper';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation for Next.js 13

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hasRoundedCorners, setHasRoundedCorners] = useState(true);
  const [isClient, setIsClient] = useState(false); // State to track if the component is rendered on client-side

  // Only use router after the component is mounted on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (activeMenu) {
      setHasRoundedCorners(false);
    }
  }, [activeMenu]);

  return (
    <div className="relative z-50">
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-lightNeon shadow-lg py-4 px-8 font-['Manrope'] hidden lg:flex transition-all duration-300 ease-in-out ${
          activeMenu ? 'rounded-t-full rounded-b-none' : 'rounded-full'
        }`}
        style={{ height: '72px' }}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logotypes/Fairweather_Main_Logotype_Nature_RGB.svg"
              alt="Fairweather"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Navigation Container */}
          <nav className="flex items-center ml-auto space-x-6">
            <Link href="/about" className="text-darkNature text-lg font-medium">
              Om oss
            </Link>

            {/* Products Dropdown Button */}
            <button
              className={`text-darkNature text-lg font-medium ${activeMenu === 'Produkter' ? 'border-b-2 border-darkNature' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'Produkter' ? null : 'Produkter')}
            >
              Produkter
            </button>

            {/* Services Dropdown Button */}
            <button
              className={`text-darkNature text-lg font-medium ${activeMenu === 'Tjänster' ? 'border-b-2 border-darkNature' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'Tjänster' ? null : 'Tjänster')}
            >
              Tjänster
            </button>

            <Link href="/sustainability" className="text-darkNature text-lg font-medium">
              Hållbarhet
            </Link>
            <Link href="/about#contact" className="text-darkNature text-lg font-medium">
              Kontakt
            </Link>

            <div className="text-darkNature text-lg font-medium ml-4">
              <QuoteButton />
            </div>
          </nav>
        </div>
      </header>

      {/* Expanded Dropdown Modal */}
      <DropdownWrapper
        isOpen={activeMenu !== null}
        onAnimationComplete={() => {
          if (!activeMenu) {
            setHasRoundedCorners(true);
          }
        }}
      >
        <div
          className={`flex justify-between items-start w-full px-16 py-12 transition-all duration-500 ease-in-out ${
            activeMenu ? 'max-h-[400px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
          }`}
          style={{ overflow: 'hidden', borderRadius: hasRoundedCorners ? '32px' : '0px 0px 32px 32px' }}
        >
          <div className="flex flex-col w-full space-y-4">
            <h3 className="text-3xl text-darkNature font-semibold">{activeMenu}</h3>
            {activeMenu === 'Produkter' && (
              <div className="grid grid-cols-2 gap-8">
                <DropdownLink href="/products/huawei" label="Huawei" imageSrc="/images/products/huawei-preview.png" setActiveMenu={setActiveMenu} />
                <DropdownLink href="/products/pixii" label="Pixii" imageSrc="/images/products/pixii-preview.png" setActiveMenu={setActiveMenu} />
                <DropdownLink href="/products/emaldo" label="Emaldo" imageSrc="/images/products/emaldo-preview.png" setActiveMenu={setActiveMenu} />
                <DropdownLink href="/products/saj" label="SAJ" imageSrc="/images/products/saj-preview.png" setActiveMenu={setActiveMenu} />
              </div>
            )}

            {activeMenu === 'Tjänster' && (
              <div className="grid grid-cols-2 gap-8">
                <DropdownLink href="/services/auxiliary-services" label="Stödtjänster" setActiveMenu={setActiveMenu} />
                <DropdownLink href="/services/retrofit" label="Retrofit" setActiveMenu={setActiveMenu} />
                <DropdownLink href="/services/consultation" label="Konsultation" setActiveMenu={setActiveMenu} />
              </div>
            )}
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
}

const DropdownLink = ({
  href,
  label,
  imageSrc,
  setActiveMenu,
}: {
  href: string;
  label: string;
  imageSrc?: string;
  setActiveMenu: (menu: string | null) => void;
}) => {
  const [mounted, setMounted] = useState(false); // Track when the component is mounted
  const router = useRouter(); // Get router instance

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="flex items-center space-x-4 py-4 px-2 text-darkNature hover:bg-gray-100 rounded-md transition-all duration-300 cursor-pointer"
      onClick={(e) => {
        if (mounted) {
          e.preventDefault();
          setActiveMenu(null);
          setTimeout(() => {
            router.push(href);
          }, 100);
        }
      }}
    >
      {imageSrc && <Image src={imageSrc} alt={`${label} preview`} width={50} height={50} className="rounded-md" />}
      <span className="text-lg font-medium">{label}</span>
    </div>
  );
};
