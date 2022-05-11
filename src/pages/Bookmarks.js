import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { TabTitle } from "../utils/GeneralFunctions";
import { useCookies } from "react-cookie";

import { replace } from "formik";

const Bookmarks = () => {
  TabTitle("Bookmarks");
  const [cookies, setCookie, removeCookie] = useCookies([]);
  // const navigate = useNavigate();
  // const location = useLocation();
  // useEffect(async () => {
  //   const verifyLoginToken = async () => {
  //     // console.log(cookies.jwt);
  //     if (!cookies.jwt) {
  //       navigate("/login", replace, { state: { from: location } });
  //     } else {
  //       const response = await axios.get("http://localhost:5000/bookmarks", {
  //         withCredentials: true,
  //       });
  //       if (response.data.isLoggedIn) {
  //         location.assign("/");
  //       } else {
  //         removeCookie("jwt");
  //         navigate("/login");
  //       }
  //     }
  //   };
  //   verifyLoginToken();
  // }, [cookies, navigate, removeCookie]);

 

  return (
    <div className="container">
      <ToastContainer />
      Bookmarks
      {/* {setInterval(() => {});} */}
      {/* {startInterval} */}
    </div>
  );
};

export default Bookmarks;
