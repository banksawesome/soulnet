import React from 'react';
import { users } from '../data/mockData';

const notifications = [
  {
    id: '1',
    user: users[1],
    action: 'liked your post',
    time: '2 hours ago'
  },
  {
    id: '2',
    user: users[1],
    action: 'started following you',
    time: '1 day ago'
  }
];

export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <div className="bg-white rounded-xl shadow-sm divide-y">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p>
                  <span className="font-semibold">{notification.user.name}</span>
                  {' '}
                  {notification.action}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}