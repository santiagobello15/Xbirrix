const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "xbirrixdatabase",
});

pool.query("select * from reviews_table", (err, result, fields) => {
  return console.log(result);
});
