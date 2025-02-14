import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  Home,
  User,
  Bell,
  LogOut,
  MessageCircle,
  Compass,
  Bookmark,
  Settings,
  Calendar,
  Users,
  TrendingUp,
  Camera,
  HelpCircle,
  Shield,
  Menu,
  X,
  Sun,
  Moon,
  Search
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/messages', icon: MessageCircle, label: 'Messages' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/bookmarks', icon: Bookmark, label: 'Bookmarks' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/groups', icon: Users, label: 'Groups' },
    { path: '/trending', icon: TrendingUp, label: 'Trending' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  const secondaryItems = [
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
    { path: '/privacy', icon: Shield, label: 'Privacy' }
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-dark-card transform transition-transform duration-200 ease-in-out z-50 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
          >
            <X className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 block mb-8">
            SoulNet
          </Link>
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-lg text-gray-700 dark:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <hr className="my-4 border-gray-200 dark:border-dark-border" />
            {secondaryItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-lg text-gray-700 dark:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border z-30 transition-colors duration-200">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                className="lg:hidden mr-4 text-gray-500 dark:text-gray-400"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                SoulNet
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search SoulNet..."
                  className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-dark-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-200"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-700" />
                )}
              </button>

              {/* Navigation Icons */}
              <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-lg tooltip transition-colors duration-200"
                    data-tip={item.label}
                  >
                    <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </Link>
                ))}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-primary-500"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
