import React from "react";
import { connect } from "react-redux";

const Welcome = (props) => {
  const { user } = props;
  const hashUser = Object.keys(user).length > 0;

  return (
    <div className="welcome">
      <h2>
        Welcome {hashUser ? <strong> {user.username}</strong> : null}
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Welcome);
