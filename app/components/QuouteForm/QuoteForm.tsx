// app/components/QuoteForm/QuoteForm.tsx
import React, { useState } from 'react';

interface QuoteFormProps {
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zipCode: '',
    city: '',
    propertyType: 'Villa',
    phone: '',
    interestedIn: {
      solceller: false,
      batterier: false,
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
  
    // Use a type guard to check if the target is a checkbox
    if (e.target instanceof HTMLInputElement && type === 'checkbox') {
      const { checked } = e.target; // Now `checked` is available only on `HTMLInputElement`
      setFormData((prev) => ({
        ...prev,
        interestedIn: {
          ...prev.interestedIn,
          [name]: checked,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to match the expected format for the API
    const formToSend = {
      ...formData,
      interestedIn: {
        solceller: formData.interestedIn.solceller,
        batterier: formData.interestedIn.batterier,
      },
    };

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formToSend),
      });

      if (response.ok) {
        console.log('Form successfully submitted.');
        onClose();
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-lightNeon p-8 rounded-xl w-full max-w-2xl shadow-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-darkNature">Få en offert</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-darkNature mb-1">Namn*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
          <div>
            <label className="block text-darkNature mb-1">Efternamn*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-darkNature mb-1">E-post*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
          <div>
            <label className="block text-darkNature mb-1">Telefonnummer*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
        </div>

        {/* Address Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-darkNature mb-1">Adress*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
          <div>
            <label className="block text-darkNature mb-1">Postnummer*</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded text-lg text-darkNature focus:outline-none focus:ring-2 focus:ring-[#005e43]"
              required
            />
          </div>
        </div>

        {/* Interest Checkboxes */}
        <div className="space-y-2">
          <label className="block text-darkNature mb-1">Vad är du intresserad av?*</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="solceller"
                checked={formData.interestedIn.solceller}
                onChange={handleChange}
                className="mr-2"
              />
              Solceller
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="batterier"
                checked={formData.interestedIn.batterier}
                onChange={handleChange}
                className="mr-2"
              />
              Batterier
            </label>
          </div>
        </div>

        {/* Submit and Cancel */}
        <div className="flex justify-between mt-6">
          <button type="button" onClick={onClose} className="text-red-500">
            Cancel
          </button>
          <button type="submit" className="bg-[#003317] text-[#E9FF66] py-2 px-4 rounded">
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
