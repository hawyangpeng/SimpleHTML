const express = require("express");
const app = express();
const port = 3000;

const DBdata = require("./SQL.js")

//handes get requests to this url
app.get("/", function (req, res) {
  console.log('reached the back end')
  DBdata
});


// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





