import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core/dist/umd/popper.min.js";
import "./index.css";
import { AdminLayout } from "./Admin/AdminLayout";
import PublicLayout from "./pages/PublicLayout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="layout">
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

export default App;
