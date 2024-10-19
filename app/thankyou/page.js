'use client';

export default function ThankYou() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-10">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl flex flex-row space-x-10">
        {/* Left Side */}
        <div className="flex-1">
          {/* Logo */}
          <div className="mb-6">
            <img src="/logo.png" alt="Hexa Climate Logo" className="h-12 w-12" />
          </div>
          {/* Thank You Message */}
          <h1 className="text-3xl font-bold mb-4">
            Thank You For Filling The Form, We Will Write Back To You Shortly!
          </h1>
          {/* Contact Information */}
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            {/* Address */}
            <p className="flex items-center space-x-2">
              <span className="font-bold">📍 Address:</span>
              <span>
                14th Floor, Vatika Business Park, Sohna Road, Gurugram, Haryana-122018
              </span>
            </p>
            {/* Contact Number */}
            <p className="flex items-center space-x-2">
              <span className="font-bold">📞 Contact Number:</span>
              <span>+91 9899282359</span>
            </p>
            {/* Contact Email */}
            <p className="flex items-center space-x-2">
              <span className="font-bold">✉️ Contact Email:</span>
              <span>Carbon@Hexaclimate.Com</span>
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src="/logo-large.png" // Replace with a high-resolution version of the logo if needed
            alt="Hexa Climate Logo"
            className="h-48 w-48"
          />
          <h2 className="text-xl font-semibold mt-6">Hexaclimate.com</h2>
        </div>
      </div>
    </div>
  );
}
