"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';

export default function Products() {
  // Product Data Array
  const products = [
    {
      id: 'huawei',
      name: 'Huawei',
      model: 'LUNA2000-7/14/21-S1',
      description:
        'Huawei energilösningar ger mer användbar energi med 100 % djup urladdning och är en flexibel investering som kan skalas från 5 till 30 kWh. Litiumjärnfosfatceller (LFP) garanterar säkerhet och lång livslängd, samtidigt som systemet är enkelt att installera och anpassa efter dina specifika behov.',
      imgSrc: '/images/products/product-huawei.png',
      previewImgSrc: '/images/products/huawei-preview.png',
    },
    {
      id: 'pixii',
      name: 'Pixii',
      model: 'Modular Battery',
      description:
        'Pixii’s Modular Battery system tillhandahåller skalbara energilagringslösningar för både bostäder och kommersiella behov. Systemet kan utökas efter energibehov, vilket garanterar säkerhet och flexibilitet, samt en hållbar energilagring för alla typer av användning.',
      imgSrc: '/images/products/product-pixii.png',
      previewImgSrc: '/images/products/pixii-preview.png',
    },
    {
      id: 'saj',
      name: 'SAJ',
      model: 'Sununo Plus 6kW',
      description:
        'SAJ’s Sununo Plus-serie erbjuder effektiv energilagring med integrerad övervakning. Den är designad för optimal användning i både bostäder och industriella tillämpningar, med en rad olika konfigurationer för att möta specifika energibehov och säkerställa maximal effektivitet.',
      imgSrc: '/images/products/product-saj.png',
      previewImgSrc: '/images/products/saj-preview.png',
    },
    {
      id: 'emaldo',
      name: 'Emaldo',
      model: 'Smart Inverter',
      description:
        'Emaldo’s Smart Inverter erbjuder en kompakt och kraftfull energilösning som integreras sömlöst i både on-grid och off-grid system. Det gör den till ett mångsidigt val för optimering av energianvändning, vilket möjliggör en effektiv hantering av elproduktion och lagring.',
      imgSrc: '/images/products/product-emaldo.png',
      previewImgSrc: '/images/products/emaldo-preview.png',
    },
  ];

  // State to Track Selected Product
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-16 bg-lightNeon">
      <h2 className="text-3xl font-semibold text-nature text-center mb-12">
        Vilka produkter jobbar vi med?
      </h2>

      {/* Main Container */}
      <div className="container mx-auto px-4 bg-white shadow-2xl rounded-2xl py-6">
        {/* Grid Layout for Product Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Large Product Showcase Section */}
          <div className="md:col-span-2 lg:col-span-4 relative rounded-2xl overflow-auto">
            <div className="w-full h-[400px] lg:h-[500px] relative">
              <Image
                src={selectedProduct.imgSrc}
                alt={selectedProduct.name}
                fill
                style={{ objectFit: 'fill' }}
                className="mx-auto"
              />
            </div>

            {/* Text Overlay on Image */}
            <div className="absolute bottom-4 left-0 p-6 w-full bg-opacity-40 bg-white">
              <h3 className="text-3xl lg:text-4xl font-semibold text-darkNature mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-2xl lg:text-3xl text-darkNature font-semibold mb-2">
                {selectedProduct.model}
              </p>
            </div>
          </div>

          {/* Product Selection Cards */}
          <div className="md:col-span-2 lg:col-span-1 flex md:flex-wrap lg:flex-col justify-evenly items-stretch lg:justify-start lg:space-y-[5px] overflow-hidden lg:overflow-visible h-auto lg:h-[500px]">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`relative cursor-pointer bg-white w-[45%] md:w-[24%] lg:w-full h-[106px] lg:h-[120px] rounded-lg overflow-auto shadow-lg text-center ${
                  selectedProduct.id === product.id ? 'border-2 border-energy' : 'border'
                } transition duration-300 ease-in-out mx-auto`}
              >
                <Image
                  src={product.previewImgSrc}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />

                {/* Product Name Overlay */}
                <h4 className="absolute bottom-2 left-1 text-lightNeon text-lg font-semibold px-2 py-1 rounded-md">
                  {product.name}
                </h4>

                {/* Selected Product Overlay */}
                {selectedProduct.id === product.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                )}
              </div>
            ))}
          </div>

          {/* Description and Explore Button Section */}
          <div className="lg:col-span-3 p-4 mt-0 lg:mt-0">
            <p className="text-base sm:text-lg text-center sm:text-left text-darkNature">{selectedProduct.description}</p>
          </div>

          {/* Explore More Button using ArrowButton */}
          <div className="lg:col-span-2 flex items-center justify-center mt-4 lg:mt-0">
            <ArrowButton
              text="Utforska produkt"
              size="medium"
              href={`/products/${selectedProduct.id}`}  // Dynamically generate link based on product id
            />
          </div>
        </div>
      </div>
    </section>
  );
}
