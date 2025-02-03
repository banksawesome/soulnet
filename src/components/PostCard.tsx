import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      <p className="mb-4">{post.content}</p>
      
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="rounded-lg mb-4 w-full"
        />
      )}
      
      <div className="flex items-center space-x-6 text-gray-500">
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <Heart className="w-5 h-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments.length}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}