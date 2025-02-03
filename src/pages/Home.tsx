import React from 'react';
import { posts } from '../data/mockData';
import PostCard from '../components/PostCard';
import { PenSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={posts[0].author.avatar}
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <PenSquare className="w-5 h-5" />
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}