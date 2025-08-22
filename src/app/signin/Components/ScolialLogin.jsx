"use client";
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
const SocialLogin = () => {
  const socialProviders = [
    { name: 'Google', icon: Chrome, color: 'hover:bg-red-500/20 hover:border-red-500' },
    { name: 'GitHub', icon: Github, color: 'hover:bg-gray-500/20 hover:border-gray-500' },
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-500/20 hover:border-blue-500' }
  ];

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
      <div className="text-center mb-6">
        <p className="text-slate-400 mb-4">Or continue with</p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-slate-800 text-slate-400">Social Login</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {socialProviders.map((provider) => (
          <button
            key={provider.name}
            onClick={() => handleSocialLogin(provider.name)}
            className={`group flex items-center justify-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:border-purple-500/50 transition-all transform hover:scale-105 ${provider.color}`}
          >
            <provider.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500 text-center mt-4">
        By signing up, you'll be able to access exclusive features and personalized recommendations
      </p>
    </div>
  );
};

export default SocialLogin