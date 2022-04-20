import "./userTable.css";
import { Edit, DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";
const UserTable = ({ data, column }) => {
  return (
    <div className="userTables">
      {/* <table class="table">
        <thead className="thead-dark">
          <tr>
            {column.map((item, index) => {
              return <TableHeadItem item={item} />;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <TableRow item={item} />;
          })}
        </tbody>
      </table> */}
      <form onSubmit={onSubmit} className="userForm">
        <label className="userFormLabel" htmlFor="fullname">
          Full Name
        </label>
        <input
          className="userFormInput"
          type="text"
          placeholder="Full name"
          name="fullname"
          id="fullname"
        />
        <label className="userFormLabel" htmlFor="email">
          Email
        </label>
        <input
          className="userFormInput"
          type="text"
          placeholder="Email"
          name="email"
          id="email"
        />
        <label className="userFormLabel" htmlFor="username">
          Username
        </label>
        <input
          className="userFormInput"
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />
        <button type="submit" className="userFormButton">
          Create
        </button>
      </form>
    </div>
  );
};

const TableHeadItem = ({ item }) => <th scope="col">{item.heading}</th>;

const TableRow = ({ item }) => {
  // const DeleteIcon = DeleteForever;
  return (
    <tr>
      <td scope="row">{item.id}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.name}</td>
      <td colspan="2">
        <Link to={`/user/edit/${item.id}`} className="userEditButton">
          <Edit id={item.id} className="userEditButtonIcon" />
        </Link>

        <Link to={`/user/delete/${item.id}`} className="userDeleteButton">
          <DeleteForever id={item.id} className="userDeleteButtonIcon" />
        </Link>
      </td>
    </tr>
  );
};

export default UserTable;
/*import "./userTable.css";
import { Edit, DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";
const UserTable = ({ data, column }) => {
  return (
    <div className="userTable">
      <div className="userTableWrapper">
        <table className="userTableTable">
          <thead>
            <tr className="userTableRow">
              {column.map((item, index) => {
                return <TableHeadItem item={item} />;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return <TableRow item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableHeadItem = ({ item }) => (
  <th className="userTableHead">{item.heading}</th>
);

const TableRow = ({ item }) => {
  // const DeleteIcon = DeleteForever;
  return (
    <tr className="userTableRow">
      <td className="userTableData">{item.id}</td>
      <td className="userTableData">{item.username}</td>
      <td className="userTableData">{item.email}</td>
      <td className="userTableData">{item.name}</td>
      <td className="userTableData">
        <Link to={`/user/edit/${item.id}`} className="userEditButton">
          <Edit id={item.id} className="userEditButtonIcon" />
        </Link>

        <Link to={`/user/delete/${item.id}`} className="userDeleteButton">
          <DeleteForever id={item.id} className="userDeleteButtonIcon" />
        </Link>
      </td>
    </tr>
  );
};

export default UserTable;
*/
