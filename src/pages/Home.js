import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { TabTitle } from "../utils/GeneralFunctions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import { imagedata, PopularItem } from "./PopularItem";
// import { imageWeekData, PopularItemWeek } from "./PopularItemWeek";

const Home = () => {
  TabTitle("Home");
  const [novel, setNovel] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
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
    //FOR WEEKLY NOVEL  UPDATE
    const response1 = await axios.get(
      "http://localhost:5000/novels/popular/ongoing"
    );
    if (response1.status === 200) {
      // console.log(response1.data);
      setOngoing(response1.data);
    } else {
      setOngoing([]);
    }
    //FOR Announcements
    const response2 = await axios.get(
      "http://localhost:5000/novels/announcements"
    );
    if (response2.status === 200) {
      // console.log(response2.data);
      setAnnouncements(response2.data);
    } else {
      setAnnouncements();
    }
  }, []);

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

  //POPULAR THIS WEEK MODEL
  const PopluarThisWeek = (item, idx) => {
    console.log(item);
    return (
      <div
        key={idx}
        className="col-4 col-lg-2 d-flex flex-column justify-content-between align-items-center weekly-popular "
        style={{ marginRight: "15px", border: "0px solid red" }}
      >
        <div className="col-12">
          <img
            src={item.item.image}
            alt={item.item.image}
            style={{ width: "100%", objectFit: "inherit" }}
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
  const PopularOngoingReleases = (item, idx) => {
    // console.log(item);
    return (
      <div
        key={idx}
        className="col-4 col-lg-3 releases-part-two d-flex flex-column justify-content-center align-items-center"
      >
        <img
          src={item.item.image}
          alt={item.item.image}
          className="releases-image-small "
        />
        <h5
          style={{
            fontSize: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.item.name}
        </h5>
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
              overflow: "",
              border: "1px solid green",
            }}
          >
            <div
              className="col-12 col-lg-6 d-flex flex-column"
              style={{ padding: "" }}
            >
              <div className="col-12 ">
                <h6 className="display-2">Editor's Choice</h6>
              </div>
              {/* carousel start */}

              <Swiper
                className="col-12 flex-grow-1"
                style={{ border: "1px solid red" }}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>

              {/* carousel end */}
            </div>
            <div
              className="announcement col-12 col-lg-6 d-flex flex-column justify-content-between "
              // style={{ background: "red !important", border: "1px solid red" }}
            >
              <h6 className="display-2">Announcements</h6>
              <div className="col-12 d-flex flex-column justify-content-between flex-grow-1">
                {announcements &&
                  announcements.map((item, index) => {
                    return <Announcements item={item} />;
                  })}
              </div>
            </div>
          </div>
          {/* First row end */}
          {/* Second row start */}
          <div className="row home-second-row">
            <div className="col-12 d-flex justift-content-between flex-column ">
              <h6 className="display-2">New Ongoing Releases</h6>
              <div className="col-12 d-flex justify-content-between second-row-releases flex-wrap">
                {/* -------------------Second row first part start-------------- */}
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
                {/* -------------------Second row first part end-------------- */}

                {/* -------------------Second row second part START-------------- */}
                <div className="col-12 col-lg-8 second-row-releases-item d-flex flex-wrap justify-content-between">
                  {ongoing &&
                    ongoing.map((item, index) => {
                      return (
                        <PopularOngoingReleases item={item} image={img3} />
                      );
                    })}
                </div>
                {/* -------------------Second row second part END-------------- */}
              </div>
            </div>
          </div>
          {/* -------------------Third row START-------------- */}
          <div className="row home-third-row">
            <div className="col-12 d-flex flex-column">
              <h6 className="display-2 mt-5">Popular This Week</h6>
              <div className="col-12 d-flex flex-row justify-content-between flex-wrap">
                {novel &&
                  novel.map((item) => {
                    return <PopluarThisWeek item={item} image={img1} />;
                  })}
              </div>
            </div>
          </div>
          {/* -------------------Third row END-------------- */}
        </section>
      </header>
    </>
  );
};

export default Home;
