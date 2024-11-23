import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdHome, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  const footerName = "Managix";

  return (
    <footer className="bg-[#18092f] text-white min-h-[70vh] flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-around items-center w-full px-6 max-w-6xl">
        <div className="w-full md:w-1/3 mb-8 flex flex-col items-center text-center md:text-left md:items-start md:border-r-4 border-slate-300 pr-7">
          <Link href="/">
            <h1 className="text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 rounded-lg p-0 transition-all cursor-pointer duration-300 ease-in-out mb-7">
              {footerName}
            </h1>
          </Link>
          <p className="mb-4 leading-7 text-[16px] max-w-md text-justify md:text-left">
            Managix Security Cum Man Power Agency is one of the leading Security
            Services providers in Chennai. We have a team of professionally
            well-trained and managed manpower with all the foremost recent and
            propelled security instruments.
          </p>
          <div className="flex space-x-4 mt-4">
            {[
              { icon: <FaFacebookF size={20} />, link: "#" },
              { icon: <FaTwitter size={20} />, link: "#" },
              { icon: <FaGoogle size={20} />, link: "#" },
              { icon: <FaInstagram size={20} />, link: "#" },
              { icon: <FaLinkedin size={20} />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-400 hover:text-gray-300 transition duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-8 flex flex-col items-center text-center md:text-left">
          <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-orange-400 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-8 flex flex-col items-center text-center md:text-left md:items-start leading-7">
          <h6 className="text-lg font-semibold mb-4">Get in Touch</h6>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" size={20} />
            <a
              href="tel:+9207742579"
              className="hover:text-orange-400 transition duration-200"
            >
              9207742579
            </a>
            <span className="mx-1">/</span>
            <a
              href="tel:+9207042579"
              className="hover:text-orange-400 transition duration-200"
            >
              9207042579
            </a>
          </div>
          <div className="flex items-center mb-2">
            <MdEmail className="mr-2" size={20} />
            <a
              href="mailto:vrvseccumman10@gmail.com"
              className="hover:text-orange-400 transition duration-200"
            >
              vrvseccumman10@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-2">
            <GoClock className="mr-2" size={20} />
            <span>Office Hour: 24 Hours</span>
          </div>
          <div className="flex items-center mb-2">
            <MdHome className="mr-2" size={20} />
            <span className="text-center md:text-left">
              Jyothi Nagar, 1st Street, Mudichur Rd, West Tambaram, Chennai,
              Tamil Nadu 600045
            </span>
          </div>
        </div>
      </div>

      <hr className="w-full max-w-6xl mx-6 my-4" />

      <div className="text-center py-6 w-full">
        <p className="text-gray-200 font-semibold text-xl">
          <a
            href="#"
            rel="noopener noreferrer"
            className="text-slate-400 font-bold hover:text-slate-300 duration-200 hover:border-b-slate-600 hover:border-b-4 px-4 rounded-3xl transition-all ease-in-out"
          >
            2024 all rights reserved
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
