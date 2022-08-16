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
          <h2>Create user</h2>
        </div>
        <div className="createUserForm">
          {/* new */}
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="fullname" className="createUserLabel">
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
            <div className="">
              <label htmlFor="addr" className="createUserLabel">
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
            <div className="">
              <label htmlFor="email" className="createUserLabel">
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
            <div className="">
              <label htmlFor="username" className="createUserLabel">
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
            <div className="">
              <label htmlFor="pwd" className="createUserLabel">
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
            <div className="">
              <label htmlFor="gender" className="createUserLabel">
                Gender
              </label>
              <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="form-gender">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    onChange={handleInputChange}
                    value="male"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="form-gender">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    onChange={handleInputChange}
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <button
                className="btn btn-danger"
                onClick={() => navigate("/admin/users")}
                style={{ fontSize: "25px !important", marginLeft: "18em" }}
              >
                Cancel
              </button>
            </div>
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
