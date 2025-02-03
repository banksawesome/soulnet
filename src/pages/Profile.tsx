import React from 'react';
import { users, posts } from '../data/mockData';
import PostCard from '../components/PostCard';
import { MapPin, Link as LinkIcon } from 'lucide-react';

export default function Profile() {
  const user = users[0];
  const userPosts = posts.filter(post => post.author.id === user.id);

  return (
    <div className="pt-16">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-32 w-32 rounded-full border-4 border-white"
                    src={user.avatar}
                    alt={user.name}
                  />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-xl font-bold text-gray-900">{user.name}</p>
                  <p className="text-sm font-medium text-gray-500">@{user.username}</p>
                  <p className="mt-2 text-sm text-gray-500">{user.bio}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-0">
                <button className="w-full sm:w-auto flex-none bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center sm:justify-start space-x-6 text-sm">
              <div>
                <span className="font-bold text-gray-900">{userPosts.length}</span>
                <span className="text-gray-500 ml-1">Posts</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">{user.followers}</span>
                <span className="text-gray-500 ml-1">Followers</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">{user.following}</span>
                <span className="text-gray-500 ml-1">Following</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}