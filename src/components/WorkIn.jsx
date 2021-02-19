import React from "react";

const WorkIn = (props) => {
  const { title, content, skills, status, price } = props;

  return (
    <div className="workin">
      <div className="work-header flex">
        <i className="fa fa-camera-retro" />
        <h2>{title}</h2>
      </div>
      <div className="work-body">
        <p>{content}</p>
        <p>
          <i className="fa fa-tags" /> <span>{skills}</span>
        </p>
        <p className="work-fo">
          <span>
            {status ? (
              <p>
                <i className="fa fa-check" /> <span>Taken</span>
              </p>
            ) : (
              <p>
                <i className="fa fa-times" /> <span>No Taken</span>
              </p>
            )}
          </span>
          <span>
            <i className="fa fa-dollar" />
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WorkIn;
