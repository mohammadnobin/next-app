"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b-2 border-b-white px-6 md:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-3xl md:text-4xl font-extrabold cursor-pointer">
        Next <span className="font-bold text-xl md:text-2xl -ml-2.5">APP</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-x-10 font-medium text-lg">
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-300 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Sign In Button (Desktop Only) */}
      <div className="hidden md:block">
        <button className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition">
          <Link href='/signin'>
              Sign In
              </Link>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
            <li onClick={() => setIsOpen(false)}>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/services" className="hover:text-gray-300 transition">
                Services
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
            <button
              onClick={() => setIsOpen(false)}
              className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition"
            >
              <Link href='/signin'>
              Sign In
              </Link>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
