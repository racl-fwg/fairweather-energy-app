// Quote.tsx
import Image from 'next/image';

export default function Quote() {
  return (
    <section className="bg-lightNeon py-16">
      {/* Dark Nature Background Wrapper */}
      <div className="bg-darkNature rounded-lg shadow-lg mx-auto max-w-7xl">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Form Section */}
          <div className="p-8 text-left text-energy">
            <h2 className="text-4xl font-bold mb-4">Get a quote</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex justo, pulvinar at efficitur at, suscipit nec lacus.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name here"
                    className="w-full px-4 py-3 border rounded-lg bg-white text-darkNature"
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number here"
                    className="w-full px-4 py-3 border rounded-lg bg-white text-darkNature"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email here"
                  className="w-full px-4 py-3 border rounded-lg bg-white text-darkNature"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full px-4 py-3 border rounded-lg bg-white text-darkNature"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-energy text-darkNature px-6 py-3 text-lg font-semibold rounded-full hover:bg-white transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex justify-center p-8">
            <Image
              src="/images/northern-theme-ESS.png"
              alt="Energy Storage System"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
