import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="container-wrapper login-form-wrapper d-flex flex-column justify-content-between ">
          <form className="login-form">
            <div className="col-8 col-lg-4 mx-auto">
              <h4 className="login-heading">Log in</h4>
              <div className="mb-3">
                <label htmlFor="login-email" className="form-label login-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="login-email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="login-password"
                  className="form-label login-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="login-password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check">
                <label className="form-label" htmlFor="login-check">
                  Don't have an account?<Link to="/signup">Sign up</Link>
                </label>
              </div>
              <button type="submit" className="btn btn-primary login-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
