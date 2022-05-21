import axios from "axios";
import React, { useState, useContext } from "react";
import { NavLink } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../UserContext";

const Login = () => {
  const { setLogin, userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (response.status == 200) {
        // console.log(response.data);
        setUserData(response.data);
        setLogin(true);
        localStorage.setItem("login", true);
        localStorage.setItem("uid", response.data.id);
        navigate("/", { replace: true });
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          toast.error("API error");
        } else {
          toast.error(err.response.data.message);
        }
        // console.log(err.response.status);
        // console.log(err.response.headers);
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="container-wrapper login-form-wrapper d-flex flex-column justify-content-between ">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="col-8 col-lg-4 mx-auto">
              <h4 className="login-heading">Log in</h4>
              <div className="mb-3">
                <ToastContainer position="top-center" autoClose={5000} />
                <label htmlFor="login-email" className="form-label login-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control login-input"
                  id="login-email"
                  placeholder="Email"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setUsername(e.target.value);
                  }}
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
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setPassword(e.target.value);
                  }}
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
