import React from 'react';
import PostCard from '../components/PostCard';
import { MapPin, Link as LinkIcon, Edit3, Settings, Grid, BookOpen } from 'lucide-react';

const user = {
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  bio: 'Software Developer | Coffee Enthusiast',
  location: 'New York, USA',
  website: 'portfolio.com',
  followers: 1234,
  following: 567,
  posts: [
    {
      id: '1',
      content: 'Just launched my new portfolio website! Check it out 🚀',
      author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      likes: 42,
      comments: [],
      createdAt: '2024-03-10T09:00:00Z',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600'
    }
  ]
};

export default function Profile() {
  return (
    <div className="pt-16">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900" />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="-mt-24">
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-32 w-32 rounded-full border-4 border-white dark:border-dark-card"
                    src={user.avatar}
                    alt={user.name}
                  />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-200">{user.name}</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">@{user.username}</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{user.bio}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <LinkIcon className="w-4 h-4 mr-1" />
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">{user.website}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex space-x-2 sm:mt-0">
                <button className="flex items-center space-x-2 px-4 py-2 border dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-border transition-colors duration-200">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center sm:justify-start space-x-8">
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-200">{user.posts.length}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Posts</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-200">{user.followers}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Followers</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900 dark:text-gray-200">{user.following}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Following</span>
              </div>
            </div>

            <div className="mt-6 border-t dark:border-dark-border">
              <nav className="flex space-x-8">
                <button className="px-3 py-4 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                  Posts
                </button>
                <button className="px-3 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600">
                  Media
                </button>
                <button className="px-3 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600">
                  Likes
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {user.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}