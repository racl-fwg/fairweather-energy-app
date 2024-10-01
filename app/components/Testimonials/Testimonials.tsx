import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-16 bg-lightNeon">
      <div className="container mx-auto px-4">
        {/* Header Section - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Title */}
          <div>
            <h2 className="text-nature text-4xl font-bold">
              Hear what our customers think about Fairweather Energy
            </h2>
          </div>
          {/* Description */}
          <div>
            <p className="text-darkNature text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex justo, pulvinar at
              efficitur at, suscipit nec lacus. Morbi rutrum massa necartos imperdiet tincidunt.
              Vivamus quis bibendum turpis.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Individual Testimonial Card */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Image
                src="/images/testimonial1.jpg"
                alt="Camilla Lundin"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-nature text-xl font-semibold">Camilla Lundin</h3>
              <p className="text-darkNature text-sm">Business Manager</p>
              <p className="text-darkNature mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis malesuada purus,
                nec laoreet sapien scelerisque.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Image
                src="/images/testimonial2.jpg"
                alt="Carl Ekberg"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-nature text-xl font-semibold">Carl Ekberg</h3>
              <p className="text-darkNature text-sm">CFO</p>
              <p className="text-darkNature mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis malesuada purus,
                nec laoreet sapien scelerisque.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Image
                src="/images/testimonial3.jpg"
                alt="Jonas Svensson"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-nature text-xl font-semibold">Jonas Svensson</h3>
              <p className="text-darkNature text-sm">Business Manager</p>
              <p className="text-darkNature mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis malesuada purus,
                nec laoreet sapien scelerisque.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Image
                src="/images/testimonial4.jpg"
                alt="Johanna Ekstedt"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-nature text-xl font-semibold">Johanna Ekstedt</h3>
              <p className="text-darkNature text-sm">Head of Marketing</p>
              <p className="text-darkNature mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis malesuada purus,
                nec laoreet sapien scelerisque.
              </p>
            </div>
          </div>

          {/* Carousel Navigation - Adjusted to be underneath the carousel */}
          <div className="flex justify-end mt-8">
            <button className="flex items-center justify-center bg-darkNature text-energy p-4 rounded-full mx-2 hover:bg-nature transition duration-200">
              <span className="sr-only">Previous</span>
              {/* Left Arrow Icon */}
              <span className="text-2xl">&lt;</span>
            </button>
            <button className="flex items-center justify-center bg-darkNature text-energy p-4 rounded-full mx-2 hover:bg-nature transition duration-200">
              <span className="sr-only">Next</span>
              {/* Right Arrow Icon */}
              <span className="text-2xl">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
