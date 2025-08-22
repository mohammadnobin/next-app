'use client'
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag,
  BarChart3,
  Users
} from 'lucide-react';
import ProductsPage from './addProduct/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const layout = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('overview');
  const router = useRouter()


  const handlclick = ()=>{
    router.push('/')
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsDrawerOpen(false);
  };





  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg transform
        ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
    
          <div onClick={handlclick} className="flex cursor-pointer items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NextStore
            </span>
          </div>

          <button 
            onClick={toggleDrawer}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
            <Link href='/dashboard'>
          <button
            onClick={() => navigateToPage('overview')}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
              currentPage === 'overview' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </button>
            </Link>
          
          <Link href='/dashboard/addProduct'>
          <button
            onClick={() => navigateToPage('products')}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                currentPage === 'products' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
            >
            <ShoppingBag className="w-5 h-5" />
            <span>Products</span>
          </button>
              </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="shadow-sm border-b border-white/20 px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={toggleDrawer}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg mr-3"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-white">
              {currentPage === 'overview' ? 'Dashboard Overview' : 'Products Management'}
            </h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
         {children}
        </main>
      </div>
    </div>
  );
};

export default layout;