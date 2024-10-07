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


module.exports = {
  getData,
}