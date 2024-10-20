'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category,
      ...formData,
    };

    try {
      const res = await fetch('/api/saveToGoogleSheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Details saved successfully!');
        window.location.href = '/thankyou';
      } else {
        alert('Failed to save details.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen bg-blue-50">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10 lg:p-20 h-auto lg:h-full">
        <div className="bg-white p-10 rounded-lg w-full max-w-lg shadow-md">
          {/* Logo */}
          <div className="mb-6 text-left">
            <img
              src="/hexa-logo.png"
              alt="Hexa Climate Logo"
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Display Category */}
          {category && (
            <div className="text-left mb-6">
              <h2 className="text-xl font-semibold text-black lg:text-blue-600">
                Selected Category: <span className="text-blue-600">{category}</span>
              </h2>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-left mb-6 text-black">
              Please Share Your Coordinates And We Will Get Back To You:
            </h1>

            {/* Form Fields */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4 w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization Name"
              value={formData.organization}
              onChange={handleChange}
              className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Company Email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />
            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="mb-4 w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-96 lg:h-full p-10 lg:p-20 bg-white">
        <div className="w-full max-w-lg">
          <img
            src="/form-image.png"
            alt="Renewable Energy"
            className="w-full h-full object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
