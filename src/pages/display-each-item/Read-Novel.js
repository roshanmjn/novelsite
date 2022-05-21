import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./novel-item.css";
import { UserContext } from "../UserContext";

export const ReadNovel = () => {
  const { id, chapter_id } = useParams();
  const navigate = useNavigate();
  //   console.log(id);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/novels/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        //   console.log(res.data[0]);
        setTitle(res.data[0]);
      });
  }, []);
  return (
    <div className="container">
      <div
        className="col-12"
        style={{ height: "100vh", background: "#e8e8e8" }}
      >
        <div className="col-12 d-flex flex-row">
          <button
            className="btn btn-secondary"
            style={{
              fontSize: "14px",
              padding: "0 5px",
              height: "25px",
              lineHeight: "20px",
            }}
            onClick={() => {
              navigate(`/novel/${id}`);
            }}
          >
            ← Go back
          </button>
          <h5 style={{ fontSize: "24px", paddingLeft: "40px" }}>
            {title ? title.name : ""}
          </h5>
        </div>
        <iframe
          src={title.description}
          style={{
            width: "100%",
            height: "90vh",
          }}
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};
