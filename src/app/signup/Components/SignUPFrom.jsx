'use client'
import React from 'react';

const SignUPFrom = () => {
    const handleSubmit = e =>{
        e.preventDefault()
    }
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

    );
};

export default SignUPFrom;