import React from "react";
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

const PublicLayout = () => {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="novels" element={<Novels />} />
        <Route path="novel" element={<NovelItem />} />
        <Route path="home" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicLayout;
