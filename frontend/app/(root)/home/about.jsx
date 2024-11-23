import React from 'react';
import security from '../../images/security.webp';
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col lg:flex-row max-w-6xl w-full p-6 rounded-lg shadow-xl bg-white justify-center items-center">

        <div className="w-full lg:w-1/2 h-full flex justify-center items-center mb-6 lg:mb-0">
          <Image 
            src={security} 
            alt="Security"
            className="w-full h-full object-cover rounded-lg shadow-md aspect-square"
            layout="intrinsic"
            quality={100}
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center pl-6">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            M/s VRV Security Cum Man Power Agency (OPC) Private Limited is a professional security, Manpower & House Keeping, incorporated under the leadership and guidelines of Mr. Vinod Kumar (Ex-Army). We have ventured into security facility management with Regn Number U74999TN2020OPC138955 in Chennai, Tamil Nadu, India. We are assuring dedicated, trustworthy service in this field.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            We provide trained security guards and supervisors as per the requirements of our valid corporate customers. We provide upgraded training to all security staff regarding the safety of company property as well as the care of machinery parts, etc. We have trainers who can conduct training in Hindi, Tamil, or English depending on the requirements of the customer.
          </p>

          <div className="flex justify-end gap-6">
            <Link href="/contact" className="text-lg hover:text-black transition-all ease-in-out font-bold text-gray-100 bg-black hover:bg-gray-400 rounded-md px-4 py-2  duration-300">
               Get in Touch
            </Link>
            <Link href="/contact" className="text-lg hover:text-black transition-all ease-in-out font-bold text-gray-100 bg-black hover:bg-gray-400 rounded-md px-4 py-2  duration-300">
               Our Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
