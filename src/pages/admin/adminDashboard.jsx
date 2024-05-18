// frontend/src/pages/admin/adminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, deleteUser, suspendUser, sendNotification, postEvent } from '../../store/actions/adminActions';
import '../../index.css';


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { allUsers: users, loading, error } = useSelector((state) => state.user);
  const [notification, setNotification] = useState('');
  const [event, setEvent] = useState('');

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSuspend = (id, days) => {
    dispatch(suspendUser(id, days));
  };

  const handleSendNotification = () => {
    dispatch(sendNotification(notification));
    setNotification('');
  };

  const handlePostEvent = () => {
    dispatch(postEvent(event));
    setEvent('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users) {
    return <div>No users found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <span>{user.email}</span>
              <div className="flex space-x-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleSuspend(user.id, 7)}
                >
                  Suspend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send Notification</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter notification"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSendNotification}
          >
            Send
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Post Event</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter event"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handlePostEvent}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

