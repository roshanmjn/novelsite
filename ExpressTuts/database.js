const mysql = require("mysql");
require("dotenv").config;

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_db",
});

// module.exports = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
