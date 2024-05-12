import React, { useState, useEffect } from 'react';
import PageLayout from '../../layouts/pageLayout';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/notifications');
        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          console.error('Failed to fetch notifications:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-semibold mb-4">Notifications</h1>
        <div className="divide-y divide-gray-300">
          {notifications.map(notification => (
            <div key={notification._id} className="py-4">
              <div className="flex items-center justify-between">
                <p className="text-lg">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Notifications;
