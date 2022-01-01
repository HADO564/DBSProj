const express = require("express");
const morgan = require("morgan");
const app = express();
const playlistRouter = require("./routes/playlistrouter");
const artistRouter = require("./routes/artistrouter");
const songRouter = require("./routes/songrouter");
const accountRouter = require("./routes/accountrouter");
const albumRouter = require("./routes/albumrouter");
const db = require("./db/dbconnection");
app.use(express.json());
// app.use("/playlist", playlistRouter)
app.get("/", async (req, res) => {
  res.send("Going to homepage");
  const result = db.query(
    `SELECT * FROM actor WHERE actor.first_name = '${req.body.name}';`,
    (err, d) => {
      console.log(err, d);
    }
  );
  //   const [result, meta] = sequelize.query(`SELECT * FROM Actor;`);
});
app.use("/user", accountRouter);
// app.use(express.json);

module.exports = app;
