import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, Grid, List, Heart, MessageCircle, DollarSign } from 'lucide-react';

const categories = [
  "All", "Electronics", "Fashion", "Home", "Sports", "Art", "Vehicles", "Property"
];

const products = [
  {
    id: 1,
    title: "Vintage Camera",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    seller: {
      name: "John Camera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 4.8
    },
    location: "New York, NY",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Handmade Pottery",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800",
    seller: {
      name: "Sarah Craft",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 4.9
    },
    location: "Portland, OR",
    category: "Art"
  },
  {
    id: 3,
    title: "Mountain Bike",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
    seller: {
      name: "Mike Bike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 4.7
    },
    location: "Denver, CO",
    category: "Sports"
  }
];

export default function Marketplace() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <ShoppingBag className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h1 className="text-2xl font-bold dark:text-dark-text">Marketplace</h1>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          + Sell Item
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search marketplace..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-dark-border dark:bg-dark-card dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg border dark:border-dark-border dark:text-dark-text">
              <Filter className="w-5 h-5" />
            </button>
            <div className="flex border dark:border-dark-border rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100 dark:bg-primary-900 text-primary-600' : 'dark:text-dark-text'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary-100 dark:bg-primary-900 text-primary-600' : 'dark:text-dark-text'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200
                ${selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-dark-card dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-border'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        : "space-y-4"
      }>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden
              ${viewMode === 'list' ? 'flex' : ''} transition-transform hover:scale-105 duration-200`}
          >
            <img
              src={product.image}
              alt={product.title}
              className={viewMode === 'list' ? "w-48 h-48 object-cover" : "w-full h-48 object-cover"}
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg dark:text-dark-text">{product.title}</h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    ${product.price}
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full">
                  <Heart className="w-5 h-5 text-gray-500  dark:text-gray-400" />
                </button>
              </div>
              
              <div className="mt-4 flex items-center space-x-2">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium dark:text-dark-text">{product.seller.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">⭐ {product.seller.rating}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">{product.location}</span>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat</span>
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1 rounded-lg transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}