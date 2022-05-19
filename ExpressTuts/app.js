const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//imports
const adminUserRoute = require("./routes/admin");
const adminNovelRoute = require("./routes/novels");
const userNovels = require("./routes/userNovels");
const userLogin = require("./routes/userLogin");
const userSignup = require("./routes/userSignup");
const userBookmarks = require("./routes/userBookmarks");
// const userLogout = require("./routes/x-userLogout");
const { adminLoggedIn } = require("./middleware/authAdmin");

//MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//REDIRECT ROUTES
app.use(adminUserRoute);
app.use(adminNovelRoute);
app.use(userNovels);
app.use(userLogin);
app.use(userSignup);
app.use(userBookmarks);
// app.use(userLogout);

//AUTHENTICATION
app.get("/", (req, res) => {});

app.listen(5000, () => {
  console.log("port 5k");
});
