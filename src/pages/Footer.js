import React from "react";
import { NavLink } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer" style={{}}>
        <div className="container">
          <div className="col-8 d-flex flex-row footer-wrapper justify-content-between ">
            <div className="col-4  d-flex flex-column ">
              {/* 1st column 1st row */}
              <div className="col-6 col-lg-4 d-flex justify-content-between">
                <div className="col-6 list-group d-flex flex-row">
                  <NavLink to="" className="list-group-item ">
                    Download
                  </NavLink>
                  <NavLink to="" className="list-group-item">
                    Download
                  </NavLink>
                </div>
              </div>
              {/* 1st column 2nd row */}
              <div className="row d-flex p-3 justify-content-between">
                <div className="col-6 d-flex justify-content-between">
                  <NavLink to="">
                    <FaFacebook style={{ color: "gray", fontSize: "30px" }} />
                  </NavLink>

                  <NavLink to="">
                    <FaTwitter style={{ color: "gray", fontSize: "30px" }} />
                  </NavLink>

                  <NavLink to="">
                    <FaInstagram style={{ color: "gray", fontSize: "30px" }} />
                  </NavLink>
                </div>
              </div>
              {/* 1st column 3rd row */}
              <div className="col-lg-12" style={{ padding: "0 2rem" }}>
                <p className="">Copyright &copy; Novel Site 2022.</p>
              </div>
            </div>

            {/* 2nd column */}
            <div className="col-6 col-lg-6 list-group d-flex flex-column">
              <div className="col-12 col-lg-4 p-2 ">
                <NavLink
                  className="list-group-item list-group-item-action"
                  to=""
                >
                  About Us
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to=""
                >
                  Contact Us
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to=""
                >
                  General FAQ
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to=""
                >
                  Privacy Policy
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
