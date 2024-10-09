import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.png"
          alt="Solar Power"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Text and Logotype Overlay Container */}
      <div className="relative z-10 h-full flex items-end justify-start px-6 lg:px-16 pb-8 lg:pb-16">
        {/* Container for Heading Text and Logotype */}
        <div className="flex flex-col space-y-6 lg:space-y-8 max-w-[90%] sm:max-w-[50%]"> {/* Full-width text on small screens */}
          {/* Heading Text */}
          <h1 className="text-[#E9FF66] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-['Manrope'] leading-tight text-left sm:mb-0 mb-2">
            Renewable energy for a sustainable future with sunlight shaping our tomorrow
          </h1>

          {/* Energy Logotype */}
          <div className="w-[75vw] sm:w-[70vw] lg:w-[65vw] xl:w-[55vw]"> {/* Dynamically adjust logotype width */}
            <Image
              src="/logotypes/Energy_Logotype_Energy_RGB.png"
              alt="Energy"
              width={1800}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
