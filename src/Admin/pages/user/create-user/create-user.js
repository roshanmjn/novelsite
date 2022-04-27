import "./create-user.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  fullname: "",
  address: "",
  email: "",
  username: "",
  password: "",
};

const currentDate = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
};

export default function CreateUser() {
  TabTitle("Create  User");
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);

  const { fullname, address, email, username, password, gender, created_on } =
    user;

  //post request to create new user
  const addUser = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/users/create",
      data
    );
    if (response.status === 200) {
      // console.log(response.data);
    }
  };
  //HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser((values) => {
      const newFormInput = { ...values, [name]: value };
      // console.log(newFormInput);
      return newFormInput;
    });
    // console.log("delay:", user);
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = JSON.stringify(currentDate());

    if (
      !user.fullname ||
      !user.address ||
      !user.email ||
      !user.password ||
      !user.gender ||
      !user.username
    ) {
      toast.error("Empty Fields");
    } else {
      const createdUserData = { ...user, timestamp };
      sendUserData(createdUserData);
    }
  };

  const sendUserData = async (data) => {
    // console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:5000/admin/users/create`,
        data
      );
      console.log(response.data);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="createUser">
      <div className="createUserWrapper">
        <div className="createUserHeader">
          <h5 className="display-5">Create user</h5>
          <span
            className="btn btn-danger"
            onClick={() => navigate("/admin/users")}
            style={{ fontSize: "20px !important" }}
          >
            Cancel
          </span>
        </div>
        <div className="createUserForm" style={{ marginTop: "50px" }}>
          {/* new */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label createUserLabel">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Full name"
                name="fullname"
                onChange={handleInputChange}
                value={fullname}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addr" className="form-label createUserLabel">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="form-control"
                id="addr"
                onChange={handleInputChange}
                value={address}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label createUserLabel">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="form-control"
                id="email"
                onChange={handleInputChange}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label createUserLabel">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="form-control"
                id="username"
                onChange={handleInputChange}
                value={username}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label createUserLabel">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-control"
                id="pwd"
                onChange={handleInputChange}
                value={password}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="gender" className="form-label createUserLabel">
                Gender
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  className="form-check-input"
                  id="male"
                  onChange={handleInputChange}
                  value="male"
                />
                <label htmlFor="male" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  className="form-check-input"
                  id="female"
                  onChange={handleInputChange}
                  value="female"
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}
