// Footer.tsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-darkNature text-energy py-16 overflow-hidden">
      {/* Large ENERGY Background Logo at the Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10 w-[95%]">
        <Image
          src="/logotypes/Energy_Logotype_Energy_RGB.png"
          alt="Energy Logo Background"
          layout="responsive"
          width={2500} // Adjusted for full width
          height={500}
          className="object-contain"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col items-start">
          <Image
            src="/logotypes/Fairweather_Symbol_Energy_RGB.png"
            alt="Fairweather Energy Logo"
            width={60}
            height={60}
            className="mb-4"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2 text-lightNeon">
          <h3 className="font-bold mb-2 text-energy">Om oss</h3>
          <a href="#" className="hover:text-white">Näringskedja</a>
        </div>

        <div className="flex flex-col space-y-2 text-lightNeon">
          <h3 className="font-bold mb-2 text-energy">Tjänster</h3>
          <a href="#" className="hover:text-white">Hemmabatterier</a>
          <a href="#" className="hover:text-white">Industribatterier</a>
          <a href="#" className="hover:text-white">Konsultation</a>
        </div>

        <div className="flex flex-col space-y-2 text-lightNeon">
          <h3 className="font-bold mb-2 text-energy">Kontakta oss</h3>
          <p>Fairweather Energy</p>
          <p>Post-anders gata 9</p>
          <p>722 12 Västerås</p>
          <p>hello@fairweatherenergy.se</p>
        </div>

        <div className="flex flex-col space-y-2 text-lightNeon">
          <h3 className="font-bold mb-2 text-energy">Produkter</h3>
          <a href="#" className="hover:text-white">Huawei</a>
          <a href="#" className="hover:text-white">Pixii</a>
          <a href="#" className="hover:text-white">SAJ</a>
          <a href="#" className="hover:text-white">Emaldo</a>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-5 md:col-start-2 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-8 space-y-4 md:space-y-0 text-lightNeon">
          <div className="flex flex-col md:w-1/3">
            <h3 className="font-bold mb-4 text-energy">Vill få de senaste nyheterna?</h3>
            <p className="mb-4">Glöm inte att prenumerera till vårt nyhetsbrev!</p>
          </div>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full md:w-1/2">
            <input
              type="email"
              placeholder="Skriv din email adress här"
              className="w-full md:w-2/3 px-4 py-2 rounded-lg bg-white text-darkNature border border-energy focus:outline-none"
            />
            <button
              type="submit"
              className="bg-energy text-darkNature rounded-full px-6 py-2 ml-4 md:ml-0 mt-4 md:mt-0 hover:bg-white transition duration-300"
            >
              →
            </button>
          </div>

          {/* Checkbox Section */}
          <div className="flex flex-col md:w-auto mt-4 md:mt-0">
            <div className="flex items-start">
              <input type="checkbox" id="consent" className="mr-2 mt-1" />
              <label htmlFor="consent" className="text-sm leading-tight text-lightNeon">
                I consent to Fairweather Energy using my personal data in accordance with their privacy policy.
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="relative z-10 text-center text-sm mt-16 text-lightNeon">
        © 2024 Fairweather Energy – All Rights Reserved
      </div>
    </footer>
  );
}
