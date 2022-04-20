import "./home.css";
import { Visibility, Edit, DeleteForever } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
export default function Novel() {
  var today = new Date();
  const navigate = useNavigate();
  return (
    <div className="novelList mt-2">
      <div className="col-12 d-flex flex-column px-5">
        <div className="col-10 d-flex justify-content-between align-center">
          <h5 className="display-5">Novel List</h5>
          <button
            className="btn btn-success"
            onClick={() => navigate("/novels/upload")}
          >
            Upload
          </button>
        </div>
        <div className="col-10 mt-5">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Novel Name</th>
                <th>Status</th>
                <th>Current Chapter</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Author</th>
                <th>Published Date</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fields of Gold</td>
                <td>Ongoing</td>
                <td>666</td>
                <td>Fantasy, Cooking</td>
                <td>66%</td>
                <td>Elaine</td>
                <td>{`${today.getFullYear()}/${today.getMonth()}/${today.getMonth()}`}</td>
                <td>
                  <Visibility
                    style={{ marginRight: "20px", fontSize: "35px" }}
                  />
                  <Edit style={{ marginRight: "20px", fontSize: "35px" }} />
                  <DeleteForever
                    style={{ marginRight: "20px", fontSize: "35px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
