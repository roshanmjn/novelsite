import "../../user/create-user/create-user.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  status: "",
};

export default function CreateGenre() {
  TabTitle("Create Genre");
  const navigate = useNavigate();
  const [genre, setGenre] = useState(initialState);

  const { title, description, status } = genre;

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
    setGenre((values) => {
      const newFormInput = { ...values, [name]: value };
      // console.log(newFormInput);
      return newFormInput;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!genre.title || !genre.description || !genre.status) {
      toast.error("Empty Fields");
    }
    try {
      const response = await axios.post(
        `http://localhost:5000/admin/novels/genre/insert`,
        genre,
        { withCredentials: true }
      );
      // console.log(response.data);
      if (response.status == 200) {
        setTimeout(() => {
          navigate("/admin/novels/genre", { replace: true });
        }, 2000);
        toast.success("New Genre Inserted Successfully !");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="createUser">
      <div className="createUserWrapper">
        <div className="createUserHeader">
          <h5
            className="display-5"
            style={{ fontWeight: "500", borderBottom: "2px solid black" }}
          >
            Create Genre
          </h5>
        </div>
        <div className="createUserForm" style={{ marginTop: "25px" }}>
          {/* new */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="genretitle"
                className="form-label createUserLabel"
              >
                Genre Title
              </label>
              <input
                type="text"
                className="form-control"
                id="genretitle"
                placeholder="Title"
                name="title"
                onChange={handleInputChange}
                value={title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="genredesc" className="form-label createUserLabel">
                Description
              </label>
              <textarea
                cols="10"
                rows="4"
                name="description"
                placeholder="Title Description"
                className="form-control"
                id="genredesc"
                wrap="hard"
                style={{ fontSize: "17px" }}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3 ">
              <label className="form-label createUserLabel">Status</label>
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  className="form-check-input"
                  id="active"
                  onChange={handleInputChange}
                  value="1"
                />
                <label htmlFor="active" className="form-check-label">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  className="form-check-input"
                  id="inactive"
                  onChange={handleInputChange}
                  value="0"
                />
                <label htmlFor="inactive" className="form-check-label">
                  In-Active
                </label>
              </div>
            </div>

            <div className="buttons">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <span
                className="btn btn-danger"
                onClick={() => navigate("/admin/novels/genre")}
                style={{ fontSize: "25px !important", marginLeft: "18em" }}
              >
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}
