import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { TabTitle } from "../../../utils/GeneralFunctions";
import "./AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function AdminLogin() {
  TabTitle("Admin Login");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const [input, setInput] = useState({});
  const [error, setError] = useState({ state: "false", message: "" });

  useEffect(() => {
    if (cookies.jwtadmin) {
      navigate("/admin", { replace: true });
    }
  }, [cookies, navigate, removeCookie]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/login",
        input,
        { withCredentials: true }
      );
      if (response.status == 200) {
        navigate("/admin");
      }
      // if (window.history.state && window.history.idx > 0) {
      //   navigate(-1);
      // } else {
      //   navigate("/", { replace: true });
      // }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
        // console.log(err.response.status);
        // console.log(err.response.headers);
        // console.log(err.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className=" col-12 login">
        <div className="col-10 d-flex align-items-center flex-column mt-5">
          <h1 className="display-2 f">Login</h1>
        </div>

        <div className="loginWrapper">
          <div className="loginForm">
            <form className="loginFormForm" onSubmit={handleSubmit}>
              <label htmlFor="uname" className="loginLabel">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="uname"
                className="loginInput"
                onChange={handleChange}
              />
              <label htmlFor="pwd" className="loginLabel">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="pwd"
                className="loginInput"
                onChange={handleChange}
              />
              <button className="loginButton">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
