import { React, useState } from "react";
import { NavLink } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import img1 from "../images/img1.jpg";
const Novels = () => {
  const [activeLanguages, setIsActiveLanguages] = useState("0");
  const [activeStatus, setIsActiveStatus] = useState("0");
  const [activeSort, setIsActiveSort] = useState("0");

  return (
    <>
      <div className="container series-container ">
        <div className="col-12 d-flex flex-row justify-content-between flex-wrap series-container-wrapper">
          {/* one */}
          <div className="col-12 col-lg-5 series language-group">
            <div className="col-12 d-flex justifty-content-between flex-column language-group-wrapper">
              <h6 className="language-group-title">Languages</h6>
              <div className="col-12 language-group-item group-item group-item">
                <label htmlFor="">
                  <span
                    className={`${
                      activeLanguages === "0" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveLanguages("0")}
                  >
                    Any
                  </span>
                </label>
                <label htmlFor="">
                  {/* <span className="item"> */}
                  <span
                    className={`${
                      activeLanguages === "1" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveLanguages("1")}
                  >
                    Chinese
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeLanguages === "2" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveLanguages("2")}
                  >
                    Korean
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="col-12 col-lg-7 series status-group">
            <div className="col-12 d-flex justifty-content-between flex-column status-group-wrapper">
              <h6 className="status-group-title">Status</h6>
              <div className="col-12 status-group-item group-item group-item">
                <label htmlFor="">
                  <span
                    className={`${
                      activeStatus === "0" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveStatus("0")}
                  >
                    Any
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeStatus === "1" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveStatus("1")}
                  >
                    Ongoing
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeStatus === "2" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveStatus("2")}
                  >
                    Completed
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeStatus === "3" ? "series-active" : ""
                    } item `}
                    onClick={() => setIsActiveStatus("3")}
                  >
                    Hiatus
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="col-12 series sort-group">
            <div className="col-12 d-flex justifty-content-between flex-column series-group-wrapper">
              <h6 className="sort-group-title">Sort By</h6>
              <div className="col-12 sort-group-item group-item group-item">
                <label htmlFor="">
                  <span
                    className={`${
                      activeSort === "0" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveSort("0")}
                  >
                    Name
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeSort === "1" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveSort("1")}
                  >
                    Popular
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeSort === "2" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveSort("2")}
                  >
                    Chapters
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeSort === "3" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveSort("3")}
                  >
                    New
                  </span>
                </label>
                <label htmlFor="">
                  <span
                    className={`${
                      activeSort === "4" ? "series-active" : ""
                    } item`}
                    onClick={() => setIsActiveSort("4")}
                  >
                    Rating
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="col-12 series genre-group">
            <div className="col-12 d-flex justifty-content-between flex-column genre-group-wrapper">
              <h6 className="genre-group-title">Genre</h6>
              <div className="col-12">
                <input type="text" className="input-genre" />
              </div>
            </div>
          </div>
        </div>
        {/* ---second row start FOR SEARCH--- */}
        <div className="col-12 series-search">
          <div className="col-12 series-search-wrapper d-flex flex-row flex-wrap">
            {/* item-start */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                className="col-12 col-lg-6 d-flex flex-row series-search-item"
                key={i}
              >
                <div className="col-4 series-search-image">
                  <img src={img1} alt="image#1" />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between series-search-textbox">
                  <div className="col-12 series-search-title">title</div>
                  <div className="col-12 series-search-rating">rating</div>
                  <div className="col-12 series-search-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minus quo maiores porro, corrupti sit earum, commodi laborum
                    repellendus suscipit aperiam quos ad a omnis modi quod quasi
                    illum dolorem? Accusamus!
                  </div>
                  <div className="col-12 genre-tags d-flex flex-row series-search-tags">
                    <NavLink>link#1</NavLink>
                    <NavLink>link#2</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Novels;
