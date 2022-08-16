const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config;
const port = process.env.PORT || 5000;

//imports
const adminUserRoute = require("./routes/admin");
const adminNovelRoute = require("./routes/novels");
const userNovels = require("./routes/userNovels");
const userLogin = require("./routes/userLogin");
const userSignup = require("./routes/userSignup");
const userBookmarks = require("./routes/userBookmarks");
const userRating = require("./routes/userRating");
const userRecommendation = require("./routes/userRecommendation");
const userAvailabilityCheck = require("./routes/userAvailabilityCheck");
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
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/public", express.static("public"));

//REDIRECT ROUTES
app.use(adminUserRoute);
app.use(adminNovelRoute);
app.use(userNovels);
app.use(userLogin);
app.use(userSignup);
app.use(userBookmarks);
app.use(userRating);
app.use(userRecommendation);
app.use(userAvailabilityCheck);

//AUTHENTICATION
app.get("/", (req, res) => {
  res.send("__dirname");
});

// app.use(express.static(path.join(__dirname, "/novelsite")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/novelsite/build", "index.html"));
// });

app.listen(port, () => {
  console.log("port 5k");
});
