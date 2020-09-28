const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "Badar",
  password: "Nbhs1700@",
  database: "curaprox",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connected");
  else console.log("Not Connected");
});

module.exports = mysqlConnection;
