const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "xbirrixdatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM reviews_table";
  pool.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const userName = req.body.userName;
  const userScore = req.body.userScore;
  const userComment = req.body.userComment;
  const sqlInsert =
    "INSERT INTO reviews_table (userName, userScore, userComment) VALUES (?,?,?)";
  pool.query(sqlInsert, [userName, userScore, userComment], (err, result) => {
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("JOJO");
});
