// pages/category/page.js

'use client';

import { useRouter } from 'next/navigation';

export default function Category() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    // Navigate to contact page with the selected category as a query parameter
    router.push(`contact?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex  flex-col lg:flex-row h-screen bg-blue-50 p-10 lg:p-20 space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-8">
        {/* Logo */}
        <div className="mb-6">
          <img src="hexa-logo.png" alt="Hexa Climate Logo" className="h-16 w-auto lg:h-20" />
        </div>

        {/* Title */}
        <h1 className="text-3xl w-3/4 lg:text-4xl font-bold text-center lg:text-left">
          I/My Company Is Best Identified As:
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-col items-center lg:items-start space-y-4 w-full">
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
              className="w-full lg:w-80 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center ">
        {/* Your Diagram or Content */}
        <div className="flex flex-col items-center justify-center">
          
          {/* Add your flowchart or other graphic elements here */}
          <div className="w-full max-w-lg">
            <img src="graphic01.png" alt="Flowchart" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
