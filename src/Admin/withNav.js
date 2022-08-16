/*------------------ADMIN SIDE IMPORTS-------------*/
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./withnav.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/home/Home";
import UserList from "./pages/user/user-list/UserList";
import CreateUser from "./pages/user/create-user/create-user";
import Novel from "./pages/novel/Home";
import UploadNovel from "./pages/novel/upload/upload-novel";
import TopNovel from "./pages/novel/top-novel/top-novel";
import EditUser from "./pages/user/user-list/EditUser";
import { EditNovel } from "./pages/novel/edit/edit-novel";
import { useCookies } from "react-cookie";
import ListGenre from "./pages/novel/genre/list-genre";
import CreateGenre from "./pages/novel/genre/create-genre";
import EditGenre from "./pages/novel/genre/edit-genre";
import Chapter from "./pages/novel/chapter/Chapter";
import Add from "./pages/novel/chapter/Add";
import Edit from "./pages/novel/chapter/Edit";

const WithNav = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  // console.log(cookies);
  useEffect(() => {
    if (!cookies.jwtadmin) {
      navigate("/admin/login");
    }
  }, [cookies, navigate, removeCookie]);

  return (
    <div className="col-12" style={{ border: "0px solid red", height: "100%" }}>
      <Topbar />

      <div className="adminLayout d-flex flex-row justify-content-start">
        <Sidebar />

        <div className="outlet-layout">
          <Routes>
            <Route path="/">
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
                <Route path=":id">
                  <Route index element={<Chapter />} />
                  <Route path="add" element={<Add />} />
                  <Route path="edit_chapter=:chapter_id" element={<Edit />} />
                </Route>
                <Route path="top" element={<TopNovel />} />
                <Route path="genre">
                  <Route index element={<ListGenre />} />
                  <Route path="create" element={<CreateGenre />} />
                  <Route path="edit/:id" element={<EditGenre />} />
                </Route>
              </Route>
              <Route path="*" element={<p style={{ flex: "5" }}>Oops!!</p>} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export { WithNav };
