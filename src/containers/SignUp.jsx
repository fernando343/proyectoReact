import React from "react";
import HeaderOut from "../layouts/HeaderOut";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <HeaderOut />

      <div className="mt-8 container">
        <div className="session">
          <div>
            <h1>LOGO</h1>
            <h3>sign up</h3>

            <form>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Re Password" />
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
              <i className="fa fa-google"></i> Sign Up with Google{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
