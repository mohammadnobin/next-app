import Link from 'next/link';
import React from 'react';
import SignUPFrom from './Components/SignUPFrom';

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create an Account</h2>
        <SignUPFrom />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link href="/signin" className="text-blue-600 underline">Sign UP</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
