'use client';

export default function ThankYou() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Thank You Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 lg:p-20 bg-blue-50">
        <div className="w-3/4">
          <div className="mb-6">
            <img src="/hexa-logo.png" alt="Hexa Climate Logo" className="h-16 lg:h-20 w-auto object-contain" />
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Thank You For Filling The Form, We Will Write Back To You Shortly!
          </h1>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Contact Information</h2>
            <p className="mb-4">
              <span className="font-semibold">📍 Address:</span> <br />
              14th Floor, Vatika Business Park, Sohna Road, Gurugram, Haryana-122018
            </p>
            <p className="mb-4">
              <span className="font-semibold">📞 Contact Number:</span> <br />
              +91 9899282359
            </p>
            <p>
              <span className="font-semibold">✉️ Contact Email:</span> <br />
              Carbon@Hexaclimate.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Logo */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 lg:p-20 bg-white">
        <div>
          <img src="/hexa-icon1.png" alt="Hexa Climate Logo" className="h-full w-full max-w-xs object-contain" />
        </div>
      </div>
    </div>
  );
}
