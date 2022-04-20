import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../login/login.css";

const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="container-wrapper signup-form-wrapper d-flex flex-column justify-content-between ">
          {" "}
          <form className="signup-form">
            <div className="col-8 col-lg-4 mx-auto">
              <h4 className="signup-heading">Sign up</h4>
              <div className="mb-3">
                <label for="signup-email" className="form-label signup-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control signup-input"
                  id="signup-username"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <label for="signup-email" className="form-label signup-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control signup-input"
                  id="signup-email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  for="signup-password"
                  className="form-label signup-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control signup-input"
                  id="signup-password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label
                  for="signup-confirm-password"
                  className="form-label signup-label"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control signup-input"
                  id="signup-confirm-password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-label signup-label" for="signup-check">
                  I have read and agree to ‘Privacy Policy’ and ‘Terms of Use’.
                </label>
              </div>
              <button type="submit" className="btn btn-primary signup-btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
