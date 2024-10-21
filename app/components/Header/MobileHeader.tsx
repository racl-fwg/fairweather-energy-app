"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import QuoteButton from "../Buttons/QuoteButton";
import React from "react";

export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      {/* Floating Header Design for Mobile */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-lightNeon shadow-lg py-4 px-8 rounded-full z-50 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logotypes/Fairweather_Main_Logotype_Nature_RGB.svg"
            alt="Fairweather"
            width={120}
            height={30}
            priority
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <HiOutlineMenu
          className="text-3xl cursor-pointer text-darkNature"
          onClick={() => setMobileMenuOpen(true)}
        />
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
          <div className="bg-lightNeon shadow-2xl rounded-2xl p-8 w-[90%] max-w-[500px] h-auto flex flex-col justify-center relative">
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <IoClose
                className="text-3xl cursor-pointer text-darkNature"
                onClick={() => {
                  setActiveMenu(null);
                  setMobileMenuOpen(false);
                }}
              />
            </div>

            {/* Menu Links */}
            <div className="space-y-8 text-center mt-6">
              <Link
                href="/about"
                className="block text-2xl font-semibold text-darkNature hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om oss
              </Link>

              {/* Products Dropdown */}
              <div className="flex flex-col items-center">
                <button
                  className="text-2xl font-semibold text-darkNature hover:underline"
                  onClick={() =>
                    setActiveMenu(activeMenu === "Produkter" ? null : "Produkter")
                  }
                >
                  Produkter
                </button>
                {activeMenu === "Produkter" && (
                  <div className="mt-4 space-y-2 text-lg">
                    <Link
                      href="/products/huawei"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Huawei
                    </Link>
                    <Link
                      href="/products/pixii"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pixii
                    </Link>
                    <Link
                      href="/products/emaldo"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Emaldo
                    </Link>
                    <Link
                      href="/products/saj"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SAJ
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="flex flex-col items-center">
                <button
                  className="text-2xl font-semibold text-darkNature hover:underline"
                  onClick={() =>
                    setActiveMenu(activeMenu === "Tjänster" ? null : "Tjänster")
                  }
                >
                  Tjänster
                </button>
                {activeMenu === "Tjänster" && (
                  <div className="mt-4 space-y-2 text-lg">
                    <Link
                      href="/services/auxiliary-services"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Stödtjänster
                    </Link>
                    <Link
                      href="/services/retrofit"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Retrofitting
                    </Link>
                    <Link
                      href="/services/services"
                      className="block text-darkNature hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tjänster
                    </Link>
                  </div>
                )}
              </div>

              {/* Static Menu Items */}
              <Link
                href="/sustainability"
                className="block text-2xl font-semibold text-darkNature hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hållbarhet
              </Link>
              <Link
                href="#contact"
                className="block text-2xl font-semibold text-darkNature hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>

            {/* Quote Button */}
            <div className="flex justify-center mt-8">
              <QuoteButton /> {/* Larger button for better visibility in mobile menu */}
            </div>


          </div>
        </div>
      )}
    </>
  );
}
