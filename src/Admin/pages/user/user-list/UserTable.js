import "./userTable.css";
import React, { useEffect } from "react";
import { Edit, DeleteForever, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

//---MAIN USER TABLE FUNCTION
const UserTable = ({ data, column }) => {
  const deleteUser = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete user: ${name} ?`)) {
      const response = await axios.delete(
        `http://localhost:5000/admin/users/${id}`
      );
      if (response.status === 200) {
        toast.success(`${name} has been deleted !!`);
      } else {
        toast.alert(`Delete failed !!`);
      }
    }
  };
  //fetch data from api and display in single row
  const TableRow = ({ item }) => {
    return (
      <tr>
        <td scope="row">{item.id}</td>
        <td>{item.full_name}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.address}</td>
        <td>{item.novel_works}</td>
        <td>{item.novels_reading}</td>
        <td>{item.created_on}</td>

        <td colSpan="2">
          <Link to={`/admin/users/view/${item.id}`} className="userEditButton">
            <Visibility id={item.id} className="userEditButtonIcon" />
          </Link>
          <Link to={`/admin/users/edit/${item.id}`}>
            <Edit className="userEditButtonIcon" />
          </Link>
          <Link to={`/admin/users/${item.id}`}>
            <DeleteForever
              id={item.id}
              type="button"
              className="userDeleteButtonIcon"
              onClick={() => deleteUser(item.id, item.full_name)}
            />
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="userTables" style={{ marginTop: "30px" }}>
      <table
        className="table table-hover border shadow col-12"
        style={{ whiteSpace: "nowrap" }}
      >
        <thead>
          <tr>
            {column.map((item, index) => {
              //  FETCH EACH TABLE HEADINGS AND DISPALY AS COLUM
              return (
                <th
                  scope="col"
                  className="table-dark"
                  style={{
                    verticalAlign: "baseline",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                  key={index}
                >
                  {item.heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody style={{ whiteSpace: "nowrap" }}>
          {data.map((item, index) => {
            return <TableRow item={item} key={index} />;
          })}
        </tbody>
      </table>
      <ToastContainer position="top-center" autoClose={4000} pauseOnHover />
    </div>
  );
};

export default UserTable;
