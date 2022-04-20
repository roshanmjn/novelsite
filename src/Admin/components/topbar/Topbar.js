import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import img1 from "../../../images/img1.jpg";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Novel Site</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={img1} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
