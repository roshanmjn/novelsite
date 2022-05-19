import axios from "axios";
import React, { useEffect, useState } from "react";
import { Visibility, Edit, DeleteForever } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { TabTitle } from "../../../../utils/GeneralFunctions";

export default function ListGenre() {
  TabTitle("Novel Genre");
  const navigate = useNavigate();
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getGenre();
  }, []);

  const getGenre = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/novels/genre",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setGenreList(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteGenre = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete genre: ${name} ?`)) {
      const response = await axios.delete(
        `http://localhost:5000/admin/novels/genre/${id}`
      );
      if (response.status === 200) {
        window.alert(`ID:${id}, Genre:${name} has been deleted !!`);
        getGenre();
      } else {
        window.alert(`Delete failed !!`);
      }
    }
  };

  return (
    <div className="novelList d-flex justify-content-around col-12 ">
      <div className="col-10 d-flex justify-content-around flex-column shadow rounded px-5">
        <div className="col-12 d-flex justify-content-between align-center">
          <h5 className="display-5">Novel List</h5>
          <button
            className="btn btn-success"
            style={{ fontSize: "17px" }}
            onClick={() => {
              navigate("/admin/novels/genre/create");
            }}
          >
            Create New
          </button>
        </div>
        <div className="col-12 mt-5">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr
                style={{
                  fontSize: "17px",
                  whiteSpace: "nowrap",
                }}
              >
                <th>ID</th>
                <th>Genre Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {genreList.map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    style={{
                      lineHeight: "18px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>

                    <td style={{ whiteSpace: "nowrap" }}>
                      <Visibility
                        style={{
                          marginRight: "10px",
                          fontSize: "35px",
                        }}
                      />
                      <Link to={`/admin/novels/genre/edit/${item.id}`}>
                        <Edit
                          style={{ marginRight: "5px", fontSize: "35px" }}
                        />
                      </Link>

                      <DeleteForever
                        style={{ fontSize: "35px", color: "red" }}
                        onClick={() => deleteGenre(item.id, item.title)}
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
