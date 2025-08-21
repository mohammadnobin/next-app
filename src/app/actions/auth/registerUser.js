'use server'
import bcrypt from 'bcrypt'
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesObj.userCollection)
    const {email, password} = payload;
    if (!email || !password) return {success: false};
    const user = await userCollection.findOne({email: payload.email})
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await userCollection.insertOne(payload)
        const {_id} = result
        return {_id}
    }

    return {success: false}
}