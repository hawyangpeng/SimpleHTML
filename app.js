const express = require("express");
const app = express();
const port = 3000;

//handes get requests to this url
app.get("/", function (req, res) {
  console.log('reached the back end')
});

//not sure why this works. But I found this path in the console when i clicked on the html link. So tried ths url.
// app.get("/index.js", function (req, res) {
//   res.sendFile(__dirname + "/index.js");
// });

// listens the the port so the get requests above works?
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// close the MySQL connection
//connection.end();





