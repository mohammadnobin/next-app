'use client'
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Headphones, 
  Shield, 
  Globe,
  Star,
  CheckCircle2,
  ArrowRight,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  User,
  Building,
  MessageSquare
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@nextstore.com",
      action: "mailto:hello@nextstore.com",
      color: "text-purple-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 NextStore Ave, Tech City, TC 12345",
      action: "#",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Working Hours",
      description: "Our support team is available",
      value: "Mon-Fri: 9AM-6PM EST",
      action: "#",
      color: "text-orange-400"
    }
  ];

  const features = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant responses to your queries"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting customers worldwide"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      message: "Outstanding customer service! The team responded within minutes and solved our issue perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Developer",
      company: "StartupXYZ",
      message: "Professional, friendly, and incredibly helpful. NextStore's support team is top-notch!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Designer",
      company: "CreativeAgency",
      message: "Quick resolution and excellent communication. They really care about their customers.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:bg-blue-500" },
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium mb-6">
              💬 Get in Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Contact Our Team
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="relative px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-600">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="group bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-700/50 group-hover:bg-purple-500/20 transition-colors ${info.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{info.description}</p>
                <p className="text-purple-300 font-medium">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-fade-in-up delay-800">
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                  <p className="text-slate-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-slate-300 mb-2 font-medium">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-slate-300 mb-2 font-medium">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="group">
                    <label className="block text-slate-300 mb-2 font-medium">Company (Optional)</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-slate-300 mb-2 font-medium">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="" className="bg-slate-800">Select a subject</option>
                      <option value="general" className="bg-slate-800">General Inquiry</option>
                      <option value="support" className="bg-slate-800">Technical Support</option>
                      <option value="sales" className="bg-slate-800">Sales Question</option>
                      <option value="partnership" className="bg-slate-800">Partnership</option>
                      <option value="feedback" className="bg-slate-800">Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-slate-300 mb-2 font-medium">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Contact Method Preference */}
                  <div>
                    <label className="block text-slate-300 mb-3 font-medium">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      {[
                        { value: 'email', label: 'Email', icon: Mail },
                        { value: 'phone', label: 'Phone', icon: Phone }
                      ].map((method) => (
                        <label key={method.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method.value}
                            checked={formData.contactMethod === method.value}
                            onChange={handleInputChange}
                            className="text-purple-500 focus:ring-purple-500/20"
                          />
                          <method.icon className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8 animate-fade-in-up delay-1000">
              {/* Features */}
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Support?</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Our Customers Say</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-slate-600/50 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-4 italic">"{testimonial.message}"</p>
                      <div className="flex items-center space-x-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium">{testimonial.name}</p>
                          <p className="text-slate-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <p className="text-slate-400 mb-6">Stay connected with us on social media for updates and news.</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 mb-12">Can't find what you're looking for? Contact us directly.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days, and often much sooner."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes! You can reach us by phone Monday through Friday, 9 AM to 6 PM EST at +1 (555) 123-4567."
              },
              {
                question: "Can I schedule a consultation?",
                answer: "Absolutely! Contact us through the form and mention you'd like to schedule a consultation."
              },
              {
                question: "Do you provide technical support?",
                answer: "Yes, our technical support team is available to help with any product-related questions or issues."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
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

export default ContactPage;