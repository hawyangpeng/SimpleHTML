const mysql = require('mysql2');

// Arrow function
// const getData = async () => {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
//   );
// }

//data from connection.query is an object.
//a promise is wrapped around the object so we can use the async function to call it later
// anywhere you call this function you will need to `await` it because it is an async function
async function getData (){
  return { "data": "test" }
}

module.exports = {
  getData,
}