import React from 'react';
import { HelpCircle, Book, MessageCircle, Mail, Phone } from 'lucide-react';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: Book,
    articles: [
      'How to create an account',
      'Setting up your profile',
      'Finding friends',
      'Making your first post'
    ]
  },
  {
    title: 'Account & Privacy',
    icon: HelpCircle,
    articles: [
      'Managing privacy settings',
      'Securing your account',
      'Blocking users',
      'Data and privacy policy'
    ]
  },
  {
    title: 'Features & Usage',
    icon: MessageCircle,
    articles: [
      'Using stories',
      'Creating events',
      'Managing groups',
      'Direct messaging'
    ]
  }
];

export default function Help() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-8">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Help Center</h1>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">How can we help you?</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-4 pr-10 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {helpCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <category.icon className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-3">
              {category.articles.map((article) => (
                <li key={article}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
                  >
                    <span className="text-sm">•</span>
                    <span>{article}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#"
            className="flex items-center space-x-3 p-4 rounded-lg border hover:border-blue-500 hover:text-blue-600"
          >
            <Mail className="w-5 h-5" />
            <div>
              <p className="font-medium">Email Support</p>
              <p className="text-sm text-gray-500">Get help via email</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-4 rounded-lg border hover:border-blue-500 hover:text-blue-600"
          >
            <MessageCircle className="w-5 h-5" />
            <div>
              <p className="font-medium">Live Chat</p>
              <p className="text-sm text-gray-500">Chat with support</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-4 rounded-lg border hover:border-blue-500 hover:text-blue-600"
          >
            <Phone className="w-5 h-5" />
            <div>
              <p className="font-medium">Phone Support</p>
              <p className="text-sm text-gray-500">Call us directly</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}