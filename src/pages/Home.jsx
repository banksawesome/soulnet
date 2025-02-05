import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { PenSquare, Image as ImageIcon, Link, Smile } from 'lucide-react';

const initialPosts = [
  {
    id: '1',
    content: 'Just launched my new portfolio website! Check it out 🚀',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    likes: 42,
    comments: [
      {
        id: '1',
        content: 'Looks amazing! Congrats!',
        author: {
          name: 'Jane Smith',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
        },
        createdAt: '2024-03-10T10:00:00Z'
      }
    ],
    createdAt: '2024-03-10T09:00:00Z',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600'
  },
  {
    id: '2',
    content: 'Beautiful sunset at the beach today 🌅',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    likes: 89,
    comments: [],
    createdAt: '2024-03-09T18:30:00Z',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
  }
];

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePost = (e) => {
    e.preventDefault();
    if (!newPost.trim() && !selectedImage) return;

    const post = {
      id: Date.now().toString(),
      content: newPost,
      author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
      image: selectedImage
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setSelectedImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      {/* Create Post */}
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4 mb-6">
        <form onSubmit={handlePost}>
          <div className="flex items-start space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
              alt="Your avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full rounded-lg bg-gray-100 dark:bg-dark-border dark:text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                rows="3"
              />
              
              {selectedImage && (
                <div className="mt-2 relative">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="rounded-lg max-h-60 w-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 bg-gray-900 bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70"
                  >
                    ×
                  </button>
                </div>
              )}

              <div className="mt-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full"
                    onClick={() => document.getElementById('image-input').click()}
                  >
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <input
                    id="image-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setSelectedImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full"
                  >
                    <Link className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2"
                  disabled={!newPost.trim() && !selectedImage}
                >
                  <PenSquare className="w-5 h-5" />
                  <span>Post</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}