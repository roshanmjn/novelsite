import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./novel-item.css";

import { BookmarkAdd, BookmarkAdded, Star } from "@mui/icons-material";

const NovelItem = (props) => {
  const { id } = useParams();
  const backendRoute = "http://localhost:5000/uploads";
  const checkLogin = localStorage.getItem("login");
  const checkUserId = localStorage.getItem("uid");
  const navigate = useNavigate();
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);
  const [rating, setRating] = useState(false);
  const [ratingData, setRatingData] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  // prettier-ignore
  const [novel, setNovel] = useState([{author: "",chapters: "",description: "",genre: "",id: "",image: "",name: "",rating: "",status: "",},]);

  const text_overflow = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  //SET ON PAGE LOAD NOVEL WITH ID = id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/novels/${id}`)
      .then((res) => {
        setNovel(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //CHECK ON PAGE-LOAD IF USER HAS ALREADY "BOOKMARKED" CURRENT NOVEL
  useEffect(() => {
    if (checkLogin) {
      var bookmarks_get = [];
      axios
        .get(`http://localhost:5000/bookmarks/${checkUserId}`, {
          withCredentials: true,
        })
        .then((res) => {
          bookmarks_get = res.data[0].bookmarks.split(",");
          bookmarks_get.map((x) => {
            if (id == x) {
              setAlreadyBookmarked(true);
            }
          });
        });
    }
  }, [id]);

  //CHECK ON PAGE-LOAD IF USER HAS ALREADY "RATED" CURRENT NOVEL
  useEffect(() => {
    if (checkLogin) {
      axios
        .post(
          "http://localhost:5000/rating/check",
          { user_id: checkUserId, novel_id: id },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.rating_exist == true) {
            setRating(true);
            setRatingData(res.data.rating);
          }
        });
    }
  }, [id]);

  // FUNCTION ON-CLICK READ BUTTON
  const readButton = () => {
    if (checkLogin && checkUserId) {
      //IF LOGIN = TRUE THEN ADD NOVEL TO USER RECORD FOR READ HISTROY
      axios
        .post(
          "http://localhost:5000/bookmarks/currentnovel",
          { novel_id: id, user_id: checkUserId },
          { withCredentials: true }
        )
        .then((res) => {
          // console.log(res);
          navigate(`/novel/${novel.id}/1`);
        });
    } else {
      navigate(`/novel/${novel.id}/1`);
    }
  };
  const addBookmark = () => {
    if (checkLogin) {
      axios
        .post(
          "http://localhost:5000/bookmarks",
          { novel_id: id, user_id: checkUserId },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status == 200) {
            setAlreadyBookmarked(true);
          }
          // window.location.reload(false);
        });
    }
  };

  const addRating = (value) => {
    if (checkLogin) {
      axios
        .post(
          "http://localhost:5000/rating",
          { user_id: checkUserId, novel_id: id, rating: value },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status == 200) {
            setRating(true);
            setRatingData(value);
          }
          // window.location.reload(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

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
              // src="/img7.jpg"
              src={backendRoute + "/" + novel.image}
              // src={novel.image}
              alt="asd"
              width="295px"
              height="428px"
              style={{
                // border: "1px solid red",
                borderRadius: "10px",
                objectFit: "fill",
              }}
            />
          </div>
        </div>
        {/* -------------CHAPTER DIV START------------- */}
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
              {novel.status}
            </div>

            <div
              className="col-12 "
              style={{
                fontSize: "25px",
                fontWeight: "500",
                margin: "10px 0",
                lineHeight: "25px",
              }}
            >
              {novel.name}
            </div>
            <div className="col-12" style={{ fontSize: "18px", color: "gray" }}>
              Chapters: {novel.chapters}
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
                {novel.author}
              </p>
            </div>
            <div
              className="col-12"
              style={{ fontSize: "17px", marginBottom: "8px" }}
            >
              Rating: {novel.rating}%
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
              <p style={text_overflow}>{novel.description}</p>
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
                {novel.genre_name}
              </p>
            </div>
            {/*START RATING*/}
            {checkLogin ? (
              !rating ? (
                <div
                  className="d-flex item-rating-wrapper d-flex flex-column"
                  style={{ marginBottom: "12px" }}
                >
                  <div>
                    {[
                      [...Array(5)].map((star, idx) => {
                        const ratingValue = idx + 1;
                        return (
                          <label key={idx}>
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              style={{ display: "none" }}
                              onClick={() => {
                                // setRating(ratingValue);
                                addRating(ratingValue);
                              }}
                            />
                            <Star
                              color={
                                ratingValue <= (hoverRating || rating)
                                  ? "primary"
                                  : "action"
                              }
                              style={{
                                fontSize: "30px",
                                cursor: "pointer",
                              }}
                              onMouseEnter={() => {
                                setHoverRating(ratingValue);
                              }}
                              onMouseLeave={() => {
                                setHoverRating(null);
                              }}
                            />
                          </label>
                        );
                      }),
                    ]}
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      paddingLeft: "5px",
                    }}
                  >
                    Rate this novel.
                  </p>
                </div>
              ) : (
                <p
                  style={{
                    fontSize: "16px",
                    background: "gray",
                    display: "inline-block",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  Your rating: {ratingData}/5
                </p>
              )
            ) : (
              ""
            )}

            {/*END RATING*/}
            <div className="col-12">
              <button
                className="btn btn-primary"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  padding: "10px 50px",
                  borderRadius: "30px",
                  whiteSpace: "nowrap",
                }}
                onClick={readButton}
              >
                Start Reading
              </button>
              {checkLogin ? (
                !alreadyBookmarked ? (
                  <BookmarkAdd
                    style={{
                      fontSize: "60px",
                      color: "rgb(0 117 255)",
                      cursor: "pointer",
                    }}
                    onClick={addBookmark}
                  />
                ) : (
                  <BookmarkAdded
                    style={{
                      fontSize: "60px",
                      color: "rgb(0 117 255)",
                    }}
                  />
                )
              ) : (
                ""
              )}
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
        </div>
      </div>
    </div>
  );
};

export default NovelItem;
