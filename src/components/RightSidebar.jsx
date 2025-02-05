import React from 'react';
import { Users, TrendingUp, Calendar } from 'lucide-react';

function RightSidebar() {
  const suggestedFriends = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      mutualFriends: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      mutualFriends: 3
    }
  ];

  const trendingTopics = [
    '#Technology',
    '#DigitalArt',
    '#Innovation',
    '#WebDevelopment'
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: '2024-06-15',
      attendees: 234
    },
    {
      id: 2,
      title: 'Digital Art Exhibition',
      date: '2024-04-20',
      attendees: 156
    }
  ];

  return (
    <div className="hidden xl:block w-80 sticky top-20 space-y-6 pl-4">
      {/* Suggested Friends */}
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h2 className="font-semibold dark:text-gray-200">Suggested Friends</h2>
          </div>
          <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">See All</a>
        </div>
        <div className="space-y-4">
          {suggestedFriends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium dark:text-gray-200">{friend.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <button className="text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-3 py-1 rounded-lg">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h2 className="font-semibold dark:text-gray-200">Trending Topics</h2>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic) => (
            <div
              key={topic}
              className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-dark-border rounded-lg cursor-pointer"
            >
              <span className="text-gray-700 dark:text-gray-200">{topic}</span>
              <TrendingUp className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h2 className="font-semibold dark:text-gray-200">Upcoming Events</h2>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="space-y-1">
              <p className="font-medium dark:text-gray-200">{event.title}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span>{event.attendees} attending</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RightSidebar;