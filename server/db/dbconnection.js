const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hado",
  password: "12345",
  database: "sakila",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = connection;
