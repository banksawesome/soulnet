import React from 'react';
import { Bell, Heart, UserPlus, MessageCircle, Star } from 'lucide-react';

const notifications = [
  {
    id: '1',
    type: 'like',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    content: 'liked your post',
    time: '2 hours ago',
    icon: Heart,
    iconColor: 'text-red-500'
  },
  {
    id: '2',
    type: 'follow',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    content: 'started following you',
    time: '3 hours ago',
    icon: UserPlus,
    iconColor: 'text-blue-500'
  },
  {
    id: '3',
    type: 'comment',
    user: {
      name: 'Emily Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    content: 'commented on your post',
    time: '5 hours ago',
    icon: MessageCircle,
    iconColor: 'text-green-500'
  }
];

export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-6">
        <Bell className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        <h1 className="text-2xl font-bold dark:text-gray-200">Notifications</h1>
      </div>
      
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm divide-y dark:divide-dark-border">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 hover:bg-gray-50 dark:hover:bg-dark-border transition-colors">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-dark-card rounded-full p-1">
                  <notification.icon className={`w-4 h-4 ${notification.iconColor}`} />
                </div>
              </div>
              <div className="flex-1">
                <p className="dark:text-gray-200">
                  <span className="font-semibold">{notification.user.name}</span>
                  {' '}
                  {notification.content}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}