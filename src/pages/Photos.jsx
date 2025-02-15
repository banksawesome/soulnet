import React, { useState } from 'react';
import { Camera, Grid, List } from 'lucide-react';

const photos = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    caption: 'Team meeting',
    likes: 42,
    date: '2024-03-10'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?w=800',
    caption: 'Conference presentation',
    likes: 89,
    date: '2024-03-09'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    caption: 'Beach sunset',
    likes: 156,
    date: '2024-03-08'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    caption: 'Tech workspace',
    likes: 234,
    date: '2024-03-07'
  }
];

export default function Photos() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Camera className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Photos</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-lg shadow-sm p-1 flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
                }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
                }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Camera className="w-5 h-5" />
            <span>Upload Photos</span>
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <p className="font-medium">{photo.caption}</p>
                    <p className="text-sm">{photo.likes} likes</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-48 h-48 object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold mb-2">{photo.caption}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(photo.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">{photo.likes} likes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}