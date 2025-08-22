

'use client'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Shield, 
  LogIn,
  Github,
  Chrome,
  Facebook,
  Star,
  Zap,
  Award,
  CheckCircle2
} from 'lucide-react';
import SocialLogin from "./Components/ScolialLogin";
import SignInFrom from "./Components/SignInFrom";
import Link from 'next/link';

const SignIN = () => {
  const stats = [
    { icon: Star, value: "50K+", label: "Happy Users" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "2x", label: "Faster Checkout" }
  ];

  return (
    <div className="min-h-screen pt-[100px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Left Side - Welcome Section */}

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 mx-auto flex items-center justify-center p-4 relative overflow-hidden">
        {/* Mobile Background Effects */}
        <div className="lg:hidden absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Mobile Header */}
          <div className=" text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/25">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-slate-400">
              Sign in to your NextStore account
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-center mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Sign In
            </h2>
            <p className="text-slate-400">
              Access your account to continue shopping
            </p>
          </div>

          {/* Main Form Card */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 mb-6 animate-fade-in-up delay-200">
            <SignInFrom />
            
            {/* Sign Up Link */}
            <div className="mt-8 pt-6 border-t border-slate-600/50 text-center">
              <p className="text-slate-400">
                Don't have an account?{' '}
                <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  Create Account
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
              <span>256-bit SSL encrypted connection</span>
            </div>
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
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
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
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default SignIN;