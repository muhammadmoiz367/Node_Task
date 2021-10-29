const app = require('./app');
const mysql = require('mysql');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
  const mysqlDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manaknight@1234',
    database: 'Nodetask'
  });

  mysqlDb.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySql connected...');
  });
});
