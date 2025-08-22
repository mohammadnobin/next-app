
  
  const ProductsPage = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow overflow-hidden border border-white/20">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-4 font-medium text-gray-300">Product</th>
              <th className="text-left p-4 font-medium text-gray-300">Price</th>
              <th className="text-left p-4 font-medium text-gray-300">Stock</th>
              <th className="text-left p-4 font-medium text-gray-300">Status</th>
              <th className="text-left p-4 font-medium text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium text-white">iPhone 15 Pro</p>
                    <p className="text-sm text-gray-300">Electronics</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-white">$1,199</td>
              <td className="p-4 text-white">25</td>
              <td className="p-4">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm border border-green-400/20">
                  Active
                </span>
              </td>
              <td className="p-4">
                <button className="text-purple-400 hover:text-purple-300 mr-2">Edit</button>
                <button className="text-pink-400 hover:text-pink-300">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium text-white">MacBook Air M3</p>
                    <p className="text-sm text-gray-300">Electronics</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-white">$1,499</td>
              <td className="p-4 text-white">12</td>
              <td className="p-4">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm border border-green-400/20">
                  Active
                </span>
              </td>
              <td className="p-4">
                <button className="text-purple-400 hover:text-purple-300 mr-2">Edit</button>
                <button className="text-pink-400 hover:text-pink-300">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium text-white">AirPods Pro</p>
                    <p className="text-sm text-gray-300">Electronics</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-white">$249</td>
              <td className="p-4 text-white">0</td>
              <td className="p-4">
                <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-sm border border-red-400/20">
                  Out of Stock
                </span>
              </td>
              <td className="p-4">
                <button className="text-purple-400 hover:text-purple-300 mr-2">Edit</button>
                <button className="text-pink-400 hover:text-pink-300">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  export default ProductsPage