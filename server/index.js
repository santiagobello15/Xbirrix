const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "xbirrixdatabase",
});

pool.query(
  "INSERT INTO reviews_table (user_name, user_score, user_comment) VALUES ('test2', '25', 'jejej')",
  (err, result, fields) => {
    return console.log(result);
  }
);
