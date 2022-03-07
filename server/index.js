const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { Client } = require("pg");

const configPg = {
  user: "xbirrix",
  host: "ohio-postgres.render.com",
  database: "xbirrixdb",
  password: "OlrXvFQVHa92hkLnE13nI02n4HFh24Yh",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
};

const client = new Client(configPg);
client.connect();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/reviews", (req, res) => {
  const sqlSelect = "SELECT * FROM reviews";
  client.query(sqlSelect, (errorDB, resultDB) => {
    if (resultDB.rows) {
      return res.send(resultDB.rows);
    }
    res.send("ERROR");
    req.end();
  });
});

app.post("/api/reviews", (req, res) => {
  const userName = req.body.userName;
  const userScore = req.body.userScore;
  const userComment = req.body.userComment;
  const sqlInsert =
    "INSERT INTO reviews(username, userscore, usercomment) VALUES($1,$2,$3)";
  client.query(sqlInsert, [userName, userScore, userComment], (err, result) => {
    res.send({ result });
  });
});

app.listen(3001, () => {
  console.log("Running");
});
