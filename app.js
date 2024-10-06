const express = require("express");
const { getData } = require("./SQL.js");
const { getData: fakeGetData } = require("./fakeSQL.js");
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors())

const DBdata = require("./SQL.js")

//handes get requests to this url
app.get("/", function (req, res) {
  console.log('reached the back end')
});

// Endpoints
// Group number to tackle implementation => []
// GET /{entity} Show all records [1]
// GET /{entity}/{id} Show one record [2]
// POST /{entity} Create record [1]
// PUT /{entity} Update record [2]
// DELETE /{entity} Delete record [3]

app.get("/fakeGetData", async function (req, res) {
  // Fetching on demand
  const result = await fakeGetData()
  console.log(result)
  res.send(result)
});

app.get("/getData", async function (req, res) {
  //Fetching and store in memory
  console.log('getting data')
  console.log(DBdata)
  //res.send(DBdata)
  res.send(DBdata)

  // Fetching on demand
  const result = await getData()
  res.send(result)
});

// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





