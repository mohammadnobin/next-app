import React from 'react';

const OneAddressPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
            One Address Page
          </h1>
          <p className="text-gray-200 mt-2 text-sm md:text-base">
            Find our main office and get in touch easily
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          
          {/* Left - Address Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Our Office</h2>
            <p className="text-gray-600 leading-relaxed">
              Cyber App HQ <br />
              1234 Main Street <br />
              Dhaka, Bangladesh 1205
            </p>
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> +880 1234 567 890</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> support@cyberapp.com</p>
            </div>

            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>

          {/* Right - Map Preview */}
          <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?auto=format&fit=crop&w=800&q=80"
              alt="Map Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OneAddressPage;
