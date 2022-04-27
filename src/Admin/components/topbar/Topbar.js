import "./topbar.css";
import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../images/img1.jpg";

function Topbar() {
  const navigate = useNavigate();
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
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language className="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings className="topbarIcon" />
          </div>
          <img src={img1} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
