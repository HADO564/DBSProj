// const mysql = require('mysql');
// const Sequelize = require('sequelize');
// const connection = require('./db/dbconnection')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app.js");

const port = 8080;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
