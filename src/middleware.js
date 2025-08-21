// import { getToken } from "next-auth/jwt"
// import { NextResponse } from "next/server"

// export const middleware = async (req) => {

//     const token = await getToken({
//         req,
//         secret: process.env.NEXTAUTH_SECRET,
//         secureCookie: process.env.NODE_ENV === "production" ? true : false,
//     })

//     if (token) {

//         return NextResponse.next()
//     } else {
//         return NextResponse.redirect(new URL('/signin', req.url))
//     }

// }

// export const config = {
//     matcher: [
//         '/services',
//     ],
// }

// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const requestedPath = req.nextUrl.pathname;

  if (token) {
    return NextResponse.next();
  } else {
    const signinUrl = new URL(`/signin`, req.url);
    signinUrl.searchParams.set("callbackUrl", requestedPath);
    return NextResponse.redirect(signinUrl);
  }
};

export const config = {
  matcher: [
    "/services", // Add more protected routes if needed
  ],
};
