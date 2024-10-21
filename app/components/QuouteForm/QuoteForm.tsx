'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface QuoteFormProps {
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '', // Ort field instead of Postnummer
    propertyType: 'Villa', // Default value for the dropdown
    phone: '',
    interestedIn: {
      solceller: false,
      batterier: false,
      konsultation: false,
      ci: false, // C&I option
    },
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false); // Control form display
  const [displaySuccess, setDisplaySuccess] = useState(false); // Control success message display
  const [isSubmitting, setIsSubmitting] = useState(false); // To prevent double submission

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        interestedIn: {
          ...prev.interestedIn,
          [name]: (e.target as HTMLInputElement).checked,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true); // Set the flag to indicate the form is being submitted

    // Clear previous messages
    setFormError('');

    // Check for required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFormError('Vänligen fyll i alla obligatoriska fält.');
      setIsSubmitting(false); // Reset the flag
      return;
    }

    // Submit the form
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSuccess(true); // Form submitted successfully

        // After 20s, reset the form to allow another submission
        setTimeout(() => {
          setDisplaySuccess(false);
          onClose(); // Close form after 20s
        }, 20000);
      } else {
        const errorData = await response.json();
        setFormError(`Något gick fel: ${errorData.message}`);
      }
    } catch (error) {
      setFormError('Kunde inte skicka meddelandet. Försök igen senare.');
    } finally {
      setIsSubmitting(false); // Reset the flag after the form is submitted
    }
  };

  if (formSuccess) {
    return (
      <div className="bg-lightNeon p-8 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col justify-center items-center" style={{ height: '100%' }}>
        {/* Display the logo */}
        <Image
          src="/logotypes/Fairweather_Symbol_Energy_RGB.png"
          alt="Fairweather Energy Logo"
          width={80}
          height={80}
          className="mb-6"
        />
        {/* Success message */}
        <h2 className="text-2xl font-semibold mb-4 text-darkNature text-center">
          Tack för ert intresse! Vi återkommer inom kort.
        </h2>
        {/* Return link with same function as "Avbryt" */}
        <button onClick={onClose} className="text-red-500 text-lg mt-4 hover:underline">
          Tillbaka till sidan
        </button>
      </div>
    );
  }

  return (
    <div className="bg-lightNeon p-8 rounded-xl w-full max-w-2xl shadow-2xl" style={{ height: '100%' }}>
      <h2 className="text-2xl font-semibold mb-6 text-darkNature">Få en offert</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Display Form Error */}
        {formError && <p className="text-red-500">{formError}</p>}

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Namn*"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Efternamn*"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="E-post*"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Telefonnummer*"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Fields */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Adress*"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <InputField
            label="Ort*"
            name="city" // Ort field
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Property Type Dropdown */}
        <div>
          <label className="block text-darkNature mb-1">Fastighetstyp</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
          >
            <option value="Villa">Villa</option>
            <option value="Industri">Industri</option>
            <option value="Lantbruk">Lantbruk</option>
            <option value="Föreningsfastighet">Föreningsfastighet</option>
          </select>
        </div>

        {/* Interest Checkboxes */}
        <div className="space-y-2">
          <label className="block text-darkNature mb-1">Vad är du intresserad av?*</label>
          <div className="flex space-x-4">
            <CheckboxField
              label="Solceller"
              name="solceller"
              checked={formData.interestedIn.solceller}
              onChange={handleChange}
            />
            <CheckboxField
              label="Batterier"
              name="batterier"
              checked={formData.interestedIn.batterier}
              onChange={handleChange}
            />
            <CheckboxField
              label="C&I"
              name="ci"
              checked={formData.interestedIn.ci}
              onChange={handleChange}
            />
            <CheckboxField
              label="Konsultation"
              name="konsultation"
              checked={formData.interestedIn.konsultation}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-darkNature mb-1">Meddelande</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
            placeholder="Skriv ditt meddelande här"
          ></textarea>
        </div>

        {/* Submit and Cancel */}
        <div className="flex justify-between mt-6">
          <button type="button" onClick={onClose} className="text-red-500">
            Avbryt
          </button>
          <button type="submit" className="bg-[#003317] text-[#E9FF66] py-2 px-4 rounded" disabled={isSubmitting}>
            {isSubmitting ? 'Skickar...' : 'Skicka'}
          </button>
        </div>
      </form>
    </div>
  );
};

// Input Field Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-darkNature mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
    />
  </div>
);

// Checkbox Field Component
const CheckboxField = ({
  label,
  name,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    {label}
  </label>
);

export default QuoteForm;
