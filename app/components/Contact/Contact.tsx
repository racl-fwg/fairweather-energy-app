"use client";
import { useState } from "react";

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // State for error messages and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from refreshing

    console.log("Form submission triggered."); // Debug log

    // Form validation
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
      console.log("Sending form data to API:", formData); // Debug log

      // Send data to the /api/contact endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response from API:", response); // Debug log

      if (response.ok) {
        const responseData = await response.json();
        setSuccess("Tack för att du kontaktade oss! Vi återkommer inom kort.");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form fields
      } else {
        const errorData = await response.json();
        setError(`Något gick fel: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error during fetch:", err); // Log error for debugging
      setError("Kunde inte skicka meddelandet. Kontrollera din anslutning och försök igen senare.");
    }
  };

  return (
    <section id="contact" className="bg-lightNeon py-16">
      <div
        className="relative bg-cover bg-center h-[900px] md:h-[800px] lg:h-[800px] rounded-2xl mx-auto max-w-7xl overflow-hidden shadow-lg flex items-center justify-center"
        style={{ backgroundImage: "url('/images/home/Contact_3D_background.png')" }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-let">
          <div className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 px-6 lg:px-12 xl:px-16 py-8">
            <h2 className="text-5xl font-bold text-energy mb-6">Kontakta oss</h2>
            <p className="text-lg text-lightNeon mb-8">
              Vårt team är redo att svara på era frågor och guida er genom processen. Kontakta oss idag för att ta nästa steg mot en skräddarsydd batterilösning som passar just era behov.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone Fields */}
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

              {/* Email Field */}
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

              {/* Message Field */}
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

              {/* Display Error or Success Messages */}
              {error && <p className="text-red-500 text-center">{error}</p>}
              {success && <p className="text-energy text-center">{success}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-energy text-darkNature px-6 py-3 text-lg font-semibold rounded-full hover:bg-white hover:text-darkNature border-2 border-energy transition duration-300"
              >
                Skicka
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
