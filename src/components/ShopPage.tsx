import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, ChevronDown, Check, Truck, ShieldCheck, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';

export function ShopPage() {
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Embroidered Apparel</h1>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Embroidered Apparel</span>
          </div>
        </div>
      </div>

      {/* Trusted Banner */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-500 ml-2">Excellent 4.9/5 based on 4,500+ reviews</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Team Company</h2>
              <p className="text-gray-600 mb-6">
                Every gift is a team effort — from concept to creation, our designers and makers craft with heart.
                That's why over 1,000+ on Trustpilot, 3,500+ on Judge.me, and 90+ on Google as a "Top Quality Shop".
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors">
                Get a Quote (Bulk Order)
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                 <img 
                  src="https://picsum.photos/seed/team1/300/300" 
                  alt="Team working" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                 <img 
                  src="https://picsum.photos/seed/team2/300/300" 
                  alt="Embroidery process" 
                  className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter</span>
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <span className="font-medium">Sort by: Featured</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block border border-gray-100">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Featured</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Best Selling</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Price: Low to High</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={product.image} // In a real app, use real images. Using placeholders for now.
                  alt={product.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if the specific URL fails
                    e.currentTarget.src = `https://picsum.photos/seed/${product.id}/600/600`;
                  }}
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
                {product.freeShipping && (
                  <div className="absolute bottom-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                    Buy 2 Free Shipping
                  </div>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10 mb-1 group-hover:text-indigo-600 transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="border border-gray-300 bg-white text-gray-700 font-medium py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
            Load more (2 products)
          </button>
        </div>
      </div>

      {/* Bulk Order Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Quote for Bulk Order</h2>
          <p className="text-gray-600 mb-8">
            We make creating custom embroidered products easy. Start by telling us what you have in mind.
          </p>
          
          <form className="bg-white p-8 rounded-2xl shadow-sm text-left space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company/Team Name</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
              <input type="tel" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product type</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Sweatshirt', 'Hoodie', 'T-Shirt', 'Hat', 'Tote bag', 'Other products'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="radio" name="productType" className="text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 border">
                <option>10-24</option>
                <option>25-49</option>
                <option>50-99</option>
                <option>100+</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Made & Shipped from the USA</h3>
              <p className="text-sm text-gray-500">Fast delivery in 3-5 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">High-quality embroidered</h3>
              <p className="text-sm text-gray-500">Durable, detailed stitching</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get bulk quotes fast</h3>
              <p className="text-sm text-gray-500">Buy now or get a price for bulk orders.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure & 24/7 support</h3>
              <p className="text-sm text-gray-500">Shop with confidence, we're always here for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
