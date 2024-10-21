// components/HeroSection.js
'use client';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleConnectClick = () => {
    router.push('/category');
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen h-screen w-full">
        {/* Left Side - Main Content */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 lg:p-10 bg-blue-50">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight mb-4">
            Carbon Neutrality
            <br />
            <span className="text-black">as a Service</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-black mb-2">
            Hexa Climate offers Carbon Credits to Commercial & Industrial Consumers under long-term offtake with <span className="font-bold">Zero pre-finance</span> requirements.
          </p>
          <p className="text-base md:text-lg text-black mb-4">
            Our Carbon portfolio is assessed on ESG and UN-PRI. We closely work with some of the best on-ground implementation partners, carbon consultants & dMRV providers.
          </p>

          {/* Button */}
          <button
            onClick={handleConnectClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-blue-800"
          >
            Connect with team
          </button>
        </div>

        {/* Right Side - Project Cards Section */}
        <div className="relative flex-1 flex flex-col items-center justify-center p-4 lg:p-10 bg-white">
          {/* Background Logo */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <img
              src="/hexa-icon.png"
              alt="Hexa Logo Background"
              className="w-2/3 lg:w-1/2 h-auto object-contain"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 text-black text-center">
            Hexa&apos;s Active Projects:
          </h2>

          <div className="space-y-3 w-full max-w-md relative z-10">
            {/* Project Cards */}
            {[
              {
                title: 'Industrial Biochar',
                details: '10TPD | Agriculture Residue based | India',
                credits: 'Puro | 6,500 CORCs/year | Available from Jul 2025',
              },
              {
                title: 'ARR',
                details: 'Scalable | Small scale | No harvest | India',
                credits: 'VERRA | 18,000 VERs/year | Available from Jan 2026',
              },
              {
                title: 'Household Biogas',
                details: 'Small scale | Rural installations | India',
                credits: 'Gold Standard | 24,000 GS VERs/year | Available from Aug 2025',
              },
              {
                title: 'Mangrove',
                details: 'Community based | India',
                credits: 'VERRA | 15,000 VERs/year | Available from Dec 2027',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-md p-3 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-black">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.details}</p>
                  <p className="text-gray-600 text-sm">{project.credits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
