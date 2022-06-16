import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Novels from "./novels-sort/Novels";
import NovelItem from "./display-each-item/Novel-Item";
import Bookmarks from "./Bookmarks";
import PageNotFound from "./PageNotFound";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Footer from "./Footer";
import Navi from "./Navi";
import Recommendations from "./Recommendations";
import { UserContext } from "./UserContext";
import { ReadNovel } from "./display-each-item/Read-Novel";

const PublicLayout = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const checkLogin = localStorage.getItem("login");
  return (
    <>
      <UserContext.Provider value={{ login, setLogin, userData, setUserData }}>
        <Navi />
        <div
          className="outlet d-flex flex-column"
          style={{ minHeight: "100%" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="novels" element={<Novels />} />
            <Route path="novel/:id">
              <Route index element={<NovelItem />} />
              <Route path=":chapter_id" element={<ReadNovel />} />
            </Route>
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="signup" element={<Signup />} />
            <Route exact path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </UserContext.Provider>
      <Footer />
    </>
  );
};

export default PublicLayout;
