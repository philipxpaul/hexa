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
          {/* Right Section - Graphic Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-20 bg-white h-1/2 lg:h-full">
            {/* Diagram or Content */}
            <div className="flex items-center justify-center w-full max-w-xs lg:max-w-md h-full">
              <img
                src="Flowww.png"
                alt="Flowchart"
                className="rounded-lg object-contain w-2/3 lg:w-auto max-w-sm lg:max-w-sm h-auto"
              />
            </div>
          </div>

          {/* Left Section - Category Buttons Section */}
          <div className="flex flex-col justify-center items-center lg:items-center w-full lg:w-1/2 p-4 lg:p-20 bg-blue-50 space-y-4 h-1/2 lg:h-full">
            {/* Logo */}
            <div className="mb-6">
              <img src="hexa-logo.png" alt="Hexa Climate Logo" className="h-12 w-auto lg:h-20" />
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold text-center text-black">
              I/My Company Is Best Identified As:
            </h1>

            {/* Category Buttons */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg lg:flex lg:flex-col lg:items-center lg:space-y-2 lg:w-full">
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
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-200"
                >
                  {category}
                </button>
              ))}
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
