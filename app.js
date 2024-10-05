const express = require("express");
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors())

const DBdata = require("./SQL.js")

//handes get requests to this url
app.get("/", function (req, res) {
  console.log('reached the back end')
});

app.get("/getData", function (req, res) {
  console.log('getting data')
  console.log(DBdata)
  //res.send(DBdata)
  res.send(DBdata)
});

// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





