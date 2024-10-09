"use client";
import Image from 'next/image';
import QuoteButton from '@/components/Buttons/QuoteButton';
import ArrowButton from '@/components/Buttons/ArrowButton';

export default function Services() {
  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Hemmabatterier Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/home/Home_battery_units.png"
              alt="Hemmabatterier"
              width={320}
              height={180}
              className="rounded-t-lg object-cover"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Hemmabatterier</h3>
            <p className="text-darkNature text-base my-4">
              Som villaägare kan du lagra solel, köpa billig el för användning vid högre priser, eller delta i stödtjänster och bidra till elnätets stabilitet.
            </p>
            <div className="mt-auto">
              <QuoteButton />
            </div>
          </div>

          {/* Industribatterier Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/home/Energy_storage_container.png"
              alt="Industribatterier"
              width={320}
              height={180}
              className="rounded-t-lg object-cover"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Industribatterier</h3>
            <p className="text-darkNature text-base my-4">
              Industribatterier möjliggör lagring av överskottsel, optimering av energianvändning och minskade kostnader genom att utnyttja el när priserna är som lägst.
            </p>
            <div className="mt-auto">
              <QuoteButton />
            </div>
          </div>

          {/* Konsultation Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/home/Office_meeting_scene.png"
              alt="Konsultation"
              width={320}
              height={180}
              className="rounded-t-lg object-cover"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Konsultation</h3>
            <p className="text-darkNature text-base my-4">
              Vi erbjuder konsultation inför din planerade installation. Vi hjälper dig utvärdera dina förutsättningar och guidar dig till den bästa möjliga lösningen.
            </p>
            <div className="mt-auto">
              <ArrowButton text="Kontakta oss" size="medium" href="#contact" />
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-1 border-darkNature mb-12" />

        {/* New Graphic Section */}
        <div className="text-center mt-24 mb-12">
          {/* Heading and Description Above the Graphic */}
          <h2 className="text-3xl font-semibold text-nature mb-4">Solceller är inte ett måste!</h2>
          <p className="text-darkNature text-lg max-w-4xl mx-auto mb-8">
            Ett batteri kan användas för mer än bara att lagra solenergi. Det kan också fungera som en reservkraftkälla, vilket säkerställer att viktiga apparater och system fortsätter att fungera under strömavbrott. Batterier kan också hjälpa till att optimera energiförbrukningen genom att ladda vid låg elpriskostnad och användas när priserna är höga, en process som kallas arbitrage. Dessutom kan de delta i frekvensreglering och bidra till att balansera elnätet, särskilt i tider av hög belastning.
          </p>

          {/* Graphic Image */}
          <div className="flex justify-center">
            <Image
              src="/images/service-graphic.png"
              alt="Battery Service Graphic"
              width={900}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
