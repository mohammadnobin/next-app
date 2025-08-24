// lib/auth.js

import { getToken } from "next-auth/jwt";

export async function verifyJWT(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return null;
  }

  return token;
}
