import React from "react";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../utils/GeneralFunctions";

const PageNotFound = () => {
  TabTitle("Page not found");
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="col-12 " style={{ height: "50vh" }}>
        <p
          style={{
            fontSize: "25px",
            textAlign: "center",
            margin: "80px 0",
          }}
        >
          This page either does not exist or has mysteriously disappeared.
          <br /> Perhaps the page has ascended to a new world?
        </p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-secondary"
            style={{ fontSize: "25px", borderRadius: "20px" }}
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
