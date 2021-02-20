import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";

const Header = (props) => {

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <>
      <header className="header">
        <div className="container flex">
          <nav>
            <Link to="/dashboard">
              <i className="fa fa-home" />
            </Link>
            <Link>
              <i className="fa fa-bell" />
            </Link>
            <Link to="/userprofile">
              <i className="fa fa-user" />
            </Link>
            <Link to="/workslist">
              <i className="fa fa-list" />
            </Link>
            <Link to="/chat">
              <i className="fa fa-comments" />
            </Link>
          </nav>
          <div className="search-nav">
            <input type="search" placeholder="Search" />
            <a href="#logout" onClick={handleLogout}>
              <i className="fa fa-sign-out" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
