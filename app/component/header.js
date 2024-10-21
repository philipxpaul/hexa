// components/Header.js
'use client';

export default function Header() {
  return (
    <header className="w-full bg-white p-4 shadow-md flex items-center justify-between lg:justify-start">
      {/* Logo */}
      <div className="flex items-center justify-center w-full lg:w-auto lg:ml-6">
        <img
          src="/hexa-logo.png"
          alt="Hexa Climate Logo"
          className="h-11 w-auto lg:h-20 object-contain"
        />
      </div>
    </header>
  );
}
