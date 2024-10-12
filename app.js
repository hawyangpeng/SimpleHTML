const express = require("express");
const { getData, postData } = require("./SQL2.js");
const app = express();
const port = 3000;
var cors = require('cors');
const multer  = require('multer')
const upload = multer()

app.use(cors())
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));


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


app.get("/getData", async function (req, res) {
  // Fetching on demand
  const result = await getData()
  res.send(result)
});

app.post("/postData", upload.none(), async function (req, res) {
  console.log('Post request to back end')
  console.log(await req.body)
  console.log(await typeof req.body.fname)
  postData(
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.mobile
  )
  res.send('send response back')
});

// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





