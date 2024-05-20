import React, { useState } from 'react';
import ChatList from '../../components/chat/chatlist';
import ChatWindow from '../../components/chat/chatwindow';

const Chat = () => {
  const user = { _id: 'currentUserId', username: 'currentUsername' }; 
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="app flex h-screen">
      <div className="flex w-3/4 h-full">
        <div className="flex-1 border-r border-gray-200">
          <ChatList user={user} onSelectChat={setSelectedChat} />
        </div>
        <div className="flex-1">
          {selectedChat ? (
            <ChatWindow user={user} chatSession={selectedChat} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
