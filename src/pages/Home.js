import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { TabTitle } from "../utils/GeneralFunctions";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link, useNavigate } from "react-router-dom";

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
  }, []);

  const navigate = useNavigate();
  //ANNOUNCEMENTS
  const Announcements = (item, idx) => {
    // console.log(item);
    return (
      <div key={idx} className="row announcement-row">
        <div
          className="col-12 col-lg-12 announcement-item p-"
          style={{ overflow: "hidden" }}
        >
          <p
            className=" font-weight-bold"
            style={{
              lineHeight: "40px",
              fontWeight: "500",
              fontSize: "20px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              height: "40px",
            }}
          >
            {item.item.Title}
          </p>
          <p
            className=" font-weight-bold"
            style={{
              lineHeight: "50px",
              fontSize: "17px",
              fontWeight: "500",
              color: "white",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
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
            borderRadius: "5px",
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
          border: "0px solid red",
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
            <div
              className="col-12 col-lg-6 d-flex flex-column"
              style={{ padding: "" }}
            >
              <div className="col-12 ">
                <h6 className="display-2">Editor's Choice</h6>
              </div>
              {/* -----CAROUSEL START -----*/}
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
                {editorsChoice.map((item, idx) => {
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
                        src={backendRoute + "/" + item.image}
                        className="col-5"
                        alt={item.image}
                        style={{ objectFit: "contain", cursor: "pointer" }}
                        onClick={() => {
                          navigate(`/novel/${item.id}`);
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
                              borderRadius: "5px",
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
              className="announcement col-12 col-lg-6 d-flex flex-column justify-content-between "
              // style={{ background: "red !important", border: "1px solid red" }}
            >
              <h6 className="display-2">Announcements</h6>
              <div className="col-12 d-flex flex-column justify-content-between flex-grow-1">
                {announcements &&
                  announcements.map((item, index) => {
                    return <Announcements item={item} key={index} />;
                  })}
              </div>
            </div>
            {/*-----ANNOUNCEMENT DIV END-----*/}
          </div>
          {/* -----SECOND ROW START -----*/}
          <div className="row home-second-row">
            <div className="col-12 d-flex justift-content-between flex-column ">
              <h6 className="display-2">New Ongoing Releases</h6>
              <div className="col-12 d-flex justify-content-between second-row-releases flex-wrap">
                {/* -----Second row first part start----- */}
                <div className="col-12 col-lg-4 second-row-releases-item d-flex justify-content-around align-items-stretch">
                  <div className="col-12 releases-part-one d-flex flex-column ">
                    <img src={img2} alt="amiya" className="releases-image" />
                    <div className="col-12 releases-description">
                      <h5>The Legend of Vice</h5>
                      <p>
                        Description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ab ea soluta eaque dolores. Ad dolorum
                        recusandae iste, fugit expedita aliquid blanditiis quas
                        esse explicabo iusto tempora necessitatibus reiciendis
                        ut! Laboriosam!
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
              <h6 className="display-2 mt-5">Popular This Week</h6>
              <div className="col-12 d-flex flex-row justify-content-between flex-wrap">
                {novel &&
                  novel.map((item, idx) => {
                    return (
                      <PopularThisWeek item={item} image={img1} key={idx} />
                    );
                  })}
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
