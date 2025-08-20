'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
  const router = useRouter()
  const loginuser = true

  const handleNavigate = ()=>{
    if (loginuser) {
      router.push('/about/address/one-address')
    } else {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
            alt="About Cyber App"
            className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
         
        </div>

        {/* Right - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-secondary">CYBER APP</span>
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            CYBER APP is your one-stop hub for discovering and managing applications 
            seamlessly. We focus on delivering a smooth and responsive experience 
            across all devices, helping you explore apps faster and smarter.
          </p>
          <Link href='/about/address'>
          <button className="px-6 cursor-pointer py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/80 transition">
            Address Page
          </button>
          </Link>
          <button onClick={handleNavigate} className="px-6 cursor-pointer py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/80 transition">
            One Address Pagesdgsdfgs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
