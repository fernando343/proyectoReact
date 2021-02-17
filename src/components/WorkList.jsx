import React from 'react';

const WorksList = ({children}) => {
    return (

        <div className="worklist">
            <h3>Works in pogress</h3>
            <div className="worklist-items">
                {children}
            </div>
        </div>

    );
}

export default WorksList;