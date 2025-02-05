import React, { useState } from 'react';
import { Video, Users, Heart, MessageCircle, Share2, Radio } from 'lucide-react';

const liveStreams = [
  {
    id: 1,
    title: "Morning Meditation Session",
    streamer: {
      name: "Sarah Peace",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    viewers: 1234,
    category: "Wellness",
    tags: ["meditation", "mindfulness", "morning"]
  },
  {
    id: 2,
    title: "Tech Talk: Future of AI",
    streamer: {
      name: "Alex Tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    viewers: 2567,
    category: "Technology",
    tags: ["tech", "ai", "future"]
  },
  {
    id: 3,
    title: "Live Music Session",
    streamer: {
      name: "Maria Songs",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
    viewers: 3789,
    category: "Music",
    tags: ["music", "live", "concert"]
  }
];

export default function Live() {
  const [selectedStream, setSelectedStream] = useState(null);
  const [message, setMessage] = useState('');

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-8">
        <Radio className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        <h1 className="text-2xl font-bold dark:text-dark-text">Live Streams</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Stream */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={selectedStream?.thumbnail || liveStreams[0].thumbnail}
                alt="Featured stream"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-lg flex items-center">
                <Radio className="w-4 h-4 mr-1" />
                LIVE
              </div>
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {(selectedStream?.viewers || liveStreams[0].viewers).toLocaleString()}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedStream?.streamer.avatar || liveStreams[0].streamer.avatar}
                    alt="Streamer"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="font-bold dark:text-dark-text">
                      {selectedStream?.title || liveStreams[0].title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedStream?.streamer.name || liveStreams[0].streamer.name}
                    </p>
                  </div>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Follow
                </button>
              </div>

              <div className="flex space-x-2 mb-4">
                {(selectedStream?.tags || liveStreams[0].tags).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <button className="flex items-center space-x-1">
                  <Heart className="w-5 h-5" />
                  <span>2.5K</span>
                </button>
                <button className="flex items-center space-x-1">
                  <MessageCircle className="w-5 h-5" />
                  <span>234</span>
                </button>
                <button className="flex items-center space-x-1">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stream List */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg dark:text-dark-text">Live Now</h2>
          {liveStreams.map((stream) => (
            <div
              key={stream.id}
              onClick={() => setSelectedStream(stream)}
              className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all duration-200"
            >
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-sm">
                  {stream.viewers.toLocaleString()} watching
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={stream.streamer.avatar}
                    alt={stream.streamer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium dark:text-dark-text">{stream.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stream.streamer.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}