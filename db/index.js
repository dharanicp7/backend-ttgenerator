const {Pool} = require('pg');
// const {Connection, Request} = require('tedious');

const {user,host,database,password,port}  = require('../secrets/db_configuration');

const pool = new Pool({user,host,database,password,port});

// pool.query('SELECT * FROM public.staff',(err,res)=>{
//     if(err) return console.log(err);
//     console.log(res.rows);
// });

module.exports = pool;

// host=myddemoserver.postgres.database.azure.com port=5432 dbname={your_database} user=dharani@myddemoserver password={your_password} sslmode=require