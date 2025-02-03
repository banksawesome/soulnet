import React from 'react';
import { posts } from '../data/mockData';
import PostCard from '../components/PostCard';
import { Bookmark } from 'lucide-react';

export default function Bookmarks() {
  // In a real app, we'd filter for bookmarked posts
  const bookmarkedPosts = posts.map(post => ({ ...post, isBookmarked: true }));

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-6">
        <Bookmark className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Bookmarks</h1>
      </div>

      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
          <p className="text-gray-500">
            Save posts to read them later by clicking the bookmark icon.
          </p>
        </div>
      )}
    </div>
  );
}