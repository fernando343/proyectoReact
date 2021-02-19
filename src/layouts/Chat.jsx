import React from "react";
import ChatUsers from "./ChatUsers";
import ChatUser from "../components/ChatUser";
import Messages from '../layouts/Messages';
import Header from "../layouts/Header";

const Chat = () => {
  return (
    <>
      <Header />
      <div className="mt-6 container chat">
        <ChatUsers>
          <ChatUser />
        </ChatUsers>
        <Messages/>
      </div>
    </>
  );
};

export default Chat;
