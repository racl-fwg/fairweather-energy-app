import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#feffeb] rounded-full shadow-lg z-20 py-4 px-8 font-['Manrope']">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logotypes/Fairweather_Main_Logotype_Nature_RGB.svg"
            alt="Fairweather"
            width={160}
            height={40}
            priority // Add priority to preload important images like logos
          />
        </div>


        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#about" className="text-darkNature text-lg font-medium">Om oss</a>
          <a href="#why" className="text-darkNature text-lg font-medium">Varför Fairweather Energy</a>
          <a href="#segments" className="text-darkNature text-lg font-medium">Kundsegment</a>
          <a href="#solutions" className="text-darkNature text-lg font-medium">Lösningar</a>
          <a href="#sustainability" className="text-darkNature text-lg font-medium">Hållbarhet</a>
        </nav>


        {/* Get a Quote Button */}
        <div className="quote-btn">
          <a href="#quote" className="bg-[#003317] text-[#E9FF66] py-2 px-6 rounded-full text-lg">
            Begär offert
          </a>
        </div>
      </div>
    </header>
  );
}
