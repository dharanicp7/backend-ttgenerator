const {Pool} = require('pg');
// const {Connection, Request} = require('tedious');

const {user,host,database,password,port}  = require('../secrets/db_configuration');

// const connectionString = `postgres://zljvsqywsvjezd:c86bba640895339b907ff8001e20d7502caaf51a6e3e5309a2bc74adc22051f5@ec2-3-218-171-44.compute-1.amazonaws.com:5432/d28ualjaj4jnn6`

const pool = new Pool({user,host,database,password,port});

// const pool = new Pool({connectionString,ssl:{rejectUnauthorized:false}});

// pool.query('SELECT * FROM public.staff',(err,res)=>{
//     if(err) return console.log(err);
//     console.log(res.rows);
// });

module.exports = pool;

// host=myddemoserver.postgres.database.azure.com port=5432 dbname={your_database} user=dharani@myddemoserver password={your_password} sslmode=require