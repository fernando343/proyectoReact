import React from 'react';

const UserMessage = ({ children }) => {
    return (
        <div className="user-message">
            <h3><strong>Messages</strong></h3>
            <div className="users">
                {children}
            </div>
        </div>
    );
}

export default UserMessage;