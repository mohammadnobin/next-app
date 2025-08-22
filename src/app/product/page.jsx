'use client'
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Grid3X3, 
  List, 
  ChevronDown, 
  SlidersHorizontal,
  X,
  ArrowRight,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://nextjs-first-project-wheat.vercel.app/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

if (loading) {
    return (
      <div className=" h-screen pt-[200px]  bg-gradient-to-br from-slate-900 items-center via-purple-900 to-slate-900  gap-6 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-slate-800 p-4 rounded-md text-white space-y-3"
          >
            <div className="h-48 bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            <div className="h-4 bg-slate-700 rounded w-full"></div>
            <div className="h-48 bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            <div className="h-4 bg-slate-700 rounded w-full"></div>
          </div>
        ))}
        </div>
      </div>
    );
  }
  // Mock product data


  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
    { id: 'furniture', name: 'Furniture', count: products.filter(p => p.category === 'furniture').length },
    { id: 'photography', name: 'Photography', count: products.filter(p => p.category === 'photography').length },
    { id: 'appliances', name: 'Appliances', count: products.filter(p => p.category === 'appliances').length }
  ];

  const brands = ['AudioTech', 'FitTech', 'LensMaster', 'ComfortZone', 'GamePro', 'LightCraft', 'ChargeTech', 'BrewMaster'];

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.isNew - a.isNew;
      default: return b.isFeatured - a.isFeatured;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">Home</a>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">Products</span>
          </nav>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Discover Products
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore our curated collection of premium products designed to enhance your lifestyle
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="featured" className="bg-slate-800">Featured</option>
                  <option value="newest" className="bg-slate-800">Newest</option>
                  <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                  <option value="rating" className="bg-slate-800">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode & Filters */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-slate-700/50 text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-slate-700/50 text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-3 bg-slate-700/50 text-slate-400 hover:text-white rounded-xl transition-colors"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-slate-600/50">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-purple-500"
                    />
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Brands</label>
                    <div className="flex flex-wrap gap-2">
                      {brands.map(brand => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrands(prev =>
                            prev.includes(brand)
                              ? prev.filter(b => b !== brand)
                              : [...prev, brand]
                          )}
                          className={`px-3 py-1 rounded-full text-sm transition-colors ${
                            selectedBrands.includes(brand)
                              ? 'bg-purple-500 text-white'
                              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-400">
            Showing {sortedProducts.length} of {products.length} products
          </p>
          {(selectedBrands.length > 0 || selectedCategory !== 'all') && (
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedBrands.map(brand => (
                <span key={brand} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm flex items-center space-x-1">
                  <span>{brand}</span>
                  <button
                    onClick={() => setSelectedBrands(prev => prev.filter(b => b !== brand))}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6' : 'space-y-6'}>
          {sortedProducts.map((product) => (
            <div
              key={product._id}
              className={`group bg-gradient-to-b from-slate-800/30 to-slate-900/30 rounded-2xl overflow-hidden border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-48 h-full' : 'w-full h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {product.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-md flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>New</span>
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded-md flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-md flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-md">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-400 font-medium">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-slate-300 text-sm">{product.rating}</span>
                    <span className="text-slate-500 text-sm">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-400">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-slate-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link className='w-full' href={`/product/${product._id}`}>
                  <button className="flex-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Viwe Details</span>
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
              Load More Products
            </button>
          </div>
        )}

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-slate-500" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No products found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedBrands([]);
                setPriceRange([0, 1000]);
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;