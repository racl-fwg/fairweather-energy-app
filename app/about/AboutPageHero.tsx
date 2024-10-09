import Image from "next/image";
import ArrowButton from "@/components/Buttons/ArrowButton";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full z-0">
        <Image
          src="/images/about-hero.png" // Replace with your image path
          alt="Battery Container in Sunset"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end justify-between px-8 md:px-16 lg:px-24 pb-[5%]">
        {/* Text and Logo Wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          
          {/* Logo Section */}
          <div className="lg:mb-0 mb-4 flex items-center">
            <Image
              src="/logotypes/Fairweather_Energy_Logotype_Energy_RGB.png"
              alt="Fairweather Energy Logo"
              width={1600} // Adjusted size for larger screens
              height={400}
              className="object-contain"
              priority
            />
          </div>

          {/* Text and Call-to-Action */}
          <div className="lg:ml-8 flex flex-col items-start lg:items-end justify-end text-center lg:text-right">
            <h1 className="text-[#E9FF66] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Vi guidar er till ett smartare batterival
            </h1>
            <ArrowButton text="Kontakta oss" />
          </div>
        </div>
      </div>
    </section>
  );
}
