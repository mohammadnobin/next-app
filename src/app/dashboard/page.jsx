
// 'use client'
// import React, { useState } from 'react';
// import { 
//   Menu, 
//   X, 
//   Home, 
//   ShoppingBag,
//   BarChart3,
//   Users
// } from 'lucide-react';
// import ProductsPage from './addProduct/page';
// import Link from 'next/link';

// const Dashboard = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState('overview');

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const navigateToPage = (page) => {
//     setCurrentPage(page);
//     setIsDrawerOpen(false);
//   };

//   // Overview Page Component
//   const OverviewPage = () => (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-white">Dashboard Overview</h1>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
//           <div className="flex items-center">
//             <div className="p-3 bg-purple-500/20 rounded-full">
//               <BarChart3 className="w-6 h-6 text-purple-400" />
//             </div>
//             <div className="ml-4">
//               <p className="text-sm text-gray-300">Total Sales</p>
//               <p className="text-xl font-bold text-white">$45,230</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
//           <div className="flex items-center">
//             <div className="p-3 bg-green-500/20 rounded-full">
//               <ShoppingBag className="w-6 h-6 text-green-400" />
//             </div>
//             <div className="ml-4">
//               <p className="text-sm text-gray-300">Orders</p>
//               <p className="text-xl font-bold text-white">1,247</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
//           <div className="flex items-center">
//             <div className="p-3 bg-pink-500/20 rounded-full">
//               <Users className="w-6 h-6 text-pink-400" />
//             </div>
//             <div className="ml-4">
//               <p className="text-sm text-gray-300">Customers</p>
//               <p className="text-xl font-bold text-white">8,432</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow border border-white/20">
//           <div className="flex items-center">
//             <div className="p-3 bg-orange-500/20 rounded-full">
//               <ShoppingBag className="w-6 h-6 text-orange-400" />
//             </div>
//             <div className="ml-4">
//               <p className="text-sm text-gray-300">Products</p>
//               <p className="text-xl font-bold text-white">342</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow p-6 border border-white/20">
//         <h2 className="text-lg font-semibold mb-4 text-white">Recent Activity</h2>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between border-b border-white/20 pb-3">
//             <div>
//               <p className="font-medium text-white">New order received</p>
//               <p className="text-sm text-gray-300">Order #12345 - $89.99</p>
//             </div>
//             <span className="text-sm text-gray-400">2 min ago</span>
//           </div>
//           <div className="flex items-center justify-between border-b border-white/20 pb-3">
//             <div>
//               <p className="font-medium text-white">Product stock updated</p>
//               <p className="text-sm text-gray-300">iPhone 15 Pro - 25 units</p>
//             </div>
//             <span className="text-sm text-gray-400">15 min ago</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="font-medium text-white">New customer registered</p>
//               <p className="text-sm text-gray-300">john.doe@email.com</p>
//             </div>
//             <span className="text-sm text-gray-400">1 hour ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );




//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Drawer Overlay */}
//       {isDrawerOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={toggleDrawer}
//         />
//       )}

//       {/* Drawer */}
//       <div className={`
//         fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg transform
//         ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//         transition-transform duration-300 ease-in-out
//       `}>
//         {/* Drawer Header */}
//         <div className="flex items-center justify-between p-4 border-b border-white/20">
//         <Link href='/'>
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//               <ShoppingBag className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               NextStore
//             </span>
//           </div>
//         </Link>
//           <button 
//             onClick={toggleDrawer}
//             className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
//           >
//             <X className="w-5 h-5 text-white" />
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="p-4 space-y-2">
//           <button
//             onClick={() => navigateToPage('overview')}
//             className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
//               currentPage === 'overview' 
//                 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
//                 : 'text-gray-300 hover:bg-white/10 hover:text-white'
//             }`}
//           >
//             <Home className="w-5 h-5" />
//             <span>Overview</span>
//           </button>
          
//           <button
//             onClick={() => navigateToPage('products')}
//             className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
//               currentPage === 'products' 
//                 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
//                 : 'text-gray-300 hover:bg-white/10 hover:text-white'
//             }`}
//           >
//             <ShoppingBag className="w-5 h-5" />
//             <span>Products</span>
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Bar */}
//         <header className="shadow-sm border-b border-white/20 px-6 py-4">
//           <div className="flex items-center">
//             <button
//               onClick={toggleDrawer}
//               className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg mr-3"
//             >
//               <Menu className="w-5 h-5" />
//             </button>
//             <h1 className="text-lg font-semibold text-white">
//               {currentPage === 'overview' ? 'Dashboard Overview' : 'Products Management'}
//             </h1>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto">
         
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


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