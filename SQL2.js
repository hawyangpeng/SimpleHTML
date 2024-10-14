const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Compound',
  password: 'Interest22!',
  database: 'jptestdb'
});

// connect to the MySQL database
connection.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:', error);
}else{
console.log('Connected to MySQL database!');
}
});

//data from connection.query is an object.
//a promise is wrapped around the object so we can use the async function to call it later
async function getData (){
  try {
    const [results, fields] = await connection.promise().query("SELECT * FROM jptestdb.contacts")
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return results
  } catch (err){
    console.log(err)
  }
}

async function postData (FirstName, LastName, Email, Mobile){
  try {
    var sql = `INSERT INTO jptestdb.contacts (FirstName, LastName, Email, Mobile) VALUES ("${FirstName}","${LastName}","${Email}","${Mobile}")`;

    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  } catch (err){
    console.log(err)
  }
}

async function deleteData (ID){
  try {
    var sql = `DELETE FROM jptestdb.contacts WHERE ID = "${ID}"`;

    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
  });
  } catch (err){
    console.log(err)
  }
}


module.exports = {
  getData,
  postData,
  deleteData,
}