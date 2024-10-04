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

function getData (){
  const gg = new Promise((resolve,reject)=>{
    connection.query("SELECT * FROM jptestdb.contacts", function (err, result, fields) {
      if (err) throw err;
      else {
      return resolve (result)
      }
    });
  })
  return gg
}

async function finalData(){
  const data = await getData()
  console.log(data)
}

finalData()
// function getData1 (){
//   const promise1 = new Promise ((resolve,reject) => {
//     resolve(connection.query("SELECT * FROM jptestdb.contacts", function (err, result, fields) {
//       if (err) throw err;
//       else {
//       return result
//       }}))})
//   return promise1
// }





//Create a function that takes an argument. Run the function inside a block where you want to extract a variable.
// function testDB(a){
//     console.log(a)
// }


//module.exports = testDB()
