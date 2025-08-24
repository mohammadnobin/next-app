// "use client";
// import { FaGoogle } from "react-icons/fa";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { useEffect } from "react";
// export default function SocialLogin() {
//   const router = useRouter();
//   const session = useSession();

//   const handleSocialLogin = (providerName) => {
//     signIn(providerName);
//   };

//   useEffect(() => {
//     if (session?.status == "authenticated") {
//       router.push("/");
//       toast.success("Successfully Logged IN");
//     }
//   }, [session?.status]);

//   return (
//     <div className="flex justify-center gap-8">
//       <p
//         onClick={() => handleSocialLogin("google")}
//         className="bg-slate-200 rounded-full p-3"
//       >
//         <FaGoogle className="cursor-pointer" type="button" />
//       </p>
//     </div>
//   );
// }

// "use client";

// import { FaGoogle } from "react-icons/fa";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { useEffect } from "react";

// export default function SocialLogin() {
//   const router = useRouter();
//   const session = useSession();

//   const handleSocialLogin = (providerName) => {
//     signIn(providerName);
//   };

//   useEffect(() => {
//     if (session?.status === "authenticated") {
//       router.push("/");
//       toast.success("Successfully Logged In!");
//     }
//   }, [session?.status]);

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <div className="relative w-full text-center">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-gray-300" />
//         </div>
//         <div className="relative bg-slate-800 px-2 text-sm text-gray-400">
//           Or continue with
//         </div>
//       </div>

//       <div className="flex justify-center gap-4">
//         <button
//           onClick={() => handleSocialLogin("google")}
//           className="px-10 cursor-pointer bg-gradient-to-r from-purple-500  to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
//         >
//           <FaGoogle className="text-white w-5 h-5" />
//           <span className="font-medium">Continue with Google</span>
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function SocialLogin() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
              let callbackUrl = pathname.includes("login") ? "/" : pathname;
    callbackUrl = searchParams.get("callbackUrl") || callbackUrl;

  const handleSocialLogin = async (providerName) => {
    setIsLoading(true);

    try {
      await signIn(providerName);
    } catch (error) {
      toast.error("Login failed");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
          router.push(callbackUrl);
    toast.success('Logged in successfully!');
      setIsLoading(false);
    }
  }, [session?.status]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-full text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative bg-slate-800 px-2 text-sm text-gray-400">
          Or continue with
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleSocialLogin("google")}
          disabled={isLoading}
          className="px-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <FaGoogle className="text-white w-5 h-5" />
              <span className="font-medium">Continue with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
