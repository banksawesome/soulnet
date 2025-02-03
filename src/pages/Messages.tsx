import React, { useState } from 'react';
import { users } from '../data/mockData';
import { Search, Send } from 'lucide-react';

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState(users[1]);
  const [message, setMessage] = useState('');

  return (
    <div className="pt-16 h-screen">
      <div className="max-w-6xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex h-full">
          {/* Contacts List */}
          <div className="w-80 border-r bg-white">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {users.map(user => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`p-4 flex items-center space-x-3 hover:bg-gray-50 cursor-pointer ${
                    selectedUser?.id === user.id ? 'bg-gray-50' : ''
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            {selectedUser ? (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{selectedUser.name}</p>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {/* Chat messages would go here */}
                </div>

                <div className="p-4 border-t">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}