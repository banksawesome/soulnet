import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  X
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-200 ease-in-out z-50 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
            <X className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-bold text-blue-600 block mb-8">Social</Link>
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <hr className="my-4" />
            {secondaryItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
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
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="text-2xl font-bold text-blue-600">SoulNet</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="p-2 hover:bg-gray-100 rounded-lg tooltip"
                  data-tip={item.label}
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              ))}
              <button className="p-2 hover:bg-gray-100 rounded-lg tooltip" data-tip="Logout">
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}