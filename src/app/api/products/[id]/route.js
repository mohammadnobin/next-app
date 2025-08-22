import { ObjectId } from "mongodb";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
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
