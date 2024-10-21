'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Category() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (category) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`contact?category=${encodeURIComponent(category)}`);
    }, 2000); // Simulate some delay for demonstration
  };

  return (
    <>
      {loading ? (
        // Loading screen
        <div className="flex justify-center items-center h-screen bg-blue-50">
          <div className="loader"></div>
        </div>
      ) : (
        // Main content
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-10 lg:p-20 bg-blue-50 space-y-4 h-full">
            {/* Logo */}
            <div className="mb-6">
              <img src="hexa-logo.png" alt="Hexa Climate Logo" className="h-16 w-auto lg:h-20" />
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left text-black ">
              I/My Company Is Best Identified As:
            </h1>

            {/* Category Buttons */}
            <div className="flex flex-col items-center lg:items-start space-y-2 w-full max-w-lg">
              {[
                'Credit Offtaker',
                'Implementation Partner',
                'dMRV Provider',
                'Carbon Consultant',
                'Aggregator/Intermediary/Trader',
                'VVB',
              ].map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2 p-10 lg:p-20 bg-white h-full">
            {/* Diagram or Content */}
            <div className="w-full max-w-lg">
              <img src="graphic01.png" alt="Flowchart" className="rounded-lg object-contain w-full h-auto" />
            </div>
          </div>
        </div>
      )}

      {/* Inline style for the loader */}
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
    </>
  );
}
