import React from 'react';
import securityImage from '../../images/security.webp';
import Link from 'next/link';

function Security() {
  return (
    <div
      className="relative flex w-full min-h-[70vh] justify-center items-center bg-cover bg-center bg-fixed transition-all ease-in-out"
      style={{
        backgroundImage: `url(${securityImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center px-6">
        <Link 
          className="px-8 py-4 hover:bg-slate-500 bg-slate-200 text-black hover:text-white rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition duration-300 shadow-2xl transform hover:scale-105 cursor-pointer drop-shadow-lg animate-pulse hover:no-animate"
          href="/join"
        >
          Join our Team
        </Link>
        <Link 
          className="px-8 py-4 hover:bg-slate-500 bg-slate-200 text-black hover:text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition duration-300 shadow-2xl transform hover:scale-105 cursor-pointer drop-shadow-lg"
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Security;
