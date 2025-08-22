import React from 'react';
import { ChevronDown, ShoppingBag, Star, ArrowRight, Menu, X, Zap, Shield, Globe, Users } from 'lucide-react';
const Footer = () => {
    return (
    // <footer className="bg-black text-gray-300 mt-10">
    //   <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
    //     {/* Brand / About */}
    //     <div>
    //       <h2 className="text-2xl font-bold text-white">CYBER APP</h2>
    //       <p className="mt-3 text-sm text-gray-400">
    //         Your favorite application hub. Easy to use and responsive on all devices.
    //       </p>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
    //       <ul className="space-y-2 text-gray-400">
    //         <li><a href="/" className="hover:text-white transition">Home</a></li>
    //         <li><a href="/about" className="hover:text-white transition">About Us</a></li>
    //         <li><a href="/services" className="hover:text-white transition">Services</a></li>
    //         <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
    //       </ul>
    //     </div>

    //     {/* Social Links */}
    //     <div>
    //       <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
    //       <div className="flex space-x-4 text-gray-400 text-xl">
    //         <a href="#" className="hover:text-white transition"><FaFacebook /></a>
    //         <a href="#" className="hover:text-white transition"><FaTwitter /></a>
    //         <a href="#" className="hover:text-white transition"><FaInstagram /></a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
    //     © {new Date().getFullYear()} CYBER APP. All rights reserved.
    //   </div>
    // </footer>
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-slate-900/80 border-t border-slate-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NextStore
                </span>
              </div>
              <p className="text-slate-400 max-w-md mb-6">
                Experience the future of e-commerce with our cutting-edge platform built on Next.js 15. 
                Discover amazing products and enjoy seamless shopping.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 hover:bg-slate-800 rounded-lg flex items-center justify-center bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 hover:bg-slate-800 rounded-lg flex items-center justify-center bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 hover:bg-slate-800 rounded-lg flex items-center justify-center bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Home</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Products</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">About Us</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Help Center</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="block text-slate-400 hover:text-purple-400 transition-colors">FAQ</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 NextStore. Built with Next.js 15. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;