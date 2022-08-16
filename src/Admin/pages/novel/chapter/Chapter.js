import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Chapter() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [chapters, setChapters] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    async function getAllChapters() {
      try {
        const response = await axios.get(
          `http://localhost:5000/novels/${params.id}/chapter`
        );
        setChapters(response.data);
      } catch (err) {
        if (err.response.status == 404) {
          setError(err.response.data.message);
        }
      }
    }
    async function getTitle() {
      try {
        const response2 = await axios.get(
          `http://localhost:5000/novels/${params.id}`
        );
        setTitle(response2.data[0].name);
      } catch (err) {
        if (err.response2.status == 404) {
          console.log(err.response2.data);
        }
      }
    }
    getAllChapters();
    getTitle();
  }, []);
  return (
    <div className="container">
      <div className="wrapper col-8 mx-auto">
        <div className="d-flex justify-content-between">
          <h1 className="display-4">Chapters</h1>
          <button
            className="btn btn-primary"
            onClick={() => navigate("add", { state: { from: location } })}
          >
            Add
          </button>
        </div>
        <div className="col">
          <p style={{ fontSize: "21px", margin: "10px 0" }}>{title}</p>
        </div>
        <div className="row">
          {error
            ? error
            : chapters.map((x, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-12 col-md-5 "
                    style={{
                      border: "1px solid gray",
                      margin: "0 10px 10px 0 ",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      navigate(`edit_chapter=${x.chapter_id}`, {
                        state: { from: location },
                      })
                    }
                  >
                    {x.chapter_id}:{x.chapter_title}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Chapter;
