import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Users, Zap, Shield, ArrowRight, Play } from 'lucide-react';

export default function ProjectSections() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Super-Fast Checkout",
    description: "Deliver lightning-fast, seamless checkout experiences that increase conversions and reduce cart abandonment."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Accept payments globally with built-in fraud protection and industry-standard encryption."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Management",
    description: "Track, engage, and support your customers with built-in CRM tools and real-time insights."
  }
];

const stats = [
  { number: "99.99%", label: "Transaction Success" },
  { number: "75K+", label: "Merchants Powered" },
  { number: "180+", label: "Supported Countries" },
  { number: "24/7", label: "Customer Support" }
];


  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Section 1: Hero Features */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
  Power Your
  <span className="block">Online Store</span>
</h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  Sell smarter, scale faster. Everything you need to run, manage, and grow your eCommerce business — in one powerful platform.
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-white/10 backdrop-blur-lg border border-white/20' 
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8'
                  } rounded-2xl p-6`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      activeFeature === index 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' 
                        : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeFeature === index ? 'rotate-90 text-purple-400' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
                    {features[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{features[activeFeature].title}</h3>
                    <p className="text-gray-300">{features[activeFeature].description}</p>
                  </div>
                  <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center space-x-2 mx-auto">
                    <Play className="w-4 h-4" />
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Section 2: Stats & CTA */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-purple-400/50">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <h5 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to Build the
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Future Together?
                </span>
              </h5>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of developers who are already transforming their ideas into 
                reality with our powerful platform and cutting-edge tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 mt-8 text-gray-400">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 50,000+ developers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}