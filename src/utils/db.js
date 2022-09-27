const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect();

// * Running a query an call back function that will  test the connection. I
// * will receive an error if connection is unsuccessful, or I will get the
// * current time.
connection.query('select now()', (err, rows) => {
  // * If error is truthy, console log the error.
  if (err) {
    console.log(`Connection not successful: ${err}`);
  } else {
    // * if error object is falsy, our query will be executed and we will log
    // * the rows.
    console.log('Test query results', rows);
  }
});

module.exports = connection;
