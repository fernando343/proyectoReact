import React from 'react';
import { Link } from 'react-router-dom'

const Messages = () => {
    return (
        <div className="messages">
            <Link className="flex">
                <i className="fa fa-user" />
                <h4>User</h4>
            </Link>
        </div>
    );
}

export default Messages;