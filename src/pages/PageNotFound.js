import React from "react";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../utils/GeneralFunctions";

const PageNotFound = () => {
  TabTitle("Page not found");
  let navigate = useNavigate();
  return (
    <div>
      <p>
        This page either does not exist or has mysteriously disappeared. Perhaps
        the page has ascended to a new world?
      </p>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
