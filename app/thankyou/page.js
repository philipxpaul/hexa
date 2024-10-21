'use client';

export default function ThankYou() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section - Thank You Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 lg:p-20 bg-blue-50 h-screen lg:h-full">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/hexa-logo.png"
              alt="Hexa Climate Logo"
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </div>
          {/* Thank You Message */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
            Thank You for Filling the Form, We Will Write Back to You Shortly!
          </h1>
          {/* Contact Information */}
          <div className="mt-6">
            <h2 className="text-lg lg:text-xl font-bold mb-2 text-black">Contact Information</h2>
            <p className="mb-4 text-black">
              <span className="font-semibold text-black">📍 Address:</span> <br />
              14th Floor, Vatika Business Park, Sohna Road, Gurugram, Haryana-122018
            </p>
            <p className="mb-4 text-black">
              <span className="font-semibold text-black">📞 Contact Number:</span> <br />
              +91 9899282359
            </p>
            <p className="mb-4 text-black">
              <span className="font-semibold text-black">✉️ Contact Email:</span> <br />
              Carbon@Hexaclimate.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Logo */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 lg:p-20 bg-white h-screen lg:h-full">
        <div className="w-full flex items-center justify-center">
          <img
            src="/hexa-icon1.png"
            alt="Hexa Climate Logo"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
