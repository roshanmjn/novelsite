import "./upload-novel.css";
export default function UploadNovel() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="uploadNovel col-12">
      <div className="container">
        <div className="col-6">
          <form action="form-novel" onSubmit={onSubmit}>
            <h1>Upload a new novel</h1>
            <div className="form-group">
              <label htmlFor="novelName" className="sr-only">
                Novel Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name for novel"
                className="form-control"
                id="novelName"
                autocomplete="off"
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Enter genre"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="novelimage">Title Image </label>
              <br />
              <input
                type="file"
                name="image"
                className="form-control-file"
                id="novelimage"
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
