import React from "react";

const getProduct = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "https://nextjs-first-project-wheat.vercel.app/"}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative h-96">
          {/* Image with overlay */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-extrabold drop-shadow-lg">
            {product.name}
          </h1>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-wrap justify-between text-gray-400 text-sm font-semibold tracking-wide">
            <span className="uppercase bg-indigo-600 px-3 py-1 rounded-full">{product.category}</span>
            <span className="uppercase bg-green-600 px-3 py-1 rounded-full">{product.brand}</span>
            <span className="text-xl font-bold text-indigo-400">${product.price}</span>
          </div>

          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-lg font-semibold shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
