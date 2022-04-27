const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const conn = require("./database");

const userRoute = require("./routes/users");
const novelRoute = require("./routes/novels");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/admin/users", userRoute);
app.use("/admin/novels", novelRoute);
// const conn = createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "react_db",
// });

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

app.listen(5000, () => {
  console.log("port 5k");
});
