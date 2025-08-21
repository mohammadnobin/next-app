import Link from 'next/link';
import React from 'react';
import SignUPFrom from './Components/SignUPFrom';
import ScolialLogin from '../signin/Components/ScolialLogin';

const SignUp = () => {
  return (
    <div className="w-full h-screen flex-col gap-y-11 flex items-center justify-center bg-gray-100">
      <div className="w-4/12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create an Account</h2>
        <SignUPFrom />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link href="/signin" className="text-blue-600 underline">Sign UP</Link>
        </p>
      </div>
      <ScolialLogin />
    </div>
  );
};

export default SignUp;
