const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const configPg = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DB,
  password: process.env.DB_PASSWORD,
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
          const sqlSelect =
            "SELECT * FROM reviews WHERE publicid LIKE '" +
            resultDB.rows[i].urltodelete +
            "'";
          client.query(sqlSelect, (errorDB, resultCheck) => {
            console.log(resultCheck.rowCount);
            if (resultCheck.rowCount < 1) {
              console.log(resultDB.rows[i].urltodelete);
              cloudinary.uploader.destroy(resultDB.rows[i].urltodelete);
              const sqlDelete =
                "DELETE FROM tobedeleted WHERE urltodelete = $1";
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
            } else {
              const sqlDelete =
                "DELETE FROM tobedeleted WHERE urltodelete = $1";
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
          });
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
  const publicId = req.body.publicId;
  const sqlInsert =
    "INSERT INTO reviews(username, userscore, usercomment, userpicture, publicid) VALUES($1,$2,$3,$4,$5) RETURNING *";
  client.query(
    sqlInsert,
    [userName, userScore, userComment, userPicture, publicId],
    (err, result) => {
      if (err) {
        res.send(err.stack);
      } else {
        res.send(result.rows[0]);
      }
    }
  );
});

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
app.listen(3001, () => {
  console.log("Running");
});
