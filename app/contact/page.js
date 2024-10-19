'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Contact() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Add useRouter hook
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

    // Combine category and form data to send to Google Sheets
    const payload = {
      category,
      ...formData,
    };

    // Call Google Sheets API to save the data
    try {
      console.log(payload);
      const res = await fetch('/api/saveToGoogleSheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Details saved successfully!');
        router.push('/thankyou'); // Redirect to thankyou page
      } else {
        alert('Failed to save details.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-10">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 text-center">
          <img src="/logo.png" alt="Hexa Climate Logo" className="h-12 w-12 mx-auto" />
        </div>

        {/* Display Category */}
        {category && (
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">
              You selected: <span className="text-blue-600">{category}</span>
            </h2>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">
            Please Share Your Coordinates And We Will Get Back To You:
          </h1>

          {/* Form Fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization Name"
            value={formData.organization}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
