"use client";
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '../Buttons/QuoteButton';
import { useState, useEffect } from 'react';
import DropdownWrapper from '../ModalWrapper/DropdownWrapper';
import React from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasRoundedCorners, setHasRoundedCorners] = useState(true);

  useEffect(() => {
    if (activeMenu) {
      setIsAnimating(true);
      setHasRoundedCorners(false); // Remove bottom corners when expansion starts
    }
  }, [activeMenu]);

  return (
    <>
      {/* Parent Container to wrap Header and Dropdown */}
      <div className="relative z-50">
        {/* Main Header */}
        <header
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-lightNeon shadow-lg py-4 px-8 font-['Manrope'] hidden lg:flex transition-all duration-300 ease-in-out ${
            activeMenu ? "rounded-t-full rounded-b-none" : "rounded-full"
          }`}
          style={{ height: "72px" }}
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
              {/* Main Navigation Items */}
              <Link href="/about" className="text-darkNature text-lg font-medium">
                Om oss
              </Link>

              {/* Products Dropdown Button */}
              <button
                className={`text-darkNature text-lg font-medium ${
                  activeMenu === "Produkter" ? "border-b-2 border-darkNature" : ""
                }`}
                onClick={() => {
                  if (activeMenu === "Produkter") {
                    setActiveMenu(null);
                  } else {
                    setActiveMenu("Produkter");
                  }
                }}
              >
                Produkter
              </button>

              {/* Services Dropdown Button */}
              <button
                className={`text-darkNature text-lg font-medium ${
                  activeMenu === "Tjänster" ? "border-b-2 border-darkNature" : ""
                }`}
                onClick={() => {
                  if (activeMenu === "Tjänster") {
                    setActiveMenu(null);
                  } else {
                    setActiveMenu("Tjänster");
                  }
                }}
              >
                Tjänster
              </button>

              {/* Static Menu Items */}
              <Link href="/sustainability" className="text-darkNature text-lg font-medium">
                Hållbarhet
              </Link>
              <Link href="/about#contact" className="text-darkNature text-lg font-medium">
                Kontakt
              </Link>

              {/* Quote Button as Final Navigation Item */}
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
            setIsAnimating(false);
            if (!activeMenu) {
              setHasRoundedCorners(true); // Bring back the rounded corners after retraction completes
            }
          }}
        >
          <div
            className={`flex justify-between items-start w-full px-16 py-12 transition-all duration-500 ease-in-out ${
              activeMenu ? "max-h-[400px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
            }`}
            style={{ overflow: "hidden", borderRadius: hasRoundedCorners ? "32px" : "0px 0px 32px 32px" }}
            onTransitionEnd={() => {
              if (!activeMenu) setIsAnimating(false);
            }}
          >
            {/* Dropdown Content for Products */}
            <div className="flex flex-col w-full space-y-4">
              <h3 className="text-3xl text-darkNature font-semibold">{activeMenu}</h3>
              {activeMenu === "Produkter" && (
                <div className="grid grid-cols-2 gap-8">
                  <DropdownLink
                    href="/products/huawei"
                    label="Huawei"
                    imageSrc="/images/products/huawei-preview.png"
                  />
                  <DropdownLink
                    href="/products/pixii"
                    label="Pixii"
                    imageSrc="/images/products/pixii-preview.png"
                  />
                  <DropdownLink
                    href="/products/emaldo"
                    label="Emaldo"
                    imageSrc="/images/products/emaldo-preview.png"
                  />
                  <DropdownLink
                    href="/products/saj"
                    label="SAJ"
                    imageSrc="/images/products/saj-preview.png"
                  />
                </div>
              )}

              {/* Dropdown Content for Services */}
              {activeMenu === "Tjänster" && (
                <div className="grid grid-cols-2 gap-8">
                  <DropdownLink href="/services/auxiliary-services" label="Stödtjänster" />
                  <DropdownLink href="/services/services#installation" label="Installation" />
                  <DropdownLink href="/services/services#surveys" label="Undersökning" />
                  <DropdownLink href="/services/services#retrofit" label="Retrofitting" />
                </div>
              )}
            </div>
          </div>
        </DropdownWrapper>
      </div>
    </>
  );
}

// Add the missing DropdownLink component here
const DropdownLink = ({
  href,
  label,
  imageSrc,
}: {
  href: string;
  label: string;
  imageSrc?: string;
}) => (
  <Link href={href} className="flex items-center space-x-4 py-4 px-2 text-darkNature hover:bg-gray-100 rounded-md transition-all duration-300">
    {/* Image Preview */}
    {imageSrc && (
      <Image
        src={imageSrc}
        alt={`${label} preview`}
        width={50}
        height={50}
        className="rounded-md"
      />
    )}
    <span className="text-lg font-medium">{label}</span>
  </Link>
);
