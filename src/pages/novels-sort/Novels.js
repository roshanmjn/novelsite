import { React, useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { BrowserRouter, useNavigate } from "react-router-dom";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import SortMenu from "./Sort-Menu";
import { TabTitle } from "../../utils/GeneralFunctions";
import axios from "axios";
const Novels = () => {
  TabTitle("Novels");
  const backendRoute = "http://localhost:5000/uploads/";
  const [novel, setNovel] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/novels");
    if (response.status === 200) {
      // console.log(response.data);
      setNovel(response.data);
    }
  }, []);
  const ListAllNovels = (item, idx) => {
    return (
      <div
        className="col-12 col-lg-6 d-flex flex-row series-search-item"
        key={idx}

        // style={{ boxShadow: "1px 1px 2px 2px gray" }}
      >
        <div
          className="col-4 series-search-image"
          onClick={() => {
            navigate(`/novel/${item.item.id}`);
          }}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <img
            src={backendRoute + item.item.image}
            alt="image#1"
            loading="lazy"
          />
          <p
            style={{
              position: "absolute",
              zIndex: "99",
              top: "0px",
              color: "white",
              background: "gray",
              padding: "2px 4px",
              borderRadius: " 8px 0 3px 0",
            }}
          >
            {item.item.status}
          </p>
        </div>
        <div className="col-8 d-flex flex-column justify-content-between series-search-textbox">
          <div
            className="col-12 series-search-title"
            style={{
              fontSize: "18px",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/novel/${item.item.id}`);
            }}
          >
            {item.item.name}
          </div>
          <div className="col-12 series-search-rating">{item.item.rating}</div>
          <div className="col-12 series-search-description">
            {item.item.description}
          </div>
          <div
            className="col-12 genre-tags d-flex flex-row series-search-tags"
            style={{
              fontSize: "14px",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <NavLink>{item.item.genre_name}</NavLink>
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
            {novel.map((item, idx) => {
              return <ListAllNovels item={item} image={img1} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Novels;
