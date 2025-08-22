import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Glowing Spinner */}
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin shadow-lg"></div>

        {/* Text */}
        <p className="text-white text-lg font-semibold tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
