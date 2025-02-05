import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { formatDate } from '../utils/dateUtils';

export default function PostCard({ post }) {
  const { user } = useUser();
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);
  const [showOptions, setShowOptions] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      content: newComment,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      createdAt: new Date().toISOString()
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Post by ${post.author.name}`,
        text: post.content,
        url: window.location.href
      });
    }
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold dark:text-gray-200">{post.author.name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {formatDate(post.createdAt)}
            </p>
          </div>
        </div>
        <div className="relative">
          <button 
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full"
            onClick={() => setShowOptions(!showOptions)}
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-card rounded-lg shadow-lg py-1 z-10">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-border dark:text-gray-200">
                Save Post
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-border dark:text-gray-200">
                Report Post
              </button>
              {user.id === post.author.id && (
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-border text-red-600">
                  Delete Post
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      <p className="mb-4 whitespace-pre-wrap dark:text-gray-200">{post.content}</p>
      
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="rounded-lg mb-4 w-full"
          loading="lazy"
        />
      )}
      
      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
        <button 
          className={`flex items-center space-x-2 hover:text-primary-600 ${isLiked ? 'text-primary-600' : ''}`}
          onClick={handleLike}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>
        <button 
          className="flex items-center space-x-2 hover:text-primary-600"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="w-5 h-5" />
          <span>{comments.length}</span>
        </button>
        <button 
          className="flex items-center space-x-2 hover:text-primary-600"
          onClick={handleShare}
        >
          <Share2 className="w-5 h-5" />
        </button>
        <button 
          className={`flex items-center space-x-2 hover:text-primary-600 ${isBookmarked ? 'text-primary-600' : ''}`}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {showComments && (
        <div className="border-t dark:border-dark-border pt-4">
          <form onSubmit={handleComment} className="mb-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 rounded-lg border dark:border-dark-border dark:bg-dark-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-200"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                disabled={!newComment.trim()}
              >
                Post
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 bg-gray-50 dark:bg-dark-border rounded-lg p-3">
                  <p className="font-medium dark:text-gray-200">{comment.author.name}</p>
                  <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}