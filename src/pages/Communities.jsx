import React from 'react';
import { Users, Search, Plus, MessageCircle, Heart } from 'lucide-react';

const communities = [
  {
    id: 1,
    name: "Tech Innovators",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
    members: 12345,
    description: "A community for tech enthusiasts and innovators",
    topics: ["Technology", "Innovation", "Programming"],
    isJoined: true
  },
  {
    id: 2,
    name: "Creative Minds",
    cover: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    avatar: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
    members: 8765,
    description: "Share and discuss creative ideas and artwork",
    topics: ["Art", "Design", "Creativity"],
    isJoined: false
  },
  {
    id: 3,
    name: "Wellness Warriors",
    cover: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    avatar: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
    members: 5432,
    description: "Focus on health, wellness, and mindful living",
    topics: ["Health", "Wellness", "Mindfulness"],
    isJoined: false
  }
];

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    community: "Tech Innovators",
    content: "Just launched our new AI project! Check it out! 🚀",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    likes: 234,
    comments: 45,
    timeAgo: "2h"
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    community: "Creative Minds",
    content: "New artwork inspired by nature 🎨",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    likes: 567,
    comments: 89,
    timeAgo: "4h"
  }
];

export default function Communities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h1 className="text-2xl font-bold dark:text-dark-text">Communities</h1>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create Community</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search communities..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-dark-border dark:bg-dark-card dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Featured Communities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {communities.map((community) => (
          <div key={community.id} className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-32">
              <img
                src={community.cover}
                alt={community.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-4">
                <img
                  src={community.avatar}
                  alt={community.name}
                  className="w-12 h-12 rounded-xl border-2 border-white dark:border-dark-card"
                />
              </div>
            </div>
            
            <div className="p-4 pt-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg dark:text-dark-text">{community.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {community.members.toLocaleString()} members
                  </p>
                </div>
                <button
                  className={`px-4 py-1 rounded-lg transition-colors duration-200 ${
                    community.isJoined
                      ? 'bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {community.isJoined ? 'Joined' : 'Join'}
                </button>
              </div>
              
              <p className="mt-2 text-gray-600 dark:text-gray-400">{community.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {community.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Posts */}
      <h2 className="text-xl font-bold mb-6 dark:text-dark-text">Recent Activity</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium dark:text-dark-text">{post.author.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    in {post.community} • {post.timeAgo}
                  </p>
                </div>
              </div>
              
              <p className="mb-4 dark:text-dark-text">{post.content}</p>
              
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full rounded-lg mb-4"
                />
              )}
              
              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <button className="flex items-center space-x-1">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}