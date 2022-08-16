import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./novel-item.css";
import { UserContext } from "../UserContext";

export const ReadNovel = () => {
  const { id, chapter_id } = useParams();
  const onlineOrOfflineText = chapter_id == "chapters" ? true : false;
  // const chapterId = !onlineOrOfflineText ? chapter_id.split("-")[1] : "";
  const navigate = useNavigate();

  const [title, setTitle] = useState([]);
  const [currentChapter, setCurrentChapter] = useState([]);

  //TO GET CHAPTER FROM A ONLINE API
  useEffect(() => {
    if (onlineOrOfflineText) {
      axios
        .get(`http://localhost:5000/novels/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res.data[0]);
          setTitle(res.data[0]);
        });
    }
  }, [onlineOrOfflineText]);

  //TO GET USER DEFINED CHAPTERS
  useEffect(() => {
    if (!onlineOrOfflineText) {
      axios
        .get(`http://localhost:5000/novels/${id}/${chapter_id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setCurrentChapter(res.data[0]);
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 404) {
            console.log(err.response.data.message);
          }
        });
    }
  }, [onlineOrOfflineText]);

  return (
    <div className="container">
      <div
        className="col-12"
        style={{
          height: "auto",
          background: "#e8e8e8",
        }}
      >
        <div className="col-12 d-flex flex-row">
          <button
            className="btn btn-secondary"
            style={{
              fontSize: "14px",
              padding: "0 5px",
              height: "25px",
              lineHeight: "20px",
            }}
            onClick={() => {
              navigate(`/novel/${id}`);
            }}
          >
            ← Go back
          </button>
          <h5 style={{ fontSize: "24px", paddingLeft: "40px" }}>
            {title ? title.name : ""}
          </h5>
        </div>
        {onlineOrOfflineText ? (
          <iframe
            src={title.description}
            style={{
              width: "100%",
              height: "90vh",
            }}
            className="iframe"
          ></iframe>
        ) : (
          <div className="col-10" style={{ margin: "0 auto" }}>
            <div className="col-12">
              <p className="text-center text-uppercase font-weight-bold">
                {currentChapter.chapter_id}. {currentChapter.chapter_title}
              </p>
            </div>
            <div className="col-12">{currentChapter.chapter_content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
