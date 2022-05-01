import axios from "axios";
import React from "react";
import { useState } from "react";
import { TabTitle } from "../../../utils/GeneralFunctions";
import "./AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  TabTitle("Admin Login");
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [error, setError] = useState({ state: "false", message: "" });

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
        input
      );
    } catch (err) {
      console.log(err);
    }

    // setError(response.data);

    // if (response.status === 200) {
    //   toast.error("login success");
    //   navigate("/admin", { replace: true });
    // } else if (response.status === 400) {
    //   toast.error("Incorrect username or password");
    // } else if (response.status === 404) {
    //   toast.error("Please register first to login !");
    // }

    // if (input.username && input.password) {
    //   setError({ state: "true", message: "Welcome Admin" });
    // } else {
    //   setError({ state: "true", message: "Empty fields" });
    // }
  };

  return (
    <div className="container">
      <ToastContainer />
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
