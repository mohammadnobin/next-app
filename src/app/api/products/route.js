import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
const { NextResponse } = require("next/server")
// POST: Create a new product
export const POST = async (req) =>{
    const body = await req.json();
    const productsCollections = dbConnect(collectionNamesObj.productsCollection)
    const result = await productsCollections.insertOne(body)

    return NextResponse.json(result)
}
// GET: Get all products

export const GET = async () => {
  try {
    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
    const products = await productsCollection.find().toArray();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
};

// get signle data 
export const GETSINGLE = async (req, { params }) => {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching single product:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};