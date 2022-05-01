/*------------------ADMIN SIDE IMPORTS-------------*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/login/AdminLogin";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/home/Home";
// import "../app.css";
import "./pages/login/AdminLogin.css";
import UserList from "./pages/user/user-list/UserList";
import CreateUser from "./pages/user/create-user/create-user";
import Novel from "./pages/novel/Home";
import UploadNovel from "./pages/novel/upload/upload-novel";
import TopNovel from "./pages/novel/top-novel/top-novel";
import EditUser from "./pages/user/user-list/EditUser";
import { EditNovel } from "./pages/novel/edit/edit-novel";
import { WithNav } from "./withNav";

const AdminLayout = () => {
  return (
    <>
      {/* {checkRoute(locate) && <Topbar />}
      {checkRoute(locate) && <Sidebar />} */}
      {/* <Topbar /> */}

      {/* <Sidebar /> */}

      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/*" element={<WithNav />} />
      </Routes>
    </>
  );
};

export { AdminLayout };
