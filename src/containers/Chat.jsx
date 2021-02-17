import React from 'react';
import UserMessage from '../components/UserMessage';
import Messages from '../components/Messages';
import Chats from '../components/Chats';
import UserChat from '../components/UserChat';

const Chat = () =>{
    return (
        <div className="chat">
            <UserMessage>
                <Messages />
            </UserMessage>
            <Chats>
                <UserChat />
            </Chats>
        </div>
    );
}

export default Chat;