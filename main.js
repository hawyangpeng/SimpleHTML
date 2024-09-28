const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

app.get("/handleForm.js", function (req, res) {
  res.sendFile(__dirname + "/handleForm.js");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});




// close the MySQL connection
//connection.end();





