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

function getres (){
  connection.query("SELECT * FROM jptestdb.contacts", function (err, result, fields) {
    if (err) throw err;
    console.log('works')
    return result;
  });
}

getres()

function testDB(){
    return 348995
}

console.log(testDB())


