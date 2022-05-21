import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { TabTitle } from "../utils/GeneralFunctions";
import { useCookies } from "react-cookie";
import { replace } from "formik";
import { UserContext } from "./UserContext";
import { Close } from "@mui/icons-material";

const Bookmarks = () => {
  TabTitle("Bookmarks");
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const checkLogin = localStorage.getItem("login");
  const checkUserId = localStorage.getItem("uid");
  const navigate = useNavigate();

  const [bookmarksArray, setBookmarksArray] = useState({ bookmarks: [] });

  useEffect(async () => {
    // console.log(cookies.jwt);
    if (!cookies.jwt || !checkLogin) {
      navigate("/login");
    } else {
      const response = await axios.get(
        `http://localhost:5000/bookmarks/${checkUserId}`,
        {
          withCredentials: true,
        }
      );
      if (response.status == 200) {
        // console.log(response.data[0].bookmarks.split(","));
        let bookmarked_novels_id = response.data[0].bookmarks.split(",");

        axios
          .post(
            `http://localhost:5000/bookmarks/user`,
            { bookmarked_novels_id },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log(res.data);
            setBookmarksArray({ bookmarks: res.data });
          });
      }
    }
  }, []);

  const removeBookmark = (id) => {
    // console.log("novel:", id, " user:", checkUserId);
    axios
      .post(
        "http://localhost:5000/bookmarks/remove",
        {
          id,
          checkUserId,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status == 200) {
          window.location.reload();
          console.log(res);
        }
      });
  };
  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <ToastContainer />
      <h3>Bookmarks</h3>
      <div className="col-12 d-flex flex-wrap">
        {/*ITEM START*/}
        {bookmarksArray?.bookmarks.map((e, idx) => {
          return (
            <div
              key={idx}
              className="bookmark-item d-flex flex-row justify-content-start"
              style={{
                padding: "5px",
                borderLeft: "green 3px solid",
                margin: "0 15px 30px 15px",
                boxShadow: "2px 1px 4px 1px gray",
                borderRadius: "4px",
                width: "45%",
                height: "130px",
              }}
            >
              <div className="column-image">
                <img
                  src={e.image}
                  alt=""
                  width="90px"
                  height="120px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/novel/${e.id}`);
                  }}
                />
              </div>
              <div
                className="column-right"
                style={{
                  marginLeft: "6px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <p
                  className="item-row-one d-flex justify-content-between align-items-start"
                  style={{
                    height: "40px",
                  }}
                >
                  <span
                    className="item-title"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      // overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: "18px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/novel/${e.id}`);
                    }}
                  >
                    {e.name}
                  </span>

                  <Close
                    style={{
                      color: "red",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => removeBookmark(e.id)}
                  />
                </p>
                <span
                  className="item-chapter-number"
                  style={{ fontSize: "18px" }}
                >
                  Chapters: {e.chapters}
                </span>
              </div>
            </div>
          );
        })}
        {/*ITEM END*/}
      </div>
    </div>
  );
};

export default Bookmarks;

// UPDATE tbl_user_log
// SET bookmarks = CASE WHEN bookmarks LIKE '%,41,%'
//                            THEN REPLACE(bookmarks, ',41,', ',')
//                       WHEN bookmarks LIKE '41,%'
//                            THEN REPLACE(bookmarks, '41,', '')
//                       WHEN bookmarks LIKE '%,41'
//                            THEN REPLACE(bookmarks, ',41', '')
//                       WHEN bookmarks = '41'
//                            THEN ''
//                  END
// WHERE FIND_IN_SET('41', tbl_user_log.bookmarks) and user_id =46
