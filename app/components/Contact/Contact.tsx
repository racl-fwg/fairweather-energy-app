"use client";
import { useState } from "react";
import ContainerWrapper from "../Wrapper/ContainerWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      setError("Namn är obligatoriskt.");
      return;
    }
    if (!formData.phone && !formData.email) {
      setError("Antingen telefon eller e-post måste anges.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Tack för att du kontaktade oss! Vi återkommer inom kort.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(`Något gick fel: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error during fetch:", err);
      setError("Kunde inte skicka meddelandet. Kontrollera din anslutning och försök igen senare.");
    }
  };

  return (
    <section id="contact" className="bg-lightNeon py-16">
      <ContainerWrapper>
        <div
          className="relative bg-cover bg-center h-[800px] rounded-3xl mx-auto overflow-hidden shadow-lg flex items-center"
          style={{ backgroundImage: "url('/images/home/Contact_3D_background.png')" }}
        >
          <div className="relative z-10 bg-black bg-opacity-5 h-full w-full flex items-center">
            <ContainerWrapper>
              <div className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 px-6 lg:px-12 py-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-energy mb-6">Kontakta oss</h2>
                <p className="text-base sm:text-lg text-lightNeon mb-8">
                  Vårt team är redo att svara på era frågor och guida er genom processen. Kontakta
                  oss idag för att ta nästa steg mot en skräddarsydd batterilösning som passar just
                  era behov.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-energy font-medium mb-2" htmlFor="name">
                        Namn
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Skriv ditt namn här"
                        className="w-full px-4 py-3 border rounded-lg bg-lightNeon text-darkNature focus:outline-none focus:ring-2 focus:ring-energy"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-energy font-medium mb-2" htmlFor="phone">
                        Telefon
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Skriv ditt telefonnummer här"
                        className="w-full px-4 py-3 border rounded-lg bg-lightNeon text-darkNature focus:outline-none focus:ring-2 focus:ring-energy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-energy font-medium mb-2" htmlFor="email">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Skriv din e-postadress här"
                      className="w-full px-4 py-3 border rounded-lg bg-lightNeon text-darkNature focus:outline-none focus:ring-2 focus:ring-energy"
                    />
                  </div>

                  <div>
                    <label className="block text-energy font-medium mb-2" htmlFor="message">
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Skriv ditt meddelande här"
                      className="w-full px-4 py-3 border rounded-lg bg-lightNeon text-darkNature focus:outline-none focus:ring-2 focus:ring-energy"
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-center">{error}</p>}
                  {success && <p className="text-energy text-center">{success}</p>}

                  <button
                    type="submit"
                    className="w-full bg-energy text-darkNature px-6 py-3 text-lg font-semibold rounded-full hover:bg-white hover:text-darkNature border-2 border-energy transition duration-300"
                  >
                    Skicka
                  </button>
                </form>
              </div>
            </ContainerWrapper>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
