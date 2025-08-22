'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Zap, Heart, Users, Target, Award } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at the speed of thought"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Focused",
      description: "Every decision we make puts our users' needs and experience first"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Driven",
      description: "Meticulous attention to detail in everything we create and deliver"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime" },
    { number: "5★", label: "Rating" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`
        }}
      />
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">About Our Journey</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              We Create
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pushing boundaries and redefining what's possible in the digital realm. 
              We're not just building products—we're crafting the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                Our Story
              </button>
              <button className="px-8 py-4 border border-purple-400/30 text-purple-200 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
                Meet the Team
              </button>
            </div>
            
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-colors duration-300">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                What Drives Us
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Our core values shape every decision and fuel our passion for excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div className="text-purple-400 mb-6 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
              <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with cutting-edge solutions that exceed expectations.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <Users className="w-5 h-5" />
                Start Your Journey
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;