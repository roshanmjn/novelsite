import React from "react";
import { Visibility, Edit, DeleteForever } from "@material-ui/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./novel.css";
import { TabTitle } from "../../../utils/GeneralFunctions";

export default function Novel() {
  TabTitle("All Novels");
  var today = new Date();
  const navigate = useNavigate();
  const [novelsList, setNovelsList] = useState([]);
  //DISPLAY NOVEL LIST
  useEffect(() => {
    getNovel();
  }, []);

  const getNovel = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/novels", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setNovelsList(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNovel = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete novel: ${name} ?`)) {
      const response = await axios.delete(
        `http://localhost:5000/admin/novels/${id}`
      );
      if (response.status === 200) {
        window.alert(`${name} has been deleted !!`);
        getNovel();
      } else {
        window.alert(`Delete failed !!`);
      }
    }
  };

  return (
    <div className="novelList d-flex justify-content-around col-12 ">
      <div className="col-10 d-flex justify-content-around flex-column shadow rounded px-5">
        <div className="col-12 d-flex justify-content-between align-center">
          <h5 className="display-6">Novel List</h5>
          <button
            className="btn btn-success"
            style={{ fontSize: "17px" }}
            onClick={() => navigate("/admin/novels/upload")}
          >
            Upload
          </button>
        </div>
        <div className="col-12 mt-5 list-novel">
          <table className="table table-hover list-novel-table">
            <thead className="table-dark">
              <tr
                style={{
                  fontSize: "17px",
                  whiteSpace: "nowrap",
                }}
                className="list-novel-heading"
              >
                <th>ID</th>
                <th>Novel Name</th>
                <th>Status</th>
                <th>Current Chapter</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Author</th>
                <th>Published Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {novelsList.map((item, idx) => {
                const count = 1 + idx;
                return (
                  <tr
                    className="list-novel-item"
                    key={idx}
                    style={{
                      // lineHeight: "18px",
                      padding: "0",
                      margin: "0",
                    }}
                    onClick={(e) => {
                      navigate(`${item.id}`);
                    }}
                  >
                    <td>{count}</td>
                    <td className="list-novel-item-title">{item.name}</td>
                    <td>{item.status}</td>
                    <td>{item.chapters}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>{item.author}</td>
                    {/* <td>{`${today.getFullYear()}/${today.getMonth()}/${today.getMonth()}`}</td> */}
                    <td>{item.publish_date}</td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <Visibility
                        className="list-novel-icon"
                        style={{
                          marginRight: "10px",
                          fontSize: "35px",
                        }}
                      />

                      <Edit
                        className="list-novel-icon"
                        style={{
                          marginRight: "5px",
                          fontSize: "35px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/admin/novels/edit/${item.id}`);
                        }}
                      />

                      <DeleteForever
                        className="list-novel-icon"
                        style={{ fontSize: "35px", cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNovel(item.id, item.name);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
