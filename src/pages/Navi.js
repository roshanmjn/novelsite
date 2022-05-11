import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import Novels from "./novels-sort/Novels";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { useCookies } from "react-cookie";
import axios from "axios";

const Navi = () => {
  const [cookie] = useCookies([]);
  let navigate = useNavigate();
  const [login, setLogin] = useState(true);
  // console.log(login);

  const logout = () => {
    try {
      axios
        .get("http://localhost:5000/logout", { withCredentials: true })
        .then(() => {
          navigate("/", { replace: true });
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/bookmarks"
                  >
                    Bookmarks
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {login ? (
                  <button
                    className="btn btn-style"
                    type="submit"
                    onClick={() => {
                      logout();
                      setLogin(false);
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-style" type="submit">
                      Login
                    </button>
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navi;
