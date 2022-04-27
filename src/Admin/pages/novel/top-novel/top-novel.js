import React from "react";
import { ArrowUpward } from "@material-ui/icons";
import "./top-novel.css";
import Profile from "../../../../images/img2.png";
import Data from "../../../dummy.json";
import { TabTitle } from "../../../../utils/GeneralFunctions";

//--CREATING CUSTOM ITEM TAG THAT TAKES CUSTOM PROPS
const ItemSort = ({ name, status, genre, description }) => {
  return (
    <div className="col-12 col-lg-6  d-flex flex-row justify-content-start mb-4 item-container flex-wrap">
      <div className="col-3 col-md-3 col-lg-2 image-container">
        <img src={Profile} alt="image1" className="item-image" />
        <span className="item-status">{status}</span>
      </div>
      <div className="col-7 col-md-7 col-lg-8 d-flex flex-column flex-wrap justify-content-between mx-4">
        <div className="col-12 item-title">{name}</div>
        <div
          className="col-12 item-description"
          style={{ height: "20px !important", textOverflow: "ellipsis" }}
        >
          <p>{description}</p>
        </div>
        <div className="col-12 ">
          {genre.map((item, idx) => {
            return <span className="item-genre">{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default function TopNovel() {
  TabTitle("Trending Novels");
  return (
    <div className="topNovel ">
      <div className="container">
        <div className="col-10">
          <div className="col-12 d-flex flex-row justify-content-between p-0">
            <h1 className="display-6">Top Novels</h1>
          </div>
          <div className="col-12">
            <div className="col-12 d-flex flex-row flex-wrap">
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Languages</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Chinese</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Korean</span>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Status</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Ongoing</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex flex-column mt-2">
                <h6 className="display-7">Sort By</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="thisItem">
                    <span className="select-item">Any</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Ongoing</span>
                  </div>
                  <div className="thisItem">
                    <span className="select-item">Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mt-2">
                <h6 className="display-7">Genres</h6>
                <div className="col-12 d-flex flex-row justify-content-start">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Select genre"
                      className="form-control thisInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*---------------Item sorting start----------------*/}
        <div className="col-10 d-flex flex-row flex-wrap mt-5">
          {Data.map((asd) => {
            return (
              <ItemSort
                id={asd.id}
                name={asd.name}
                status={asd.status}
                genre={asd.genre}
                description={asd.description}
              />
            );
            // return genre.map((item, idx) => <>{console.log(item)}+</>);
            return console.log(asd.genre);
            // console.log(asd.id, asd.name, asd.status, asd.genre);
          })}
        </div>
      </div>
    </div>
  );
}
