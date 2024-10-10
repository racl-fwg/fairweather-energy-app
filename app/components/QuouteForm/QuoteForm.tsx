import React, { useState } from 'react';

interface QuoteFormProps {
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose }) => {
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

  const [formError, setFormError] = useState('');

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

    // Check for required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setFormError('Vänligen fyll i alla obligatoriska fält.');
      return;
    }

    setFormError('');

    // Submit the form
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
            label="Postnummer*"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
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
