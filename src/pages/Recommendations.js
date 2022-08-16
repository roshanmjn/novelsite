import React, { useEffect, useState } from "react";
import axios from "axios";
import { TabTitle } from "../utils/GeneralFunctions";
import { NavLink, useNavigate } from "react-router-dom";
import { array } from "yup";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Recommendations() {
  TabTitle("Recommendations");
  const backendRoute = "http://localhost:5000/uploads/";
  const navigate = useNavigate();
  const checkLogin = localStorage.getItem("login");
  const checkUserId = localStorage.getItem("uid");
  const checkUsername = localStorage.getItem("uname");
  const [recommend, setRecommend] = useState([]);
  const averageRating = {};
  const [avg, setAvg] = useState([]);
  const item_array = [];
  var obj = {};

  useEffect(async () => {
    if (checkLogin && checkUsername) {
      const request1 = await axios.post(
        "http://localhost:5000/recommendation-object",
        {
          withCredentials: true,
        }
      );
      const response1 = request1.data;

      const request2 = await axios.post(
        "http://localhost:5000/recommendation-algorithm",
        { data: response1, user1: checkUsername },
        {
          withCredentials: true,
        }
      );
      const response2 = request2.data;
      // console.log(response2);
      //
      await Promise.all(
        response2.map(async (x) => {
          const request3 = await axios.get(
            `http://localhost:5000/novels/${x[0]}`,
            { params: { _limit: 3 }, withCredentials: true }
          );
          // averageRating[x[0]] = x[1];
          // averageRating.push(x[0]);
          // console.log(x[0]);

          const response3 = request3.data[0];

          averageRating[x[0]] = x[1];
          item_array.push(response3);
        })
      );
      setRecommend(item_array);
      setAvg(averageRating);
      // console.log(averageRating);
    }
  }, []);
  // console.log(avg);
  const ListAllNovels = (item, idx) => {
    // console.log(item.item);

    return (
      <div
        className="col-12 col-lg-6 d-flex flex-row series-search-item"
        key={item.item.id}
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
            alt={item.item.image}
            // loading="lazy"
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
              fontSize: "1.6rem",
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
              // navigate(`/novel/${item.item.id}`);
            }}
          >
            {item.item.name}
          </div>
          <div className="col-12 series-search-rating average-rating">
            {/* {console.log(averageRating)} */}

            <p>
              <ThumbUpIcon style={{ fontSize: "4rem", marginRight: "5px" }} />
              {(Math.round(avg[item.item.id]) / 5) * 100}%
              <br />
              <p>Average {Math.round(avg[item.item.id])} of 5</p>
            </p>
          </div>
          <div className="col-12 series-search-description">
            {/* {item.item.description} */}
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
            <p>Genre: {item.item.genre_name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container recommendations ">
      <div className="col-12 recommendations-wrapper d-flex flex-row flex-wrap">
        {/* {avg[45]} */}
        {recommend.map((x, idx) => {
          // console.log(x.id, ":", x.name);

          if (idx < 10) {
            return <ListAllNovels item={x} key={x.id} />;
          }
        })}
      </div>
    </div>
  );
}
