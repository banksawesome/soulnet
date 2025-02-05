import React from 'react';
import { TrendingUp, MessageCircle, Share2, Heart } from 'lucide-react';

const trendingTopics = [
  '#Technology',
  '#DigitalArt',
  '#Innovation',
  '#WebDevelopment',
  '#AI'
];

const trendingPosts = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      username: '@sarahj'
    },
    content: 'Just launched our new AI-powered platform! 🚀 #Technology #Innovation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    engagement: {
      likes: 1234,
      comments: 89,
      shares: 45
    },
    timeAgo: '2 hours'
  },
  {
    id: '2',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      username: '@alexc'
    },
    content: 'The future of web development is here! Check out these amazing new tools 🛠️ #WebDevelopment',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    engagement: {
      likes: 892,
      comments: 56,
      shares: 23
    },
    timeAgo: '4 hours'
  }
];

export default function Trending() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-8">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Trending Now</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {trendingPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-gray-500">
                      {post.author.username} • {post.timeAgo}
                    </p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-blue-600">
                    <Heart className="w-5 h-5" />
                    <span>{post.engagement.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.engagement.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-600">
                    <Share2 className="w-5 h-5" />
                    <span>{post.engagement.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Topics Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-semibold mb-4">Trending Topics</h2>
            <div className="space-y-3">
              {trendingTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
                >
                  <span className="text-blue-600">{topic}</span>
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}