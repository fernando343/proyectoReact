import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeaderOut from "../layouts/HeaderOut";
import { loginRequest } from "../actions";


const LogIn = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/dashboard");
  };

  return (
    <>
      <HeaderOut />

      <div className="mt-8 container">
        <div className="session">
          <div>
            <h1>LOGO</h1>
            <h3>Log In</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInput}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInput}
              />
              <input type="Submit" value="Sign up" />
            </form>
            <p>
              You have account? <Link href="">Log In</Link>
            </p>
            <span></span>
            <Link href="#facebook" className="network">
              <i className="fa fa-facebook-f"></i> Sign Up with Facebook
            </Link>
            <Link href="#google" className="network">
              <i className="fa fa-google"></i> Sign Up with Google
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LogIn);
