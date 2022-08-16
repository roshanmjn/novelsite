import React, { useContext, useEffect, useState } from "react";
import Novels from "./novels-sort/Novels";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UserContext } from "../pages/UserContext";
import { Login } from "@mui/icons-material";

const Navi = () => {
  const { login, setLogin, userData } = useContext(UserContext);
  const checkLogin = localStorage.getItem("login");
  const checkUser = localStorage.getItem("uname");

  const [cookie] = useCookies([]);
  let navigate = useNavigate();
  // useEffect(() => {
  //   if (!checkLogin) {
  //     navigate("/", { replace: true });
  //   }
  // }, []);

  const logout = () => {
    try {
      axios
        .get("http://localhost:5000/logout", { withCredentials: true })
        .then(() => {
          setLogin(false);
          localStorage.removeItem("login");
          localStorage.removeItem("uid");
          localStorage.removeItem("uname");
          // navigate("/", { replace: true });
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
            <Link
              className="navbar-brand"
              to="/"
              style={{ fontSize: "2.6rem" }}
            >
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
                    style={{ fontSize: "2.2rem" }}
                  >
                    Sites
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/bookmarks"
                    style={{ fontSize: "2.2rem" }}
                  >
                    Bookmarks
                  </Link>
                </li>
                {checkLogin ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/recommendations"
                      style={{ fontSize: "2.2rem" }}
                    >
                      Recommendations
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <form className="d-flex">
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}

                {checkLogin ? (
                  <div className=" col-2 col-lg-12 d-flex flex-row align-items-center flex-wrap">
                    <h5
                      style={{
                        lineHeight: "30px",
                        fontSize: "20px",
                        marginRight: "20px",
                        padding: "0 10px",
                      }}
                    >
                      {checkUser}
                    </h5>
                    <button
                      className="btn btn-style"
                      type="submit"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        fontSize: "17px",
                        borderRadius: "10px",
                        padding: "5px 15px",
                      }}
                    >
                      Login <Login style={{ fontSize: "17px" }} />
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
