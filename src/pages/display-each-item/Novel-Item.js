import React from "react";
import "./novel-item.css";
const NovelItem = () => {
  return (
    <div
      className="novelItem container "
      style={{ border: "0px solid red", padding: "30px 0" }}
    >
      <div
        className="col-12 col-lg-8 mx-auto d-flex flex-row flex-wrap justify-content-between item-details"
        // style={{ border: "1px solid blue" }}
      >
        <div
          className="col-12 col-lg-4"
          style={{ border: "0px solid green", marginBottom: "20px" }}
        >
          <div
            className="col-12 "
            style={{
              width: "295px",
              height: "428px",
              margin: "0 auto",
            }}
          >
            <img
              src="/img7.jpg"
              alt="asd"
              width="295px"
              height="428px"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        {/* -------------chapters------------- */}
        <div
          className="col-12 col-lg-8 item-chapters"
          style={{ border: "0px solid red", padding: "0 10px" }}
        >
          <div className="col-8 col-lg-8" style={{ margin: "0 auto" }}>
            <div
              className="col-4 col-lg-12"
              style={{
                display: "inline",
                fontSize: "12px",
                fontWeight: "bold",
                border: "1px solid gray",
                background: "black",
                color: "white",
                padding: "2px 8px",
                borderRadius: "7px",
              }}
            >
              Ongoing
            </div>
            <div
              className="col-12 "
              style={{ fontSize: "30px", fontWeight: "500" }}
            >
              Title Title Title
            </div>
            <div className="col-12" style={{ fontSize: "18px", color: "gray" }}>
              69 Chapters
            </div>
            <div
              className="col-12 d-flex flex-row"
              style={{ lineHeight: "20px" }}
            >
              <p style={{ fontSize: "15px", color: "gray " }}>Author: </p>
              <p
                style={{
                  fontSize: "16px",
                  marginLeft: "5px",
                }}
              >
                Name
              </p>
            </div>
            <div
              className="col-12"
              style={{ fontSize: "17px", marginBottom: "8px" }}
            >
              Rating
            </div>
            <div
              className="col-12"
              style={{
                fontSize: "15px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                marginBottom: "8px",
              }}
            >
              <p style={{ textAlign: "justify", lineHeight: "20px" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                voluptatem esse praesentium nulla! Similique, fuga veniam
                praesentium tempora blanditiis rerum exercitationem magnam quasi
                repellat vitae eos sequi necessitatibus aut distinctio.
              </p>
            </div>
            <div
              className="col-12 d-flex flex-start "
              style={{ marginBottom: "8px" }}
            >
              <p
                style={{
                  display: "inline",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                  background: "#363634",
                  padding: "2px 5px",
                  borderRadius: "5px",
                  marginRight: "5px",
                }}
              >
                Chinese
              </p>
              <p
                style={{
                  display: "inline",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                  background: "#363634",
                  padding: "2px 5px",
                  borderRadius: "5px",
                }}
              >
                Action
              </p>
            </div>
            <div className="col-12">
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  padding: "10px 50px",
                  borderRadius: "30px",
                  whiteSpace: "nowrap",
                }}
              >
                Start Reading
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12"
        style={{ height: "30px", border: "0px solid red" }}
      ></div>
      {/* {bottom start} */}
      <div
        className="col-8"
        style={{ border: "0px solid green", margin: "0 auto" }}
      >
        <div
          className="col-12 "
          style={{
            fontSize: "25px",
            padding: "0px",
            marginBottom: "10px",
            borderBottom: "3px solid #0b5ed7",
          }}
        >
          Chapters
        </div>
        <div
          className="col-12 d-flex flex-wrap novelChapters"
          style={{
            fontSize: "20px",
            padding: "0px",
            background: "#e6e6e6",
            borderRadius: "10px",
          }}
        >
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>{" "}
          <a href="#" className="col-6">
            <div className="col-6">Chapter 1</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NovelItem;
