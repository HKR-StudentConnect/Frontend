import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000/chats'); 

const ChatWindow = ({ user, chatSession }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.emit('join', chatSession._id);

    socket.on('receive-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, [chatSession]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/chat-messages/${chatSession._id}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, [chatSession]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        chatSessionId: chatSession._id,
        senderId: user._id,
        receiverId: chatSession.participants.find(p => p._id !== user._id)._id,
        content: newMessage,
      };

      try {
        await axios.post('/api/chat-messages', message);
        socket.emit('send-message', message);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message', error);
      }
    }
  };

  return (
    <div className="chat-window flex flex-col h-full">
      <div className="messages flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message mb-2 p-2 rounded ${msg.sender._id === user._id ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area p-4 border-t border-gray-200">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type your message"
        />
        <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded mt-2">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
