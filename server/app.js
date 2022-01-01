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
    `SELECT * FROM players WHERE players.pname = '${req.body.name}';`,
    (err, results) => {
      console.log(results);
    }
  );
  res.send(result.results);
  //   const [result, meta] = sequelize.query(`SELECT * FROM Actor;`);
});
app.use("/user/", accountRouter);
app.use("/artist/", artistRouter);
app.use("/album/", albumRouter);
app.use("/song/", songRouter);
app.use("/playlist/", playlistRouter);
// app.use(express.json);

module.exports = app;
