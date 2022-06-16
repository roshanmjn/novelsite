import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core/dist/umd/popper.min.js";
import "./index.css";
import { AdminLayout } from "./Admin/AdminLayout";
import PublicLayout from "./pages/PublicLayout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="layout d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

export default App;
