const express = require("express");
const app = express();
const port = 3000;

//handes get requests to this url
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/main.html"); //sendFile needs to know the file path
});

//not sure why this works. But I found this path in the console when i clicked on the html link. So tried ths url.
app.get("/handleForm.js", function (req, res) {
  res.sendFile(__dirname + "/handleForm.js");
});

// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





