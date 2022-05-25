import "./upload-novel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import  "../../../../../../ExpressTuts/public/uploads/" ;

export default function UploadNovel() {
  const admin_id = "5";
  const [getGenre, setGetGenre] = useState({ genres: [] });
  const navigate = useNavigate();
  // prettier-ignore
  const [data, setData] = useState({ name: "",author:'',genre:'',image_upload:'',description:''});

  const login = true;
  //ON FORM INPUT CHANGE
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onChangeFile = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
    // console.log(e.target.files[0]);
  };
  //ON FORM SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("front:", data);
    // console.log(img.files[0]);

    // prettiers-ignore
    if (
      // data.name === "" ||
      // data.author === "" ||
      // data.genre === "" ||
      // data.image_upload === "" ||
      // data.description === ""
      !login
    ) {
      toast.error("Empty Fields");
    } else {
      const formData = new FormData();
      formData.append("image_upload", data.image_upload);
      formData.append("name", data.name);
      formData.append("genre_id", data.genre);
      formData.append("author", data.author);
      formData.append("description", data.description);

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      axios
        .post("http://localhost:5000/admin/novels/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data; boundary=MyBoundary",
          },
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            toast.success(res.data);
            setTimeout(() => {
              navigate("/admin/novels");
            }, 1300);
          } else {
            toast.error("Failed to insert.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //TO GET AVAILABLE GENRE ON FOR <SELECT>GENRE</SELECT> LIST
  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:5000/admin/novels/genre"
    );
    setGetGenre({ genres: response.data });
    // console.log({ genres: response.data });
  }, [admin_id]);

  return (
    <div className="uploadNovel col-12">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        style={{ fontSize: "18px" }}
      />
      {/* {console.log(data)} */}
      <div className="container">
        <div className="col-6">
          <form onSubmit={onSubmit} style={{ fontSize: "18px" }}>
            <h1> UPLOAD NOVEL</h1>
            <div className="form-group mt-5">
              <label htmlFor="novelName" className="sr-only">
                Novel Title:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name for novel"
                className="form-control"
                id="novelName"
                autoComplete="off"
                style={{ fontSize: "17px" }}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="novelauthor">Authors Name:</label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="form-control"
                id="novelauthor"
                style={{ fontSize: "17px" }}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre:</label>
              <select
                id="genre"
                name="genre"
                className="form-select"
                style={{ fontSize: "17px" }}
                onChange={onChange}
              >
                <option value="">Select Genre:</option>
                {getGenre.genres.map((e, idx) => {
                  // console.log(e);
                  return (
                    <option value={e.id} key={idx}>
                      {e.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="novelimage">Image: </label>
              <br />
              <input
                type="file"
                name="image_upload"
                className="form-control-file"
                id="novelimage"
                style={{ fontSize: "17px" }}
                onChange={onChangeFile}
              />
            </div>
            <div className="form-group">
              <label htmlFor="noveldescription">Description</label>
              <textarea
                cols="20"
                rows="5"
                name="description"
                placeholder="Description"
                className="form-control"
                id="noveldescription"
                wrap="hard"
                style={{ fontSize: "17px" }}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" style={{ fontSize: "18px" }}>
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
