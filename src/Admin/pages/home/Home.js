import { TabTitle } from "../../../utils/GeneralFunctions";
import "./home.css";
import React from "react";

export default function Home() {
  TabTitle("Dashboard");
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeCounter">
          <div className="homeCounterItem">
            <h3>Total Users</h3>
            <span className="totalCount">99</span>
          </div>
          <div className="homeCounterItem">
            <h3>Novel Count</h3>
            <span className="totalCount">88</span>
          </div>
        </div>
      </div>
      <div>{/*----EMPTY DIV TO SOLVE 100% HEIGHT OCCUPYING PROBLEM----*/}</div>
    </div>
  );
}
