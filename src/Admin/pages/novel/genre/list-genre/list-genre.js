import React from "react";

export default function listGenre() {
  return (
    <div className="genreList ">
      <div className="genreListHeader col-8">
        <h3 className="display-5">genre List</h3>
        <Link to="/genres/create" className="btn btn-success">
          Create account
        </Link>
      </div>
      <div className="col-8">
        <genreTable data={dataTable} column={column} />
      </div>
    </div>
  );
}
