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
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("0");

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" activeClassName="active-link">
              <li className="sidebarListItem ">
                <Home className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/news">
              <li className="sidebarListItem">
                <NewReleases className="sidebarIcon" />
                News
              </li>
            </NavLink>
            <NavLink to="/popular">
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
            <NavLink to="/users">
              <li className="sidebarListItem ">
                <People className="sidebarIcon" />
                Users
              </li>
            </NavLink>
            <NavLink to="/users/create" activeClassName="active-link">
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
            <NavLink to="/novels" activeClassName="active-link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/novels/upload" activeClassName="active-link">
              <li className="sidebarListItem ">
                <Edit className="sidebarIcon" />
                Upload New
              </li>
            </NavLink>
            <NavLink to="/novels/top" activeClassName="active-link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Top Novels
              </li>
            </NavLink>
            <NavLink to="/novels/genre" activeClassName="active-link">
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
