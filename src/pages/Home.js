import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { TabTitle } from "../utils/GeneralFunctions";
import { imagedata, PopularItem } from "./PopularItem";
import { imageWeekData, PopularItemWeek } from "./PopularItemWeek";

const Home = () => {
  TabTitle("Home");
  return (
    <>
      <header className="m-5">
        <section className="container main-hero-container ">
          {/* First row start */}
          <div className="row home-first-row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h6 className="display-2">Editor's Choice</h6>
              {/* Carousel Start */}
              <div
                id="carouselNovel"
                className="carousel slide carousel-text-color"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselNovel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselNovel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselNovel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselNovel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="image 1" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>1. Amiya and Doktah</h5>
                      <p>Doktah Chillin with Amiya.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>2. Amiya Serious Mode</h5>
                      <p>Runnnnnnn</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>3. Date with the Bunny.</h5>
                      <p>Doktah and Amiya on a date.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>4. Oh no Amiya</h5>
                      <p>She's hurt and real bad.</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselNovel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselNovel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Carousel End */}
            </div>
            <div
              className="announcement col-12 col-lg-6 d-flex flex-column justify-content-between "
              // style={{ background: "red !important", border: "1px solid red" }}
            >
              <h6 className="display-2">Announcements</h6>
              <div className="col-12 d-flex flex-column justify-content-between flex-grow-1">
                <div className="row announcement-row">
                  <div className="col-12 col-lg-12 announcement-item">
                    upper level
                  </div>
                </div>
                <div className="row announcement-row">
                  <div className="col-12 col-lg-12 announcement-item">
                    lower level
                  </div>
                </div>
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
                      <h5>Title</h5>
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
                  {/*item 1-8*/}
                  {imagedata.map((value, index) => {
                    return (
                      <PopularItem
                        key={index}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        alt={value.title}
                      />
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
                {imageWeekData.map((value, index) => {
                  return (
                    <PopularItemWeek
                      key={index}
                      imgsrc={value.imgsrc}
                      title={value.title}
                      rating={value.rating}
                    />
                  );
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
