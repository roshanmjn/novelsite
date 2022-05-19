import "./sidebar.css";
import {
  Edit,
  GroupAdd,
  Home,
  LineStyle,
  NewReleases,
  People,
  Toc,
  TrendingUp,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("0");
  let activeStyle = {
    color: "#09369e",
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink
              end
              to="/admin"
              className="sidebarListItem "
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem ">
                <Home className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink
              to="/admin/news"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <NewReleases className="sidebarIcon" />
                News
              </li>
            </NavLink>
            <NavLink
              to="/admin/popular"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <Whatshot className="sidebarIcon" />
                Popular
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink
              end
              to="/admin/users"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem ">
                <People className="sidebarIcon" />
                Users
              </li>
            </NavLink>
            <NavLink
              end
              to="/admin/users/create"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <GroupAdd className="sidebarIcon" />
                Authors Create
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Novels</h3>
          <ul className="sidebarList">
            <NavLink
              to="/admin/novels"
              end
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Novel List
              </li>
            </NavLink>
            <NavLink
              to="/admin/novels/upload"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem ">
                <Edit className="sidebarIcon" />
                Upload New
              </li>
            </NavLink>
            <NavLink
              to="/admin/novels/top"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Top Novels
              </li>
            </NavLink>
            <NavLink
              to="/admin/novels/genre"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="sidebarListItem">
                <Toc className="sidebarIcon" />
                Genre
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
