import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link>
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
            <Link>
              <i className="fa fa-sign-out" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
