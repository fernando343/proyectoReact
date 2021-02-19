import React, {useState} from "react";
import { Link } from "react-router-dom";

const HeaderOut = () => {
  const Menu = document.getElementById('menum');

  const [showMenu, setShowMenu] = useState(false)

  if(showMenu){
    Menu.classList.add('see-menu');
    Menu.classList.remove('hide-menu');
  }

  return (
    <header className="header">
      <div className="container flex headerout">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="nav-log">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
        <nav className="nav-logout-movil-icon">
          <i className="fa fa-bars" onClick={() => setShowMenu(!showMenu)}/>
        </nav>
      </div>
      <nav className="nav-logout-movil hide-menu" id="menum" >
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
};

export default HeaderOut;
