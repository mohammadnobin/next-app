"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation"; // for custom redirect
import {  ShoppingBag,  Menu, X, } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname()
  
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
  if (pathName.startsWith("/dashboard")) {
  return null;
}

  return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-b-white/20 ${
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
               {status === "authenticated" &&
                  <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors font-medium">Dashboard</Link>
               }
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {status === "authenticated" ? (
                <>
               <div className="size-[50px] rounded-full bg-white/20 p-[1px]">
  {session?.user?.image ? (
    <Image
      src={session.user.image}
      alt="User Profile"
      className="w-full h-full rounded-full"
      width={50}
      height={50}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-white text-sm rounded-full bg-slate-700">
      ?
    </div>
  )}
</div>

          <button
            onClick={logOut}
            className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
            Sign Out
          </button>
            </>
          ) :
              (<button className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              <Link href="/signin">
                Login
              </Link>
              </button>) 
              }
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
                         {status === "authenticated" &&
                  <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors font-medium">Dashboard</Link>
               }
                <div className="flex flex-col space-y-3 pt-4 border-t border-slate-700">
                              {status === "authenticated" ? (

          <button
            onClick={logOut}
            className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
            Sign Out
          </button>
          ) :
              (<button className="text-slate-300 cursor-pointer hover:text-white transition-colors font-medium">
              <Link href="/signin">
                Login
              </Link>
              </button>) 
              }
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
