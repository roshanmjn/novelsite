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
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/login",
        input,
        { withCredentials: true }
      );
      if (response.status == 200) {
        navigate("/admin");
      }
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
    <div className="admin-login-container">
      <div className="container">
        <ToastContainer position="top-center" autoClose={2000} />
        <div
          className="row d-flex justify-content-center "
          style={{ margin: "0", padding: "0" }}
        >
          <div className="col-12 col-lg-8 col-xl-6 d-flex flex-column align-items-center">
            <div className="col mb-5 text-center">
              <h3 className="display-5 admin-login-title">Novel Site</h3>
              <h2 className=" display-2 admin-login-title">Admin Login</h2>
            </div>
            <div className="col-10 col-sm-8 col-lg-6 shadow-sm admin-login-form">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    className="form-label admin-login-label"
                    htmlFor="uname"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="uname"
                    class="form-control admin-login-input"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label admin-login-label" htmlFor="pwd">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control admin-login-input"
                    id="pwd"
                    onChange={handleChange}
                  />
                </div>
                <div className="col d-flex justify-content-center">
                  <button className="btn btn-primary admin-login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
