// import Link from 'next/link';
// import React from 'react';
// import SignUPFrom from './Components/SignUPFrom';
// import ScolialLogin from '../signin/Components/ScolialLogin';
'use client'

import Link from "next/link";
import SocialLogin from "../signin/Components/ScolialLogin";
import SignUPFrom from "./Components/SignUPFrom";

// const SignUp = () => {
//   return (
//     <div className="w-full h-screen flex-col gap-y-11 flex items-center justify-center bg-gray-100">
//       <div className="w-4/12 p-8 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create an Account</h2>
//         <SignUPFrom />
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account? <Link href="/signin" className="text-blue-600 underline">Sign UP</Link>
//         </p>
//       </div>
//       <ScolialLogin />
//     </div>
//   );
// };

// export default SignUp;

import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Shield, 
  Sparkles,
  Github,
  Chrome,
  Facebook,
  CheckCircle2
} from 'lucide-react';

const SignUp = () => {
  return (
    <div className="min-h-screen pt-[100px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Join NextStore
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Create your account to start exploring amazing products
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 mb-6 animate-fade-in-up delay-200">
          <SignUPFrom />
          
          {/* Sign In Link */}
          <div className="mt-8 pt-6 border-t border-slate-600/50 text-center">
            <p className="text-slate-400">
              Already have an account?{' '}
              <Link href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Social Login */}
        <div className="animate-fade-in-up delay-400">
          <SocialLogin />
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-center animate-fade-in-up delay-600">
          <div className="inline-flex items-center space-x-2 text-slate-500 text-sm">
            <Shield className="w-4 h-4" />
            <span>Your data is protected with enterprise-grade security</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-8 bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 animate-fade-in-up delay-800">
          <h3 className="text-white font-semibold mb-4 text-center">Why join NextStore?</h3>
          <div className="space-y-3">
            {[
              'Access to exclusive products and deals',
              'Personalized recommendations',
              'Fast and secure checkout',
              'Order tracking and history',
              'Priority customer support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default SignUp;