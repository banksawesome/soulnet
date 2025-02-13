import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Bell, MessageCircle, Compass, Bookmark, Settings, Calendar, Users, Camera, TrendingUp, HelpCircle, Shield, Image, Group as UserGroup } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/messages', icon: MessageCircle, label: 'Messages' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/bookmarks', icon: Bookmark, label: 'Bookmarks' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/groups', icon: UserGroup, label: 'Groups' },
    { path: '/stories', icon: Camera, label: 'Stories' },
    { path: '/trending', icon: TrendingUp, label: 'Trending' },
    { path: '/friends', icon: Users, label: 'Friends' },
    { path: '/photos', icon: Image, label: 'Photos' }
  ];

  const secondaryItems = [
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
    { path: '/privacy', icon: Shield, label: 'Privacy' }
  ];

  return (
    <div className="hidden lg:block w-64 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto hide-scrollbar">
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-border transition-colors ${
                location.pathname === item.path 
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          <hr className="my-4 border-gray-200 dark:border-dark-border" />
          
          {secondaryItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-border transition-colors ${
                location.pathname === item.path 
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
