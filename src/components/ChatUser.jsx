import React from "react";
import UserImg from "../assets/img/user.png";

const ChatUser = () => {
  return (
    <div className="chat-user">
      <img src={UserImg} alt="user-img" />
      <strong>
        <p>UserName</p>
      </strong>
    </div>
  );
};

export default ChatUser;
