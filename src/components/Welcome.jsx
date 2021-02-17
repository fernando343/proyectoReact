import React from 'react';

const Welcome = ({ children }) => {
    return (
        <div className="welcome">
            <h2>Welcome <strong>User</strong></h2>
            {children}
        </div>
    );
}

export default Welcome;