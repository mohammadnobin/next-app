"use client";
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";

const ScolialLogin = () => {
    const handleSocialLogin = async (providerName) => {
        const result = await signIn(providerName, {redirect: false})
        console.log(result);
    }
    return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      
    </div>
    );
};

export default ScolialLogin;