'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaMailBulk } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import security from '../images/security.webp';
import Image from 'next/image';

function Nav() {
  const [selectedState, setSelectedState] = useState("Home");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navItems = [
    'Home', 'Sign-In', 'Services', 'Gallery', 'Contact Us'
  ];

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);

  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (isMobileMenuOpen && !navbarRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenuOnClickOutside);

    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative bg-gray-50">
      <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 justify-around w-full">
          <a href="mailto: vrvseccumman10@gmail.com" className="hover:text-gray-300 flex items-center space-x-2">
            <FaMailBulk /><span>vrvseccumman10@gmail.com</span>
          </a>
          <a href="tel: +91 92077 42579 | +91 92070 42579" className="hover:text-gray-300 flex items-center space-x-2">
            <span>+91 92077 42579 | +91 92070 42579</span>
          </a>
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="bg-white py-6 px-4 flex justify-between mx-5 items-center">
        <div className="flex items-center space-x-6">
          <GoHome className="text-2xl text-gray-600" />
          <div className="text-gray-700">
            <p>No 10, Jyothi Nagar, 1st Street, Mudichur Rd, West Tambaram, Chennai, Tamil Nadu 600045</p>
          </div>
        </div>
        <div className="text-gray-700 font-semibold">Open 24 Hours</div>
      </div>

      <div
        ref={navbarRef}
        className={`bg-gray-800 py-4 px-6 text-white ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''} transition-all duration-300`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <Link href="/">Managix</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className={`text-lg ${selectedState === item ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'} transition-all duration-300`}
                onClick={() => setSelectedState(item)}
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className={`block text-lg ${selectedState === item ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'} transition-all duration-300`}
                onClick={() => setSelectedState(item)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative py-6 px-4 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${security.src})`, backgroundAttachment: 'fixed' }}
      >
      </div>
    </div>
  );
}

export default Nav;
