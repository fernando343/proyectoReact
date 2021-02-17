import React from 'react';

const WorkListItem = () => {
    return (
        <div className="worklist-item">
            <h4><strong>Work</strong></h4>
            <div className="bar-progres">
                <div className="bar"></div>
                <div className="progress"></div>
            </div>
        </div>
    );
}

export default WorkListItem;