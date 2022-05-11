const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const conn = require("./database");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

//import routes
const auth = require("./authentication/auth");
const adminUserRoute = require("./routes/users");
const adminNovelRoute = require("./routes/novels");
const userNovels = require("./routes/userNovels");
const userLogin = require("./routes/userLogin");
const userSignup = require("./routes/userSignup");
const userBookmarks = require("./routes/userBookmarks");
const userLogout = require("./routes/userLogout");
const userMiddleware = require("./middleware/authMiddleware");

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
app.use("/admin/users", adminUserRoute);
app.use("/admin/novels", adminNovelRoute);
app.use(userNovels);
app.use(userLogin);
app.use(userSignup);
app.use(userBookmarks);
app.use(userLogout);

//AUTHENTICATION
app.get("/", (req, res) => {
  const query = "select * from admin";
  conn.query(query, (err, rows) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  });
});

app.post("/admin/login", auth.adminLogin);
app.post("/register", auth.register);

app.listen(5000, () => {
  console.log("port 5k");
});
