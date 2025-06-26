 

import React, { useState, useEffect, useRef } from "react";
import JobManuBar from "../../pages/JobManuBar";

function Header() {
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle Job Dropdown
  const toggleJobDropdown = () => {
    setIsJobDropdownOpen(!isJobDropdownOpen);
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsJobDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              JobPortal
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Job Listings Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleJobDropdown}
                className="text-white hover:text-blue-200 font-semibold flex items-center focus:outline-none"
              >
                Job Listings
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isJobDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg py-2 z-50">
                  <ul>
                    <li className="hover:bg-green-500 px-4 py-2">
                      <a href="#">Spoken</a>
                    </li>
                    <li className="hover:bg-green-500 px-4 py-2">
                      <a href="#">Computer Software</a>
                    </li>
                    <li className="hover:bg-green-500 px-4 py-2">
                      <a href="#">Computer Hardware</a>
                    </li>
                    <li className="hover:bg-green-500 px-4 py-2">
                      <a href="#">Coaching</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a
              href="/ Hire-Developer"
              className="text-white hover:text-blue-200 font-semibold"
            >
              Hire Developer
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-200 font-semibold"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-200 font-semibold"
            >
              Contact
            </a>
          </nav>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-white hover:text-blue-200 font-semibold"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="outline-none">
              <svg
                className="w-6 h-6 text-white"
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/jobs"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              Job Listings
            </a>
            <a
              href="/employer"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              Employer Dashboard
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              Contact
            </a>
            <a
              href="/login"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              Login
            </a>
            <a
              href="/register"
              className="block text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
 

 