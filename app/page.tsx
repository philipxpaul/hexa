// components/HeroSection.js
'use client';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleConnectClick = () => {
    router.push('/category');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Main Content */}
      <div className="lg:w-1/2 h-screen flex flex-col justify-center items-start p-10 lg:p-20 bg-blue-50">
        {/* Logo */}
        <div className="mb-6">
          <img src="/hexa-logo.png" alt="Hexa Climate Logo" className="h-16 lg:h-20 w-auto object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-600">
          Carbon Neutrality
          <br />
          <span className="text-black">as a Service</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg lg:text-xl text-gray-600">
          Hexa Climate offers Carbon Credits to Commercial & Industrial Consumers under long term offtake with <span className="font-bold">Zero pre-finance</span> requirements.
        </p>
        <p className="mt-4 text-lg lg:text-xl text-gray-600">
          Our Carbon portfolio is assessed on ESG and UN-PRI. We closely work with some of the best on-ground implementation partners, carbon consultants & dMRV providers.
        </p>

        {/* Button */}
        <button
          onClick={handleConnectClick}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-blue-800"
        >
          Connect with team
        </button>
      </div>

      {/* Right Side - Project Cards Section */}
      <div className="relative lg:w-1/2 h-screen p-10 lg:p-20 flex flex-col items-center justify-start bg-white">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/hexa-icon.png"
            alt="Hexa Logo Background"
            className="w-full lg:w-1/2 h-auto"
          />
        </div>

        <h2 className="text-3xl font-bold mb-10 relative z-10">Hexa's active projects:</h2>

        <div className="space-y-8 relative z-10">
          {/* Project Card 1 */}
          <div className="flex bg-white-10 shadow-lg p-6 rounded-lg items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                1
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold">Industrial Biochar</h3>
              <p className="text-gray-600">10TPD | Agriculture Residue based | India</p>
              <p className="text-gray-600">Puro | 6,500 CORCs/year | Available from Jul 2025</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="flex bg-white-10 shadow-lg p-6 rounded-lg items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                2
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold">ARR</h3>
              <p className="text-gray-600">Scalable | Small scale | No harvest | India</p>
              <p className="text-gray-600">VERRA | 18,000 VERs/year | Available from Jan 2026</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="flex bg-white-10 shadow-lg p-6 rounded-lg items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                3
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold">Household biogas</h3>
              <p className="text-gray-600">Small scale | Rural installations | India</p>
              <p className="text-gray-600">Gold Standard | 24,000 GS VERs/year | Available from Aug 2025</p>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="flex bg-white-10 shadow-lg p-6 rounded-lg items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                4
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-bold">Mangrove</h3>
              <p className="text-gray-600">Community based | India</p>
              <p className="text-gray-600">VERRA | 15,000 VERs/year | Available from Dec 2027</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
