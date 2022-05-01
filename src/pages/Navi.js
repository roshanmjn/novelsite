import React from "react";
import { NavLink } from "react-bootstrap";
import Novels from "./novels-sort/Novels";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const Navi = () => {
  let navigate = useNavigate();
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/home">
              Novel Site
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/novels"
                  >
                    Sites
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Bookmarks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link to="/login">
                  <button
                    className="btn btn-style"
                    type="submit"
                    // onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navi;
