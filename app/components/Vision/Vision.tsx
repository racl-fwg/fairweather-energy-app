// Vision.tsx
import React from 'react';

export default function Vision() {
  return (
    <section className="py-24 bg-lightNeon text-center">
      <div className="container mx-auto px-4">
        {/* Vision Title */}
        <h2 className="text-4xl font-semibold mb-6 text-nature">Vår vision</h2>
        {/* Vision Description */}
        <p className="text-lg text-darkNature leading-relaxed max-w-2xl mx-auto mb-12">
          The core of our product range. It is a series of smart, strong, and safe lithium-ion batteries. Our Battery can either be used to store reserve power on its own or as a foundation for all other Polarium products.
        </p>
        {/* Vision Button */}
        <a
          href="#about"
          className="inline-block px-8 py-4 rounded-full bg-energy text-darkNature font-medium text-lg hover:bg-darkNature hover:text-lightNeon transition duration-300"
        >
          Om oss &rarr;
        </a>
      </div>
    </section>
  );
}
