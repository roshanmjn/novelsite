import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Novels from "./pages/Novels";
import Bookmarks from "./pages/Bookmarks";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Footer from "./pages/Footer";
import Navi from "./pages/Navi";

/*------------------ADMIN SIDE IMPORTS-------------*/
import AdminLogin from "./Admin/AdminLogin";
import Topbar from "./Admin/components/topbar/Topbar";
import Sidebar from "./Admin/components/sidebar/Sidebar";
import AdminHome from "./Admin/pages/home/Home";
import "./app.css";
import UserList from "./Admin/pages/user/user-list/UserList";
import CreateUser from "./Admin/pages/user/create-user/create-user";

const Routess = ({ location }) => {
  const checkRoute = () => {
    const splitLocation = location.pathname.split("/");
    if (splitLocation.length > 1) {
      if (splitLocation[1] === "admin") {
        console.log("admin mode");
        return true;
      }
    }
    console.log("usermode");
    return false;
  };

  return (
    <>
      {checkRoute()}
      {!checkRoute() && <Navi />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="novels" element={<Novels />} />
        <Route path="home" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route index element={<Signup />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminHome />}>
          <Route path="users" element={<UserList />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="*" element={<p style={{ flex: "4" }}>Oops!!</p>} />
        </Route>
      </Routes>

      {!checkRoute() && <Footer />}
    </>
  );
};

export default Routess;
