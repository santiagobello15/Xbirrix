const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { Client } = require("pg");

const cloudinary = require("cloudinary").v2;

// Change cloud name, API Key, and API Secret below

cloudinary.config({
  cloud_name: "dpkfb428j",
  api_key: "673189361226453",
  api_secret: "T4H-o9GvR0hdxS7akEyIORFeLzs",
});

// Change 'sample' to any public ID of your choice
const hello = () => {
  cloudinary.uploader.destroy("vhuimxckabbm15kwaenl", function (result) {
    console.log(result);
  });
};

const hehe = () => {
  const sqlDelete = "DELETE FROM tobedeleted";
  client.query(sqlDelete, (err, result) => {
    if (err) {
      res.send(err.stack);
    } else {
      console.log("Deleted");
    }
  });
};

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
  });
});
app.get("/api/delete", (req, res) => {
  const sqlSelect = "SELECT * FROM tobedeleted";
  client.query(sqlSelect, (errorDB, resultDB) => {
    if (resultDB.rows) {
      if (resultDB.rows[0]) {
        for (let i = 0; i < resultDB.rows.length; i++) {
          console.log(resultDB.rows[i].urltodelete);
          cloudinary.uploader.destroy(resultDB.rows[i].urltodelete);
          const sqlDelete = "DELETE FROM tobedeleted WHERE urltodelete = $1";
          client.query(
            sqlDelete,
            [resultDB.rows[i].urltodelete],
            (err, result) => {
              if (err) {
                res.send(err.stack);
              } else {
                console.log("Deleted");
              }
            }
          );
        }
      }

      return res.send(resultDB.rows);
    } else {
      console.log("no hay nada");
    }
    res.send("ERROR");
  });
});

app.post("/api/reviews", (req, res) => {
  const userName = req.body.userName;
  const userScore = req.body.userScore;
  const userComment = req.body.userComment;
  const userPicture = req.body.userPicture;
  const sqlInsert =
    "INSERT INTO reviews(username, userscore, usercomment, userpicture) VALUES($1,$2,$3,$4) RETURNING *";
  client.query(
    sqlInsert,
    [userName, userScore, userComment, userPicture],
    (err, result) => {
      if (err) {
        res.send(err.stack);
      } else {
        res.send(result.rows[0]);
      }
    }
  );
});
const postUrlsToDelete = () => {
  app.post("/api/delete", (req, res) => {
    const urlToDelete = req.body.urlToDelete;
    const sqlInsert =
      "INSERT INTO tobedeleted(urltodelete) VALUES($1) RETURNING *";
    client.query(sqlInsert, [urlToDelete], (err, result) => {
      if (err) {
        res.send(err.stack);
      } else {
        res.send(result.rows[0]);
      }
    });
  });
};

app.listen(3001, () => {
  console.log("Running");
});

postUrlsToDelete();
