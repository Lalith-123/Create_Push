var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "machintell",
  insecureAuth: true // Add this option to use insecure authentication
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
