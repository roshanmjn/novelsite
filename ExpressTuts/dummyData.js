const columns = [
  {
    field: "id",
    headerName: "ID",

    field: "firstName",
    headerName: "First name",
  },
  {
    field: "lastName",
    headerName: "Last name",
  },
  {
    field: "age",
    headerName: "Age",
  },
  {
    field: "fullName",
    headerName: "Full name",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

// app.post("", (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     const params = req.body;
//     connection.query("insert into admin set ?", params, (err, rows) => {
//       connection.release();

//       if (!err) {
//         console.log(params);
//         res.send(`${params.username}`);
//       } else {
//         console.log(err);
//       }
//     });
//   });
// });

// app.put("", (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     const { id, username, name, email, password, admin } = req.body;
//     connection.query(
//       "update admin set email = ?,name=? where id = ?",
//       [email, name, id],
//       (err, rows) => {
//         connection.release();
//         if (!err) {
//           res.send(`username:${username}, email:${email}}`);
//         } else {
//           console.log(err);
//         }
//       }
//     );
//   });
// });

module.exports = { rows };
