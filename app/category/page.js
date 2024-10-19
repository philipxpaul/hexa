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
    <div className="flex flex-col items-center h-screen bg-blue-50 p-10 space-y-4">
      {/* Logo */}
      <div className="mb-6">
        <img src="/logo.png" alt="Hexa Climate Logo" className="h-12 w-12" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">I/My Company Is Best Identified As:</h1>

      {/* Category Buttons */}
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
          className="w-80 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 cursor-pointer"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
