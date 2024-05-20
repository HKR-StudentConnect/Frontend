import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatList = ({ user, onSelectChat }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`/api/chat-sessions/${user._id}`);
        setSessions(response.data);
      } catch (error) {
        console.error('Error fetching chat sessions', error);
      }
    };

    fetchSessions();
  }, [user]);

  return (
    <div className="chat-list">
      {sessions.map((session) => (
        <div key={session._id} onClick={() => onSelectChat(session)} className="p-4 border-b cursor-pointer">
          {session.participants.find(p => p._id !== user._id).username}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
