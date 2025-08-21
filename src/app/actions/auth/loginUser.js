"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUSer = async (payload) => {
  const { email, password } = payload;
  const usercollection = dbConnect(collectionNamesObj.userCollection);
  const user = await usercollection.findOne({ email });
  if (!user) return null;
  const isPasswordOK = await bcrypt.compare(password, user.password);

  if (!isPasswordOK) return null;
  return user;
};
