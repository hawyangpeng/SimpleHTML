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
  // const gg = new Promise((resolve,reject)=>{
  //   connection.query("SELECT * FROM jptestdb.contacts", function (err, result, fields) {
  //     if (err) throw err;
  //     else {
  //     return resolve (result) //the return here is important
  //     }
  //   });
  // })
  // return gg
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM jptestdb.contacts'
    );
    return results;
  } catch (err) {
    console.error(err);
    throw err
  }
}

// export getData for other modules to use instead
// async function DBdata(){
//   const data = await getData()
//   return data
//   //console.log(data)
// }

// DBdata()

module.exports = {
  getData,
}