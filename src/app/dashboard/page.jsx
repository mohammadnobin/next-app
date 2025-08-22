import React from 'react';
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag,
  BarChart3,
  Users
} from 'lucide-react';
const page = () => {
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
          <div className="flex items-center">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-300">Total Sales</p>
              <p className="text-xl font-bold text-white">$45,230</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
          <div className="flex items-center">
            <div className="p-3 bg-green-500/20 rounded-full">
              <ShoppingBag className="w-6 h-6 text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-300">Orders</p>
              <p className="text-xl font-bold text-white">1,247</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
          <div className="flex items-center">
            <div className="p-3 bg-pink-500/20 rounded-full">
              <Users className="w-6 h-6 text-pink-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-300">Customers</p>
              <p className="text-xl font-bold text-white">8,432</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
          <div className="flex items-center">
            <div className="p-3 bg-orange-500/20 rounded-full">
              <ShoppingBag className="w-6 h-6 text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-300">Products</p>
              <p className="text-xl font-bold text-white">342</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow p-6 border border-white/20">
        <h2 className="text-lg font-semibold mb-4 text-white">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <div>
              <p className="font-medium text-white">New order received</p>
              <p className="text-sm text-gray-300">Order #12345 - $89.99</p>
            </div>
            <span className="text-sm text-gray-400">2 min ago</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <div>
              <p className="font-medium text-white">Product stock updated</p>
              <p className="text-sm text-gray-300">iPhone 15 Pro - 25 units</p>
            </div>
            <span className="text-sm text-gray-400">15 min ago</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">New customer registered</p>
              <p className="text-sm text-gray-300">john.doe@email.com</p>
            </div>
            <span className="text-sm text-gray-400">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default page;