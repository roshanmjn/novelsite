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

const AdminLayout = () => {
  return (
    <>
      {/* {checkRoute(locate) && <Topbar />}
      {checkRoute(locate) && <Sidebar />} */}
      <Topbar />
      <div className="adminLayout">
        <Sidebar />
        <div className="outletLayout">
          <Routes>
            <Route path="/">
              <Route path="login" element={<AdminLogin />} />
              <Route index element={<AdminHome />} />
              <Route path="users">
                <Route index element={<UserList />} />
                <Route path="create" element={<CreateUser />} />
                <Route path="edit/:id" element={<EditUser />} />
              </Route>

              <Route path="novels">
                <Route index element={<Novel />} />
                <Route path="upload" element={<UploadNovel />} />
                <Route path="edit/:id" element={<EditNovel />} />
                <Route path="top" element={<TopNovel />} />
                <Route path="genre" element={<Novel />} />
              </Route>
              <Route path="*" element={<p style={{ flex: "5" }}>Oops!!</p>} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export { AdminLayout };
