import React from "react";


const ChatUsers = ({ children }) => {
  return (
    <div className="chat-users">
      <div className="title-chat">
        <h3>Messages</h3>
      </div>
      <div className="users-chat">{children}</div>
    </div>
  );
};

export default ChatUsers;
