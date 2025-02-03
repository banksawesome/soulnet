import React from 'react';
import { Users, UserPlus, UserMinus, MessageCircle } from 'lucide-react';

const friends = [
  {
    id: '1',
    name: 'Emily Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    mutualFriends: 12,
    online: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    mutualFriends: 8,
    online: false
  }
];

const suggestions = [
  {
    id: '3',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    mutualFriends: 5,
    occupation: 'UX Designer'
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    mutualFriends: 3,
    occupation: 'Software Engineer'
  }
];

export default function Friends() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Friends</h1>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search friends"
            className="pl-4 pr-10 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Friends List */}
        <div className="lg:col-span-2">
          <h2 className="font-semibold mb-4">Your Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {friends.map((friend) => (
              <div key={friend.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-16 h-16 rounded-full"
                    />
                    {friend.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{friend.name}</h3>
                    <p className="text-sm text-gray-500">
                      {friend.mutualFriends} mutual friends
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                      <UserMinus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Friend Suggestions */}
        <div>
          <h2 className="font-semibold mb-4">People You May Know</h2>
          <div className="bg-white rounded-xl shadow-sm">
            {suggestions.map((person) => (
              <div key={person.id} className="p-4 border-b last:border-b-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{person.name}</h3>
                    <p className="text-sm text-gray-500">{person.occupation}</p>
                    <p className="text-xs text-gray-400">
                      {person.mutualFriends} mutual friends
                    </p>
                  </div>
                  <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                    <UserPlus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}