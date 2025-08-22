'use client';
import React from 'react';
import toast from 'react-hot-toast';

const AddProductPage = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const product = {
    name: formData.get('name'),
    price: parseFloat(formData.get('price')),
    category: formData.get('category'),
    brand: formData.get('brand'),
    image: formData.get('image'),
    description: formData.get('description'),
  };

  try {
    const res = await fetch('https://nextjs-first-project-wheat.vercel.app/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const postData = await res.json();

    if (postData?.acknowledged) {
      toast.success("✅ Product uploaded successfully!");
      form.reset(); // Optional: Clear the form
    } else {
      toast.error("❌ Failed to upload product.");
    }

  } catch (error) {
    console.error(error);
    toast.error("🚨 Something went wrong while uploading.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Add New Product
          </h1>
          <p className="text-gray-300">
            Create a new product listing with detailed information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-slate-300 mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Premium Coffee Maker"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-slate-300 mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              required
              placeholder="e.g. 299"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-slate-300 mb-1">Category</label>
            <input
              type="text"
              name="category"
              required
              placeholder="e.g. appliances"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-slate-300 mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              required
              placeholder="e.g. BrewMaster"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-slate-300 mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              required
              placeholder="https://images.unsplash.com/..."
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-300 mb-1">Description</label>
            <textarea
              name="description"
              required
              placeholder="Brew the perfect cup with programmable settings"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
            >
              Upload Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
