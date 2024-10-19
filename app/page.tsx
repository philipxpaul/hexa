// components/HeroSection.js
'use client';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleConnectClick = () => {
    router.push('/category');
  };

  return (
    <div className="flex justify-between bg-blue-50 p-10">
      {/* Left Side - Main Content */}
      <div className="w-1/2">
        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.png" alt="Hexa Climate Logo" className="h-12 w-12" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-blue-600">
          Carbon Neutrality
          <br />
          <span className="text-black">as a Service</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          Hexa Climate offers Carbon Credits to Commercial & Industrial Consumers under long term offtake with Zero pre-finance requirements.
        </p>
        <p className="mt-2 text-gray-600">
          Our Carbon portfolio is assessed on ESG and UN-PRI. We closely work with some of the best on-ground implementation partners, carbon consultants & dMRV providers.
        </p>

        {/* Button */}
        <button onClick={handleConnectClick} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700">
        
          Connect with team
        </button>
      </div>

      {/* Right Side - Project Cards */}
      <div className="w-1/2 space-y-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold">1. Industrial Biochar</h2>
          <p className="text-gray-600">10TPD | Agriculture Residue based | India</p>
          <p className="text-gray-600">Puro | 6,500 CORCs/year | Available from Jul 2025</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold">2. ARR</h2>
          <p className="text-gray-600">Scalable | Small scale | No harvest | India</p>
          <p className="text-gray-600">VERRA | 18,000 VERs/year | Available from Jan 2026</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold">3. Household biogas</h2>
          <p className="text-gray-600">Small scale | Rural installations | India</p>
          <p className="text-gray-600">Gold Standard | 24,000 GS VERs/year | Available from Aug 2025</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold">4. Mangrove</h2>
          <p className="text-gray-600">Community based | India</p>
          <p className="text-gray-600">VERRA | 15,000 VERs/year | Available from Dec 2027</p>
        </div>
      </div>
    </div>
  );
}
