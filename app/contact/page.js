'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get('category');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    organization: false,
    email: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {
      name: !formData.name,
      organization: !formData.organization,
      email: !formData.email,
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.organization || newErrors.email) {
      setLoading(false);
      return;
    }

    setLoading(true);

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
        // Keep loading true while redirecting to avoid flash
        router.push('/thankyou');
      } else {
        alert('Failed to save details.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-blue-50">
      {loading ? (
        // Loader Section
        <div className="flex justify-center items-center h-screen w-full bg-blue-50">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* Form Section */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-5 lg:p-20 h-screen lg:h-full">
            <div className="bg-white p-5 rounded-lg w-full max-w-lg shadow-md">
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
                <div className="text-left mb-4">
                  <h2 className="text-lg font-semibold text-black lg:text-blue-600">
                    Selected Category: <span className="text-blue-600">{category}</span>
                  </h2>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl lg:text-2xl font-bold text-left mb-4 text-black">
                  Drop your details, we’ll connect
                </h1>

                {/* Form Fields */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mb-2 w-full p-3 border ${errors.name ? 'border-red-500' : 'border-blue-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black`}
                />
                {errors.name && <p className="text-red-500 mb-2">Name is required.</p>}

                <input
                  type="text"
                  name="organization"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`mb-2 w-full p-3 border ${errors.organization ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black`}
                />
                {errors.organization && <p className="text-red-500 mb-2">Organization Name is required.</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Company Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mb-2 w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black`}
                />
                {errors.email && <p className="text-red-500 mb-2">Email is required.</p>}

                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
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

          {/* Image Section - Hidden on Mobile */}
          <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 h-full p-8 lg:p-20 bg-white">
            <div className="w-full max-w-lg">
              <img
                src="/form-image.png"
                alt="Renewable Energy"
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </>
      )}

      {/* Loader Styles */}
      <style jsx>{`
        .loader {
          border: 8px solid rgba(0, 0, 255, 0.2);
          border-top: 8px solid blue;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
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
