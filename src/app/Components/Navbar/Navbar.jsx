"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation"; // for custom redirect
import {  ShoppingBag,  Menu, X, } from 'lucide-react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(session);

  const logOut = () => {
    setIsOpen(false);
    signOut({ redirect: false }).then(() => {
      toast.success("Logged out successfully!");
      router.push("/"); // redirect to signin or home
    });
  };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <nav className="bg-black text-white border-b-2 border-b-white px-6 md:px-20 py-4 flex items-center justify-between">
    //   {/* Logo */}
    //   <div className="text-3xl md:text-4xl font-extrabold cursor-pointer">
    //     <Link href='/'>
    //     Next <span className="font-bold text-xl md:text-2xl -ml-2.5">APP</span>
    //     </Link>
    //   </div>

    //   {/* Desktop Menu */}
    //   <ul className="hidden md:flex items-center gap-x-10 font-medium text-lg">
    //     <li>
    //       <Link href="/" className="hover:text-gray-300 transition">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/services" className="hover:text-gray-300 transition">
    //         Services
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/about" className="hover:text-gray-300 transition">
    //         About
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/contact" className="hover:text-gray-300 transition">
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* Sign In / Out (Desktop Only) */}
    //   <div className="hidden md:block">
    //     {status === "authenticated" ? (
    //       <button
    //         onClick={logOut}
    //         className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition"
    //       >
    //         Sign Out
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => router.push("/signin")}
    //         className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition"
    //       >
    //         Sign In
    //       </button>
    //     )}
    //   </div>

    //   {/* Mobile Menu Toggle */}
    //   <div
    //     className="md:hidden text-2xl cursor-pointer"
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     {isOpen ? <FaTimes /> : <FaBars />}
    //   </div>

    //   {/* Mobile Menu */}
    //   {isOpen && (
    //     <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
    //       <ul className="flex flex-col items-center gap-6 py-6 font-medium text-lg">
    //         <li onClick={() => setIsOpen(false)}>
    //           <Link href="/" className="hover:text-gray-300 transition">
    //             Home
    //           </Link>
    //         </li>
    //         <li onClick={() => setIsOpen(false)}>
    //           <Link href="/services" className="hover:text-gray-300 transition">
    //             Services
    //           </Link>
    //         </li>
    //         <li onClick={() => setIsOpen(false)}>
    //           <Link href="/about" className="hover:text-gray-300 transition">
    //             About
    //           </Link>
    //         </li>
    //         <li onClick={() => setIsOpen(false)}>
    //           <Link href="/contact" className="hover:text-gray-300 transition">
    //             Contact
    //           </Link>
    //         </li>
    //         {status === "authenticated" ? (
    //           <button
    //             onClick={logOut}
    //             className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition"
    //           >
    //             Sign Out
    //           </button>
    //         ) : (
    //           <button
    //             onClick={() => {
    //               setIsOpen(false);
    //               router.push("/signin");
    //             }}
    //             className="font-bold cursor-pointer text-xl py-1.5 px-8 bg-white text-black rounded-3xl hover:bg-gray-200 transition"
    //           >
    //             Sign In
    //           </button>
    //         )}
    //       </ul>
    //     </div>
    //   )}
    // </nav>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href='/'>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NextStore
              </span>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors font-medium">Home</Link>
              <Link href="/product" className="text-slate-300 hover:text-white transition-colors font-medium">Products</Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {status === "authenticated" ? (
          <button
            onClick={logOut}
            className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            Sign Out
          </button>) :
              (<button className="text-slate-300 cursor-pointer hover:text-white transition-colors font-medium">
              <Link href="/signin">
                Login
              </Link>
              </button>) }
              <button className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
              <div className="flex flex-col space-y-4 px-4 py-6">
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
                <Link href="/product" className="text-slate-300 hover:text-white transition-colors">Products</Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                <div className="flex flex-col space-y-3 pt-4 border-t border-slate-700">
                  <button className="text-slate-300 hover:text-white transition-colors text-left">Login</button>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
