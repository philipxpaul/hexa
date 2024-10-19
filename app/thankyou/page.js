'use client';

export default function ThankYou() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-10">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg text-center">
        <div className="mb-6">
          <img src="/logo.png" alt="Hexa Climate Logo" className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Thank You For Filling The Form, We Will Write Back To You Shortly!
        </h1>

        <div className="text-left mt-6">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-2">
            📍 <span className="font-semibold">Address:</span> 14th Floor, Vatika Business Park, Sohna Road, Gurugram, Haryana-122018
          </p>
          <p className="mb-2">
            📞 <span className="font-semibold">Contact Number:</span> +91 9899282359
          </p>
          <p>
            ✉️ <span className="font-semibold">Contact Email:</span> Carbon@Hexaclimate.Com
          </p>
        </div>
      </div>
    </div>
  );
}
