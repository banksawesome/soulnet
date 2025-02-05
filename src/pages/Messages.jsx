import React, { useState } from 'react';
import { Search, Send, Phone, Video, Info } from 'lucide-react';

const contacts = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    status: 'online',
    lastMessage: 'Hey, how are you?',
    time: '2m ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    status: 'offline',
    lastMessage: 'The project looks great!',
    time: '1h ago'
  }
];

export default function Messages() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="pt-16 h-screen">
      <div className="max-w-6xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex h-full">
          {/* Contacts List */}
          <div className="w-80 border-r dark:border-dark-border bg-white dark:bg-dark-card">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-dark-border dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-200"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`p-4 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-dark-border cursor-pointer ${
                    selectedContact?.id === contact.id ? 'bg-gray-50 dark:bg-dark-border' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-dark-card ${
                      contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold dark:text-gray-200">{contact.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{contact.time}</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {contact.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white dark:bg-dark-card">
            {selectedContact ? (
              <>
                <div className="p-4 border-b dark:border-dark-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold dark:text-gray-200">{selectedContact.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedContact.status === 'online' ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full">
                        <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full">
                        <Video className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-border rounded-full">
                        <Info className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {/* Chat messages would go here */}
                </div>

                <div className="p-4 border-t dark:border-dark-border">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 rounded-full border dark:border-dark-border dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-200"
                    />
                    <button className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}