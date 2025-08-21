"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignInFrom = () => {
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting.....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (response.ok) {
        toast.success("Logged in successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Feiled to log in ");
      }
    } catch (error) {
          toast.error("Feiled to log in ");
    }
  };
  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      <div>
        <label className="block text-gray-600 mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@example.com"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInFrom;
