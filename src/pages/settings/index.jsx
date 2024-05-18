//frontend/src/pages/settings/index.jsx
import React, { useState, useEffect } from 'react';
import PageLayout from '../../layouts/pageLayout';
const Settings = () => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [publicProfile, setPublicProfile] = useState(localStorage.getItem('publicProfile') === 'true' || true);
  const [emailNotifications, setEmailNotifications] = useState(localStorage.getItem('emailNotifications') === 'true' || true);

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    localStorage.setItem('darkMode', newValue);
  };

  const togglePublicProfile = () => {
    const newValue = !publicProfile;
    setPublicProfile(newValue);
    localStorage.setItem('publicProfile', newValue);
  };

  const toggleEmailNotifications = () => {
    const newValue = !emailNotifications;
    setEmailNotifications(newValue);
    localStorage.setItem('emailNotifications', newValue);
  };


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <PageLayout>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <div className="grid grid-cols-1 gap-4">
          {/* Account Settings */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
            <div className="mb-2">
              <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
              <input type="text" id="username" className="form-input w-full" />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
              <input type="email" id="email" className="form-input w-full" />
            </div>
            <div className="mb-2">
              <label htmlFor="bio" className="block text-gray-600 mb-1">Bio</label>
              <textarea id="bio" className="form-textarea w-full" rows="3"></textarea>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Public Profile</p>
              <button
                className={`relative w-10 h-5 rounded-full shadow-inner transition-colors duration-200 ease-in-out focus:outline-double `}
                onClick={togglePublicProfile}
              >
                <span className={`absolute left-0 w-5 h-5 bg-primary rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${publicProfile ? 'translate-x-full' : 'translate-x-0'}`} />
              </button>
            </div>
      
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Notification Settings</h2>
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Email Notifications</p>
              <button
                 className={`relative w-10 h-5 rounded-full shadow-xl transition-colors duration-100 ease-in-out focus:outline-double `}
                onClick={toggleEmailNotifications}
              >
                <span className={`absolute left-0 w-5 h-5 bg-primary rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${emailNotifications ? 'translate-x-full' : 'translate-x-0'}`} />
              </button>
            </div>
        
          </div>

          {/* Theme and Display Settings */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Theme and Display Settings</h2>
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Dark Mode</p>
              <button
                className={`relative w-10 h-5 rounded-full shadow-xl transition-colors duration-100 ease-in-out focus:outline-double `}
                onClick={toggleDarkMode}
              >
                <span className={`absolute left-0 w-5 h-5 bg-primary rounded-full shadow-md transform transition-transform duration-100 ease-in-out ${darkMode ? 'translate-x-full' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
