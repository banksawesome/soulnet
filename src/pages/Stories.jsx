import React from 'react';
import { Plus, Play } from 'lucide-react';
import { users } from '../data/mockData';

const stories = [
  {
    id: '1',
    user: users[0],
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    duration: 15,
    views: 234
  },
  {
    id: '2',
    user: users[1],
    thumbnail: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?w=400',
    duration: 30,
    views: 567
  }
];

export default function Stories() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Stories</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Story</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Create Story Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer group">
          <div className="relative h-80">
            <img
              src={users[0].avatar}
              alt="Your avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-3 mx-auto mb-2">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Create Story</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer group">
            <div className="relative h-80">
              <img
                src={story.thumbnail}
                alt={`${story.user.name}'s story`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={story.user.avatar}
                      alt={story.user.name}
                      className="w-10 h-10 rounded-full border-2 border-blue-600"
                    />
                    <div>
                      <p className="text-white font-medium">{story.user.name}</p>
                      <p className="text-white text-sm opacity-75">
                        {story.duration}s • {story.views} views
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}