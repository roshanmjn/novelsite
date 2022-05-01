import "./upload-novel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UploadNovel() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState({});
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, author, genre, description, selectedFile);
  };

  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:5000/admin/novels/genre"
    );
    setGenre(response.data);
    // console.log(response.data);
    console.log(JSON.stringify(response.data));
  }, []);
  const Option = (item) => {
    return <option value="1">{item}</option>;
  };
  return (
    <div className="uploadNovel col-12">
      <div className="container">
        <div className="col-6">
          <form action="/admin/novels/upload" style={{ fontSize: "18px" }}>
            <h1 className="display-4">Upload a new novel</h1>
            <div className="form-group mt-5">
              <label htmlFor="novelName" className="sr-only">
                Novel Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name for novel"
                className="form-control"
                id="novelName"
                autoComplete="off"
                style={{ fontSize: "17px" }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="novelauthor">Authors Name</label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="form-control"
                id="novelauthor"
                style={{ fontSize: "17px" }}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Genre</label>
              <select className="form-select" style={{ fontSize: "17px" }}>
                <option value="0" selected>
                  Select Genre
                </option>
                <option value="action">Action</option>
                <option value="comedy">Action</option>
                <option value="fantasy">Action</option>
                <option value="mystery">Action</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="Wuxia">Wuxia</option>
                <option value="xianxia">Xianxia</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="novelimage">Title Image </label>
              <br />
              <input
                type="file"
                name="image_upload"
                className="form-control-file"
                id="novelimage"
                style={{ fontSize: "17px" }}
                onChange={(e) => setSelectedFile(e.target.files[0])}
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
