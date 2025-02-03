import React from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  Eye, 
  Globe, 
  Smartphone, 
  MessageSquare,
  Palette,
  HelpCircle
} from 'lucide-react';

export default function Settings() {
  const settingsSections = [
    {
      title: 'Account',
      icon: User,
      items: [
        { label: 'Profile Information', description: 'Update your personal details' },
        { label: 'Email & Password', description: 'Manage your login credentials' },
        { label: 'Connected Accounts', description: 'Link other social accounts' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Push Notifications', description: 'Manage mobile notifications' },
        { label: 'Email Notifications', description: 'Control email updates' },
        { label: 'Activity Alerts', description: 'Set up activity notifications' }
      ]
    },
    {
      title: 'Privacy',
      icon: Lock,
      items: [
        { label: 'Account Privacy', description: 'Control who can see your content' },
        { label: 'Blocked Users', description: 'Manage blocked accounts' },
        { label: 'Data Usage', description: 'Manage how your data is used' }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>

      <div className="space-y-8">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex items-center space-x-3">
              <section.icon className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-lg">{section.title}</h2>
            </div>
            <div className="divide-y">
              {section.items.map((item) => (
                <div key={item.label} className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}