import React from 'react';
import { Shield, Eye, Lock, Bell, Users, Globe, AlertCircle } from 'lucide-react';

function Privacy() {
  const privacySettings = [
    {
      category: 'Account Privacy',
      icon: Lock,
      settings: [
        {
          title: 'Profile Visibility',
          description: 'Control who can see your profile',
          options: ['Public', 'Friends Only', 'Private'],
          current: 'Friends Only'
        },
        {
          title: 'Post Privacy',
          description: 'Default privacy setting for new posts',
          options: ['Public', 'Friends Only', 'Only Me'],
          current: 'Friends Only'
        }
      ]
    },
    {
      category: 'Activity Status',
      icon: Eye,
      settings: [
        {
          title: 'Online Status',
          description: "Show when you're active",
          options: ['On', 'Off'],
          current: 'On'
        },
        {
          title: 'Last Seen',
          description: 'Show your last active time',
          options: ['Everyone', 'Friends', 'Nobody'],
          current: 'Friends'
        }
      ]
    },
    {
      category: 'Data Usage',
      icon: Shield,
      settings: [
        {
          title: 'Data Collection',
          description: 'Manage how we collect and use your data',
          options: ['Essential Only', 'Personalized', 'All Features'],
          current: 'Essential Only'
        },
        {
          title: 'Third-Party Sharing',
          description: 'Control data sharing with partners',
          options: ['None', 'Limited', 'All'],
          current: 'Limited'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Privacy Settings</h1>
      </div>

      {/* Privacy Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg">
         <boltAction type="file" filePath="src/pages/Privacy.tsx"></boltAction>        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-yellow-400 mr-3" />
          <div>
            <p className="font-medium text-yellow-700">Privacy Check Recommended</p>
            <p className="text-sm text-yellow-600">
              We recommend reviewing your privacy settings regularly to ensure your account is secure.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="space-y-6">
        {privacySettings.map((section) => (
          <div key={section.category} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex items-center space-x-3">
              <section.icon className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-lg">{section.category}</h2>
            </div>
            <div className="divide-y">
              {section.settings.map((setting) => (
                <div key={setting.title} className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{setting.title}</h3>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                    <select
                      className="ml-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={setting.current}
                    >
                      {setting.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Save Changes */}
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
export default Privacy;