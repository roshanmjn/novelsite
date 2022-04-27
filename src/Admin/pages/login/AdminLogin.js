import axios from "axios";
import React from "react";
import { useState } from "react";

import { NavItem } from "react-bootstrap";
import { TabTitle } from "../../../utils/GeneralFunctions";
import "./AdminLogin.css";

function AdminLogin() {
  TabTitle("Admin Login");
  const [input, setInput] = useState({});
  const [error, setError] = useState({ state: "false", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost/test/user/save", input)
    //   .then((res) => console.log(res.data));

    if (input.username && input.password) {
      setError({ state: "true", message: "Welcome Admin" });
    } else {
      setError({ state: "true", message: "Empty fields" });
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error.message}
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
              placeholder="password"
              id="pwd"
              className="loginInput"
              onChange={handleChange}
            />
            <button className="loginButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
