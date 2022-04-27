import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../../../../utils/GeneralFunctions";
import "./userList.css";
import UserTable from "./UserTable";

export const deleteUser = async ({ id }) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/admin/users/${id}`
    );
  } catch (err) {
    console.log(err);
  }
};

//MAIN FUNCTION USERLIST
export default function UserList() {
  //  TO CHANGE TAB TITLE NAME
  TabTitle("Users");

  //  LOAD USER TABLE
  useEffect(() => {
    getUsers();
  }, []);

  //  GET USER LIST
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/users");
      if (response.status === 200) {
        setDataTable(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [editUserData, setEditUserData] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const column = [
    { heading: "ID" },
    { heading: "Full Name" },
    { heading: "Username" },
    { heading: "Password" },
    { heading: "Email" },
    { heading: "Gender" },
    { heading: "Address" },
    { heading: "Novels Published" },
    { heading: "Novels Read" },
    { heading: "Created on" },
    { heading: "Action" },
  ];
  return (
    <div className="userList">
      <div className="userListHeader col-10">
        <h3 className="display-5">User List</h3>
        <Link to="/admin/users/create" className="btn btn-success">
          Create account
        </Link>
      </div>
      <div className="col-10">
        <UserTable data={dataTable} column={column} />
      </div>
    </div>
  );
}
