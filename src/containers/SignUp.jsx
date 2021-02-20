import React, { useState } from "react";
import HeaderOut from "../layouts/HeaderOut";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";

const SignUp = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/dashboard");
  };

  return (
    <>
      <HeaderOut />

      <div className="mt-8 container">
        <div className="session">
          <div>
            <h1>LOGO</h1>
            <h3>sign up</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleInput}
              />
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
              <input
                type="password"
                placeholder="Re Password"
                onChange={handleInput}
              />
              <input type="Submit" value="Sign up" onChange={handleInput} />
            </form>
            <p>
              You have account? <Link href="">Log In</Link>
            </p>
            <span></span>
            <Link href="#facebook" className="network">
              <i className="fa fa-facebook-f"></i> Sign Up with Facebook
            </Link>
            <Link href="#google" className="network">
              <i className="fa fa-google"></i> Sign Up with Google{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(SignUp);
