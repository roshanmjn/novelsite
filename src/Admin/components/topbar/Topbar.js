import "./topbar.css";
import React, { useState } from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../images/img1.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Topbar() {
  const navigate = useNavigate();
  const [toggleLogout, setToggleLogout] = useState(false);

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/logout", {
        withCredentials: true,
      });

      if (response.status == 200) {
        navigate("/admin/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <span className="logo">Novel Site</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topbarIcon" />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Language className="topbarIcon" />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Settings
              className="topbarIcon"
              onClick={() => setToggleLogout(!toggleLogout)}
            />
            {toggleLogout ? (
              <div
                className="toggleSettings"
                onClick={logout}
                style={{ fontSize: "20px" }}
              >
                Logout
              </div>
            ) : (
              ""
            )}
          </div>
          <img src={img1} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
