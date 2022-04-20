import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userList.css";
import UserTable from "./UserTable";

export default function UserList() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log("error:" + err));
  }, []);
  const column = [
    { heading: "ID" },
    { heading: "Username" },
    { heading: "Email" },
    { heading: "Full Name" },
    { heading: "Action" },
  ];
  return (
    <div className="userList ">
      <div className="userListHeader col-8">
        <h3 className="display-5">User List</h3>
        <Link to="/users/create" className="btn btn-success">
          Create account
        </Link>
      </div>
      <div className="col-8">
        <UserTable data={dataTable} column={column} />
      </div>
    </div>
  );
}
