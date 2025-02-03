import { Post, User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Software Developer | Coffee Enthusiast',
    followers: 1234,
    following: 567
  },
  {
    id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Digital Artist | Travel Lover',
    followers: 2345,
    following: 432
  }
];

export const posts: Post[] = [
  {
    id: '1',
    content: 'Just launched my new portfolio website! Check it out 🚀',
    author: users[0],
    likes: 42,
    comments: [
      {
        id: '1',
        content: 'Looks amazing! Congrats!',
        author: users[1],
        createdAt: '2024-03-10T10:00:00Z'
      }
    ],
    createdAt: '2024-03-10T09:00:00Z',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600'
  },
  {
    id: '2',
    content: 'Beautiful sunset at the beach today 🌅',
    author: users[1],
    likes: 89,
    comments: [],
    createdAt: '2024-03-09T18:30:00Z',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
  }
];