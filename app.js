const express = require("express");
const app = express();
const port = 3000;

const DBdata = require("./SQL.js")
//const getNasData = require("./NasAPI.js")

//handes get requests to this url
app.get("/", function (req, res) {
  console.log('reached the back end')
});

app.get("/getData", function (req, res) {
  console.log('getting data')
  DBdata
});

app.get("/NASA", function (req, res) {
  console.log('reached NasAPI')
  //getNasData
});


// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





