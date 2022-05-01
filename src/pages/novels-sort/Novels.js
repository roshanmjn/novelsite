import { React, useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import SortMenu from "./Sort-Menu";
import { TabTitle } from "../../utils/GeneralFunctions";
import axios from "axios";
const Novels = () => {
  TabTitle("Novels");

  const [novel, setNovel] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/novels");
    if (response.status === 200) {
      console.log(response.data);
      setNovel(response.data);
    }
  }, []);
  const ListAllNovels = (item, idx) => {
    return (
      <div
        className="col-12 col-lg-6 d-flex flex-row series-search-item"
        key={idx}
      >
        <div className="col-4 series-search-image">
          <img src={img4} alt="image#1" />
        </div>
        <div className="col-8 d-flex flex-column justify-content-between series-search-textbox">
          <div className="col-12 series-search-title">{item.item.name}</div>
          <div className="col-12 series-search-rating">{item.item.rating}</div>
          <div className="col-12 series-search-description">
            {item.item.description}
          </div>
          <div className="col-12 genre-tags d-flex flex-row series-search-tags">
            <NavLink>{item.item.genre}</NavLink>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container series-container ">
        <SortMenu />
        {/* ---second row start FOR SEARCH--- */}
        <div className="col-12 series-search">
          {/* item-start */}
          <div className="col-12 series-search-wrapper d-flex flex-row flex-wrap">
            {novel.map((item) => {
              return <ListAllNovels item={item} image={img1} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Novels;
