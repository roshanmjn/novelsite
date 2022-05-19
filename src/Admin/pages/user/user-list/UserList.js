import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import { ToastContainer, toast } from "react-toastify";
import { Edit, DeleteForever, Visibility } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import "./userList.css";

export default function UserList() {
  //  TO CHANGE TAB TITLE NAME
  TabTitle("Users");

  //TABLE HEADERS
  const column = [
    { heading: "ID" },
    { heading: "Full Name" },
    { heading: "Username" },
    { heading: "Email" },
    { heading: "Gender" },
    { heading: "Address" },
    { heading: "Novels Published" },
    { heading: "Novels Read" },
    { heading: "Created on" },
    { heading: "Action" },
  ];

  //DELETE FUNCTION
  const navigate = useNavigate();
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
  //CREATING STATE TO STORE DATA
  const [dataTable, setDataTable] = useState([]);
  //  LOAD USER TABLE
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/users", {
          withCredentials: true,
        });
        if (response.status === 200) {
          // console.log(response.data);

          setDataTable(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [deleteUser]);

  return (
    <div className="userList">
      <div className="userListHeader col-10">
        <h3 className="display-5">User List</h3>
        <Link to="/admin/users/create" className="btn btn-success">
          Create account
        </Link>
      </div>
      <div className="col-10">
        {/* <UserTable data={dataTable} column={column} />
         */}
        <div className="userTables" style={{ marginTop: "30px" }}>
          <table
            className="table table-hover border shadow col-12"
            style={{ whiteSpace: "nowrap" }}
          >
            <thead>
              <tr>
                {column.map((item, index) => {
                  //  FETCH EACH TABLE HEADINGS AND DISPALY AS COLUMN
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
              {dataTable.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.novel_works}</td>
                    <td>{item.novels_reading}</td>
                    <td>{item.created_on}</td>
                    <td colSpan="2">
                      <Link to={`/admin/users/edit/${item.id}`}>
                        <Edit className="userEditButtonIcon" />
                      </Link>
                      <DeleteForever
                        id={item.id}
                        type="button"
                        className="userDeleteButtonIcon"
                        onClick={() => deleteUser(item.id, item.full_name)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <ToastContainer position="top-center" autoClose={1000} />
        </div>
      </div>
    </div>
  );
}
