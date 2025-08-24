"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

import toast from "react-hot-toast";
import { registerUser } from "@/app/actions/auth/registerUser";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "", color: "" };

    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];

    return {
      strength: (strength / 3) * 100,
      label: labels[strength - 1] || "",
      color: colors[strength - 1] || "bg-gray-300",
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!agreedToTerms) {
    toast.error("You must agree to the terms and conditions");
    return;
  }

  setIsLoading(true);
  try {
    const res = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (res.acknowledged) {
      toast.success("Account created successfully!");
            router.push('/');
      try {
        const response = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (response.ok) {
    toast.success('Logged in successfully!');
     
          setFormData({ name: "", email: "", password: "" });
          setAgreedToTerms(false);
        } else {
          toast.error('Failed to log in. Please check your credentials.');
        }
      } catch (error) {
        toast.error('An error occurred while signing in.');
      }

    } else {
      toast.error("Registration failed");
    }
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    setIsLoading(false);
  }
};



  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="group">
        <label className="block text-slate-300 mb-2 font-medium">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* Email */}
      <div className="group">
        <label className="block text-slate-300 mb-2 font-medium">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password */}
      <div className="group">
        <label className="block text-slate-300 mb-2 font-medium">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            placeholder="Create a strong password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-400">Password Strength</span>
              <span className="text-xs text-slate-300">
                {passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                style={{ width: `${passwordStrength.strength}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="w-5 h-5 bg-slate-700 border border-slate-600 rounded text-purple-500 focus:ring-2 focus:ring-purple-500/20 mt-1"
        />
        <label className="text-sm text-slate-400 leading-relaxed cursor-pointer">
          I agree to the{" "}
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Creating Account...</span>
          </>
        ) : (
          <>
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default SignUpForm;
