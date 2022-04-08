const { Connection, Request } = require("tedious");

// const {config} = require('../db')

const config = {
    authentication: {
      options: {
        userName: "dharani@myddemoserver", // update me
        password: "Krithi@2" // update me
      },
      type: "default"
    },
    server: "myddemoserver.postgres.database.azure.com", // update me
    options: {
      database: "ttgeneratordb", //update me
      encrypt: true
    }
  };

const connection = new Connection(config);

connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
      queryDatabase();
    }
  });
  
  connection.connect();
  
  function queryDatabase() {
    console.log("Reading rows from the Table...");
  
    // Read all rows from table
    const request = new Request(
      `SELECT * FROM public.staff;`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
      }
    );
  
    request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });
  
    connection.execSql(request);

}