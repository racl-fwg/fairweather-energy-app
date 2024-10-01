"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Products() {
  // Product details
  const products = [
    {
      id: 'huawei',
      name: 'Huawei',
      model: 'LUNA2000-5/10/15-S0',
      description:
        'Huawei energilösningar ger mer användbar energi med 100 % djup urladdning och är en flexibel investering som kan skalas från 5 till 30 kWh. Litiumjärnfosfatceller (LFP) garanterar säkerhet, och installationen är enkel med ett lättviktsmoduler. Automatisk detektering i appen och kompatibilitet med enfas och trefas växelriktare gör den idealisk för alla installationer.',
      imgSrc: '/images/products/huawei.png',
    },
    {
      id: 'pixi',
      name: 'Pixii',
      model: 'Modular Battery',
      description:
        'Pixii’s Modular Battery system provides scalable energy storage solutions for residential and commercial use. The system can be expanded according to the energy needs, ensuring safety and flexibility.',
      imgSrc: '/images/products/pixi.png',
    },
    {
      id: 'saj',
      name: 'SAJ',
      model: 'Sununo Plus 6kW',
      description:
        'SAJ’s Sununo Plus series provides efficient energy storage with integrated monitoring. It’s designed for optimal use in both residential and industrial applications, with a range of configurations.',
      imgSrc: '/images/products/saj.png',
    },
    {
      id: 'emaldo',
      name: 'Emaldo',
      model: 'Smart Inverter',
      description:
        'Emaldo’s Smart Inverter offers a compact, powerful energy solution that integrates seamlessly into both on-grid and off-grid systems, making it a versatile choice for energy optimization.',
      imgSrc: '/images/products/emaldo.png',
    },
  ];

  // State to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-nature text-center mb-12">
          Vilka produkter jobbar vi med?
        </h2>
        {/* Product Display and Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Large Product Display on the Left */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <Image
              src={selectedProduct.imgSrc}
              alt={selectedProduct.name}
              width={500}
              height={400}
              className="rounded-md mx-auto"
            />
            <div className="text-left mt-6">
              <h3 className="text-2xl font-semibold text-darkNature">
                {selectedProduct.name}
              </h3>
              <p className="text-lg text-darkNature mb-4">
                {selectedProduct.model}
              </p>
              <p className="text-base text-darkNature mb-8">
                {selectedProduct.description}
              </p>
              <a
                href="#"
                className="bg-energy text-darkNature px-6 py-3 rounded-full font-medium text-lg hover:bg-darkNature hover:text-lightNeon transition duration-300"
              >
                Explore more &rarr;
              </a>
            </div>
          </div>

          {/* Product Selection Cards */}
          <div className="flex flex-col space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`cursor-pointer bg-white p-4 rounded-lg shadow-lg text-center ${
                  selectedProduct.id === product.id
                    ? 'border-4 border-energy'
                    : 'border'
                } transition duration-300 ease-in-out`}
              >
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={100}
                  height={80}
                  className="mx-auto rounded-md"
                />
                <h4 className="text-nature text-lg font-semibold mt-4">
                  {product.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
