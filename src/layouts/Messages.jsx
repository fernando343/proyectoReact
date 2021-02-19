import React from 'react';

const Messages = () =>{
    return (
        <div className="messages">
            <div className="title-sms">
            <h3>Messages</h3>
            </div>

            <form>
                <div className="form">
                <textarea></textarea>
                <i className="fa fa-paper-plane" />
                </div>
            </form>
        </div>
    );
}

export default Messages;