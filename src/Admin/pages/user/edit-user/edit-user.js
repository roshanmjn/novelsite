import "./create-user.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function onSubmit(e) {
  e.preventDefault();
}
export default function EditUser() {
  const navigate = useNavigate();
  return (
    <div className="editUser">
      <div className="editUserWrapper">
        <div className="editUserHeader">
          <h1>Create user</h1>
          <span className="editUserCancel" onClick={() => navigate("/users")}>
            Cancel
          </span>
        </div>
        <div className="editUserForm">
          <form onSubmit={onSubmit} className="userForm">
            <label className="userFormLabel" htmlFor="fullname">
              Full Name
            </label>
            <input
              className="userFormInput"
              type="text"
              placeholder="Full name"
              name="fullname"
              id="fullname"
            />
            <label className="userFormLabel" htmlFor="email">
              Email
            </label>
            <input
              className="userFormInput"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
            />
            <label className="userFormLabel" htmlFor="username">
              Username
            </label>
            <input
              className="userFormInput"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
            <button type="submit" className="userFormButton">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
