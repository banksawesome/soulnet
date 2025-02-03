import React from 'react';
import { Users, Lock, Globe } from 'lucide-react';

const groups = [
  {
    id: '1',
    name: 'Tech Enthusiasts',
    description: 'A community for tech lovers and innovators',
    members: 1234,
    isPrivate: false,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800'
  },
  {
    id: '2',
    name: 'Digital Artists',
    description: 'Share and discuss digital art techniques',
    members: 567,
    isPrivate: true,
    image: 'https://images.unsplash.com/photo-1561735445-df7e2f9c1c64?w=800'
  }
];

export default function Groups() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Groups</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Create Group
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {group.isPrivate ? (
                    <div className="bg-gray-900 bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center">
                      <Lock className="w-4 h-4 mr-1" />
                      Private
                    </div>
                  ) : (
                    <div className="bg-gray-900 bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      Public
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-4">{group.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{group.members} members</span>
                </div>

                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  {group.isPrivate ? 'Request to Join' : 'Join Group'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}