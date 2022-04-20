import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core/dist/umd/popper.min.js";
// import "./index.css";
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
import Novel from "./Admin/pages/novel/Home";
import UploadNovel from "./Admin/pages/novel/upload/upload-novel";
import TopNovel from "./Admin/pages/novel/top-novel/top-novel";

const App = () => {
  return (
    <div className="layout">
      {/* <Navi />
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
      <Footer /> 
<Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes> 
      </div>*/}
      {/* <AdminLogin /> */}
      <Topbar />
      <div className="containers">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users">
            <Route index element={<UserList />} />
            <Route exact path="create" element={<CreateUser />} />
          </Route>

          <Route path="/novels">
            <Route index element={<Novel />} />
            <Route path="upload" element={<UploadNovel />} />
            <Route path="top" element={<TopNovel />} />
            <Route path="genre" element={<Novel />} />
          </Route>

          <Route path="*" element={<p style={{ flex: "5" }}>Oops!!</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
