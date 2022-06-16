import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const RecommendationSlider = () => {
  const backendRoute = "http://localhost:5000/uploads/";
  const navigate = useNavigate();
  const checkLogin = localStorage.getItem("login");
  const checkUserId = localStorage.getItem("uid");
  const checkUsername = localStorage.getItem("uname");
  const [recommend, setRecommend] = useState([]);

  const item_array = [];
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

      await Promise.all(
        response2.map(async (x) => {
          const request3 = await axios.get(
            `http://localhost:5000/novels/${x[0]}`,
            { params: { _limit: 3 }, withCredentials: true }
          );
          const response3 = request3.data[0];
          item_array.push(response3);
        })
      );
      setRecommend(item_array);
    }
  }, []);

  const ListAllNovels = (item, idx) => {
    console.log(item.item);

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
            <p>{item.item.genre_name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    //  <div className="container recommendations ">
    //    <div className="col-12 recommendations-wrapper d-flex flex-row flex-wrap">
    //      {recommend.map((x, idx) => {
    //        // console.log(x.id, ":", x.name);
    //        while (idx < 6) {
    //          return <ListAllNovels item={x} key={x.id} />;
    //        }
    //        // return <p key={x.id}>{x.id}</p>;
    //      })}
    //    </div>
    //  </div>
    <Swiper
      className="col-12 d-flex flex-row flex-grow-1"
      style={{
        // border: "2px solid teal",
        background: "gray",
        width: "100%",
        height: "100%",
        maxHeight: "260px",
        maxWidth: "900px",
        borderRadius: "20px",
        padding: "5px",
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      // autoplay={{ delay: 5000 }}
      loop={true}
    >
      <div
        className="swiper-pagination"
        style={{
          width: "100px",
          height: "20px",
          position: "absolute",
          bottom: "0px",
          left: "85%",
        }}
      ></div>
      {/* {editorsChoice.map((item, idx) => { */}
      {recommend.map((x, idx) => {
        while (idx < 6) {
          return (
            <SwiperSlide
              key={idx}
              className="d-flex flex-row"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={backendRoute + "/" + x.image}
                className="col-5"
                alt={x.image}
                style={{ objectFit: "contain", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/novel/${x.id}`);
                }}
              />
              <div
                className="col-6"
                style={{
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    cursor: "pointer",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  onClick={() => {
                    navigate(`/novel/${x.id}`);
                  }}
                >
                  {x.name}
                </p>
                <p style={{ fontSize: "17px", color: "black" }}>69%</p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "justify",
                    lineHeight: "18px",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "15px",
                  }}
                >
                  {x.description}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline",
                      padding: "4px 5px",
                      background: "black",
                      borderRadius: "5px",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {x.genre_name}
                  </span>
                </p>
              </div>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};

export { RecommendationSlider };
