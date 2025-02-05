import React from 'react';
import { Gamepad2, Users, Trophy, Star } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Soul Racers",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    players: 1234,
    category: "Racing",
    description: "Compete with friends in this high-speed racing game!"
  },
  {
    id: 2,
    title: "Mind Quest",
    image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=800",
    players: 2345,
    category: "Puzzle",
    description: "Challenge your mind with exciting puzzles and riddles."
  },
  {
    id: 3,
    title: "Space Warriors",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800",
    players: 5678,
    category: "Action",
    description: "Join the epic space battle with players worldwide!"
  }
];

export default function Gaming() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-8">
        <Gamepad2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        <h1 className="text-2xl font-bold dark:text-dark-text">Gaming Hub</h1>
      </div>

      {/* Featured Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-105 duration-200">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 dark:text-dark-text">{game.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{game.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{game.players} Players</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>{game.category}</span>
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4 dark:text-dark-text">Top Players</h2>
        <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
          {[1, 2, 3].map((position) => (
            <div key={position} className="flex items-center justify-between p-4 border-b dark:border-dark-border last:border-0">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lg text-primary-600 dark:text-primary-400">#{position}</span>
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + position}?w=400`}
                  alt={`Player ${position}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium dark:text-dark-text">Player Name</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Score: {10000 - position * 1000}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="ml-1 dark:text-dark-text">Level {30 - position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}