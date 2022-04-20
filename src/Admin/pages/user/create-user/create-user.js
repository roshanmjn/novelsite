import "./create-user.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function onSubmit(e) {
  e.preventDefault();
}
export default function CreateUser() {
  const navigate = useNavigate();
  return (
    <div className="createUser">
      <div className="createUserWrapper">
        <div className="createUserHeader">
          <h5 class="display-5">Create user</h5>
          <span className="btn btn-danger" onClick={() => navigate("/users")}>
            Cancel
          </span>
        </div>
        <div className="createUserForm" style={{ marginTop: "50px" }}>
          {/* new */}
          <form>
            <div class="mb-3">
              <label for="fullname" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Full name"
                name="fullname"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                class="form-control"
                id="username"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
