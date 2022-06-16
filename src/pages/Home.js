import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { TabTitle } from "../utils/GeneralFunctions";

import { Link, useNavigate } from "react-router-dom";
import { RecommendationSlider } from "./RecommendationSlider";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { lineHeight } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
SwiperCore.use([Navigation, Pagination, Autoplay]);
// import { imagedata, PopularItem } from "./PopularItem";
// import { imageWeekData, PopularItemWeek } from "./PopularItemWeek";

const Home = () => {
  TabTitle("Home");
  const backendRoute = "http://localhost:5000/uploads";
  const [novel, setNovel] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [editorsChoice, setEditorsChoice] = useState([]);
  const checkLogin = localStorage.getItem("login");
  // const swiper = Swiper();

  useEffect(async () => {
    //FOR WEEKLY NOVEL  UPDATE
    const response = await axios.get(
      "http://localhost:5000/novels/popular/weekly"
    );
    if (response.status === 200) {
      // console.log(response.data);
      setNovel(response.data);
    } else {
      setNovel([]);
    }
    //FOR ONGOING NOVEL  UPDATE
    const response1 = await axios.get(
      "http://localhost:5000/novels/popular/ongoing"
    );
    if (response1.status === 200) {
      // console.log(response1.data);
      setOngoing(response1.data);
    } else {
      setOngoing([]);
    }
    //FOR ANNOUNCEMENTS
    const response2 = await axios.get(
      "http://localhost:5000/novels/announcements"
    );
    if (response2.status === 200) {
      // console.log(response2.data);
      setAnnouncements(response2.data);
    } else {
      setAnnouncements();
    }
    //EDITORS CHOICE
    const response3 = await axios.get(
      "http://localhost:5000/novels/popular/editors"
    );
    if (response3.status === 200) {
      // console.log(response3.data);
      setEditorsChoice(response3.data);
    } else {
      setEditorsChoice([]);
    }
  }, [checkLogin]);

  const navigate = useNavigate();
  //ANNOUNCEMENTS
  const Announcements = (item, idx) => {
    // console.log(item);
    return (
      <div
        key={idx}
        className="col-12 col-lg-12 announcement-item"
        style={{
          overflow: "hidden",
          padding: "20px",
          background: "black",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <div className="col-12">
          <p
            style={{
              fontWeight: "500",
              fontSize: "18px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              margin: "0",
              padding: "0",
            }}
          >
            {item.item.Title}
          </p>
        </div>
        <div className="col-12">
          <p
            style={{
              fontSize: "13px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "0",
            }}
          >
            {item.item.description}
          </p>
        </div>
      </div>
    );
  };

  //ONGOING RELEASES
  const PopularOngoingReleases = (item, idx) => {
    // console.log(item);
    return (
      <div
        key={idx}
        className="col-4 col-lg-3 releases-part-two d-flex flex-column"
      >
        <div
          className="col-12"
          style={{
            width: "130px",
            height: "200px",
            margin: "0 auto",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={backendRoute + "/" + item.item.image}
            alt={item.item.image}
            className="releases-image-small "
            onClick={() => {
              navigate(`/novel/${item.item.id}`);
            }}
            style={{
              cursor: "pointer",
            }}
          />
        </div>

        <h5
          style={{
            fontSize: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
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
        </h5>
      </div>
    );
  };

  //POPULAR THIS WEEK MODEL
  const PopularThisWeek = (item, idx) => {
    // console.log(item);
    return (
      <div
        key={idx}
        className="col-4 col-lg-2 d-flex flex-column justify-content-between align-items-center weekly-popular "
        style={{
          marginRight: "15px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/novel/${item.item.id}`);
        }}
      >
        <div className="col-12">
          <img
            src={backendRoute + "/" + item.item.image}
            alt={item.item.image}
            style={{ width: "80%", objectFit: "inherit", margin: "0 auto" }}
          />
        </div>

        <h5
          style={{
            fontSize: "18px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.item.name}
        </h5>
        <h5>{item.item.author}</h5>
      </div>
    );
  };
  return (
    <>
      <header className="m-5">
        <section className="container main-hero-container ">
          {/* First row start */}
          <div
            className="row home-first-row"
            style={{
              maxHeight: "400px",
            }}
          >
            <div className="col-12 col-lg-6 d-flex flex-column">
              <div className="col-12 ">
                <h6 style={{ fontSize: "30px", fontWeight: "350" }}>
                  Editor's Choice
                </h6>
              </div>

              {/* -----CAROUSEL START -----*/}
              <Swiper
                className="col-12 d-flex flex-row flex-grow-1"
                style={{
                  background: "gray",
                  width: "100%",
                  height: "100%",
                  maxHeight: "260px",
                  maxWidth: "900px",
                  borderRadius: "10px",
                }}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                // autoplay={{ delay: 4000 }}
                loop={true}
                effect="coverflow"
              >
                <div
                  className="swiper-pagination"
                  style={{
                    width: "100px",
                    height: "17px",
                    position: "absolute",
                    bottom: "-3px",
                    left: "270px",
                  }}
                ></div>
                {editorsChoice.map((item, idx) => {
                  return (
                    <SwiperSlide
                      key={idx}
                      className="d-flex flex-row"
                      style={{
                        padding: "15px 30px",
                        width: "700px",
                      }}
                    >
                      <div
                        className="col-5 d-flex justify-content-start"
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="col-12"
                          style={{
                            border: "2px solid white",
                            width: "150px",
                            height: "225px",
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={backendRoute + "/" + item.image}
                            alt={item.image}
                            style={{
                              objectFit: "cover",
                              width: "150px",
                              height: "inherit",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              navigate(`/novel/${item.id}`);
                            }}
                          />
                        </div>
                      </div>
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
                            navigate(`/novel/${item.id}`);
                          }}
                        >
                          {item.name}
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
                          {item.description}
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
                              borderRadius: "10px",
                              marginRight: "5px",
                              marginBottom: "5px",
                            }}
                          >
                            {item.genre_name}
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/*----- CAROUSEL END----- */}
            </div>
            {/*-----ANNOUNCEMENT DIV START-----*/}
            <div
              className="announcement col-12 col-lg-6 d-flex flex-column "
              style={{ maxHeight: "400px" }}
            >
              <div className="col-12">
                <h6 style={{ fontSize: "30px", fontWeight: "350" }}>
                  Announcements
                </h6>
              </div>
              <div className="col-12 d-flex flex-column flex-grow-1">
                <div className="col-12 d-flex flex-column justify-content-between flex-grow-1">
                  {announcements &&
                    announcements.map((item, index) => {
                      return <Announcements item={item} key={index} />;
                    })}
                </div>
              </div>
            </div>
            {/*-----ANNOUNCEMENT DIV END-----*/}
          </div>
          {/* -----SECOND ROW START -----*/}
          <div className="row home-second-row my-5">
            <div className="col-12 d-flex justift-content-between flex-column ">
              <h6 style={{ fontSize: "30px", fontWeight: "350" }}>
                New Ongoing Releases
              </h6>
              <div className="col-12 d-flex justify-content-between second-row-releases flex-wrap">
                {/* -----Second row first part start----- */}
                <div className="col-12 col-lg-4 second-row-releases-item d-flex justify-content-around align-items-stretch">
                  <div className="col-12 releases-part-one d-flex flex-column ">
                    <div className="col-12">
                      <div
                        className="col-12"
                        style={{
                          border: "2px solid white",
                          width: "180px",
                          height: "270px",
                          borderRadius: "10px",
                          margin: "0 auto",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={img2}
                          alt="amiya"
                          className="releases-image"
                        />
                      </div>
                    </div>
                    <div className="col-12 releases-description">
                      <h5>The Legend of Vice</h5>
                      <p
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: "4",
                          overflow: "hidden",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab ea soluta eaque dolores. Ad dolorum recusandae iste,
                        fugit expedita aliquid blanditiis quas esse explicabo
                        iusto tempora necessitatibus reiciendis ut! Laboriosam!
                      </p>
                    </div>
                  </div>
                </div>
                {/* -----Second row first part end----- */}

                {/* -----Second row second part START----- */}
                <div className="col-12 col-lg-8 second-row-releases-item d-flex flex-wrap justify-content-between">
                  {ongoing &&
                    ongoing.map((item, index) => {
                      return (
                        <PopularOngoingReleases
                          item={item}
                          image={img3}
                          key={index}
                        />
                      );
                    })}
                </div>
                {/* -----Second row second part END----- */}
              </div>
            </div>
          </div>
          {/* -----THIRD ROW START----- */}
          <div className="row home-third-row">
            <div className="col-12 d-flex flex-column">
              <div className="col-12 d-flex flex-row">
                <h6 style={{ fontSize: "30px", fontWeight: "350" }}>
                  Popular This Week
                </h6>
              </div>
              <div className="col-12 d-flex flex-row justify-content-between flex-wrap">
                {/* {novel &&
                  novel.map((item, idx) => {
                    console.log(item);
                    return (
                      <PopularThisWeek item={item} image={img1} key={idx} />
                    );
                  })} */}

                <Swiper
                  className="popular-weekly "
                  slidesPerView={6}
                  spaceBetween={0}
                  navigation={{
                    nextEl: ".swiper-button-next-weekly",
                    prevEl: ".swiper-button-prev-weekly",
                  }}
                  // loop={true}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  style={{
                    paddingBottom: "35px",
                  }}
                >
                  <div
                    className="d-flex flex-row justify-content-center"
                    style={{
                      width: "100%",

                      alignSelf: "center",
                    }}
                  >
                    <div className="swiper-button-prev-weekly border border-dark border-1 rounded-circle ">
                      <ArrowBackIosIcon
                        style={{ fontSize: "30px", cursor: "pointer" }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-around swiper-pagination swiper-pagination-popular px-5"
                      style={{
                        position: "unset",
                        width: "250px",
                        height: "auto",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    ></div>
                    <div className="swiper-button-next-weekly  border border-dark border-1 rounded-circle ">
                      <ArrowForwardIosIcon
                        style={{ fontSize: "30px", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  {novel.map((item, idx) => {
                    const count = 1 + idx;
                    return (
                      <SwiperSlide>
                        <div className="col d-flex flex-column justify-content-between align-items-center text-center">
                          <div className="col">
                            <div
                              className="col overflow-hidden"
                              style={{
                                height: "220px",
                                width: "150px",
                                background: "gray",
                                borderRadius: "10px",
                              }}
                              onClick={() => {
                                navigate(`/novel/${item.id}`);
                              }}
                            >
                              <img
                                src={backendRoute + "/" + item.image}
                                alt={item.image}
                                style={{
                                  position: "relative",
                                  height: "inherit",
                                  width: "inherit",
                                  objectFit: "fill",
                                }}
                              />
                              <p
                                style={{
                                  position: "absolute",
                                  bottom: "85px",
                                  left: "16px",
                                  zIndex: "999",
                                  transform: "rotate(2deg)",
                                  fontSize: "80px",
                                  fontWeight: "bold",
                                  color: "black",
                                  WebkitTextStroke: "1px white",
                                  letterSpacing: "-10px",
                                }}
                              >
                                {count}
                              </p>
                            </div>
                          </div>
                          <div
                            className="col d-flex flex-column "
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            <div className="col">
                              <Link
                                to="#"
                                className="text-decoration-none link-dark line-clamp-2"
                                style={{ width: "140px", lineHeight: "18px" }}
                              >
                                {item.name}
                              </Link>
                            </div>
                            <div className="col align-self-center">
                              {item.author}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          {/* -----THIRD ROW END----- */}
        </section>
      </header>
    </>
  );
};

export default Home;
