import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh]"> {/* Adjust height to 3/4 of full screen */}
    
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png" // Path to your hero background image
            alt="Solar Power"
            fill // Replaces `layout="fill"`
            style={{ objectFit: 'cover' }} // Use style prop to set `objectFit`
            priority // Boolean values don’t need `={true}`
          />
        </div>


      {/* Text and Logotype Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 lg:px-24"> {/* Reduce left margin to lg:px-24 */}
        {/* Text */}
        <h1 className="text-[#E9FF66] text-5xl md:text-6xl lg:text-7xl font-medium font-['Manrope'] leading-tight max-w-3xl"> {/* Adjust to max-w-3xl to reduce line breaks */}
          Solar power for a sustainable future with sunlight shaping our tomorrow
        </h1>

      {/* Energy Logotype */}
      <div className="absolute bottom-8 left-16 w-1/2">
        <Image
          src="/logotypes/Energy_Logotype_Energy_RGB.png"
          alt="Energy"
          width={800} // Intrinsic sizing with width and height props
          height={200}
          style={{ width: '100%', height: 'auto' }} // Optional styling to handle responsive sizing
        />
      </div>

      </div>
    </section>
  );
}
