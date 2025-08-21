import Link from 'next/link';
import React from 'react';
import SignInFrom from './Components/SignInFrom';

const SignIN = () => {
    return (
<div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign in Account</h2>
        <SignInFrom />

        <p className="mt-4 text-center text-sm text-gray-600">
          Create a new account? <Link href="/signup" className="text-blue-600 underline">Sign UP</Link>
        </p>
      </div>
    </div>
    );
};

export default SignIN;