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

connection.query("SELECT * FROM jptestdb.contacts", function (err, result, fields) {
  if (err) throw err;
  else {
  testDB(result);
  }
});

//Create a function that takes an argument. Run the function inside a block where you want to extract a variable.
function testDB(a){
    console.log(a)
}




