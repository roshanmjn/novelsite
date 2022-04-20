import "./userTable.css";
import { Edit, DeleteForever, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
const UserTable = ({ data, column }) => {
  return (
    <div className="userTables" style={{ marginTop: "30px" }}>
      <table className="table table-hover border shadow">
        <thead>
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
      </table>
    </div>
  );
};

const TableHeadItem = ({ item }) => (
  <th scope="col" className="table-dark">
    {item.heading}
  </th>
);

const TableRow = ({ item }) => {
  // const DeleteIcon = DeleteForever;
  return (
    <tr>
      <td scope="row">{item.id}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.name}</td>
      <td colSpan="2">
        <Link to={`/users/view/${item.id}`} className="userEditButton">
          <Visibility id={item.id} className="userEditButtonIcon" />
        </Link>
        <Link to={`/users/edit/${item.id}`} className="userEditButton">
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
