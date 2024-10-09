"use client";
import React from 'react';
import ArrowButton from '@/components/Buttons/ArrowButton';
import OutlinedButton from '@/components/Buttons/OutlineButton';

export default function Vision() {
  return (
    <section className="py-12 bg-lightNeon text-center">
      <div className="container mx-auto px-4">
        {/* Vision Title */}
        <h2 className="text-4xl font-semibold mb-6 text-nature">Vår vision</h2>

        {/* Vision Description with Updated Text */}
        <p className="text-lg text-darkNature leading-relaxed max-w-3xl mx-auto mb-12">
          Batterier spelar en central roll i övergången till en hållbar framtid. De används för att lagra förnybar energi från solen och vinden, säkra strömförsörjningen vid avbrott och optimera energianvändningen i hem, företag och industrier. Genom att erbjuda flexibla och effektiva energilagringslösningar strävar vi efter att möjliggöra en värld där energi alltid finns tillgänglig, är ren och pålitlig.
        </p>

        {/* Vision Buttons */}
        <div className="flex justify-center space-x-4">
          <ArrowButton text="Om oss" size="large" href="/about#about" />
          <OutlinedButton text="Läs mer om vårt Hållbarhetsmål" href="/sustainability" size="medium" />
        </div>
      </div>
    </section>
  );
}
