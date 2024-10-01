// Services.tsx
import Image from 'next/image';

export default function Services() {
  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Hemmabatterier Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/82444e68b53849529d3785a93b1cf14a.png"
              alt="Hemmabatterier"
              width={320}
              height={180}
              className="rounded-t-lg"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Hemmabatterier</h3>
            <p className="text-darkNature text-base my-4">
              Som villaägare kan du lagra solel, köpa billig el för användning vid högre priser, eller delta i stödtjänster och bidra till elnätets stabilitet.
            </p>
            <button className="mt-auto bg-darkNature text-energy rounded-full px-6 py-3 text-lg hover:bg-nature transition duration-300">
              Begär offert
            </button>
          </div>

          {/* Industribatterier Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/b5d20701a3bfab529616d8d27fb1273c.png"
              alt="Industribatterier"
              width={320}
              height={180}
              className="rounded-t-lg"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Industribatterier</h3>
            <p className="text-darkNature text-base my-4">
              Industribatterier möjliggör lagring av överskottsel, optimering av energianvändning och minskade kostnader genom att utnyttja el när priserna är som lägst.
            </p>
            <button className="mt-auto bg-darkNature text-energy rounded-full px-6 py-3 text-lg hover:bg-nature transition duration-300">
              Begär offert
            </button>
          </div>

          {/* Konsultation Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 flex flex-col items-center">
            <Image
              src="/images/d212fb385c777627e3d10f78821024e2.png"
              alt="Konsultation"
              width={320}
              height={180}
              className="rounded-t-lg"
            />
            <h3 className="text-nature text-2xl font-semibold mt-6">Konsultation</h3>
            <p className="text-darkNature text-base my-4">
              Vi erbjuder konsultation inför din planerade installation. Vi hjälper dig utvärdera dina förutsättningar och guidar dig till den bästa möjliga lösningen.
            </p>
            <button className="mt-auto bg-darkNature text-energy rounded-full px-6 py-3 text-lg hover:bg-nature transition duration-300">
              Begär offert
            </button>
          </div>
        </div>

        {/* New Graphic Section */}
        <div className="text-center mb-16">
          {/* Heading and Description Above the Graphic */}
          <h2 className="text-3xl font-semibold text-nature mb-4">Du kan ha batteri med eller utan solceller</h2>
          <p className="text-darkNature text-lg max-w-4xl mx-auto mb-8">
            The core of our product range. It is a series of smart, strong, and safe lithium-ion batteries. Our Battery can either be used to store reserve power on its own or as a foundation for all other Polarium products. Our Battery can either be used to store reserve power on its own or as a foundation for all other Polarium products.
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
