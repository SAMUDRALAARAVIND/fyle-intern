const express = require("express");
const app = express();



const port = process.env.port || 8080;
const bodyParser = require("body-parser");
const mysql = require("mysql")
const Pool = require('pg').Pool;

const pool = new Pool({
  host:"b74k0s8ewoitjlz66apj-postgresql.services.clever-cloud.com",
  user:"uadrje84dlumvndov34z",
  password:"tqqAlRTodDtVfRI1ljAK",
  database:"b74k0s8ewoitjlz66apj",
  port:5432
});
const count = 0;
app.set("views", "views");
app.set("view engine" ,"ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})

//var pgsql = `INSERT INTO bank_branches(ifsc,bank_id,branch,address,city,district,state,bank_name) VALUES('${result[i].ifsc}', '${result[i].bank_id}', '${result[i].branch}','${result[i].address}','${result[i].city}','${result[i].district}','${result[i].state}','${result[i].bank_name}');`;

































// // const { spawn } = require('child_process');
// // const got = require('got');
// // const test = require('tape');

// // // Start the app
// // const env = Object.assign({}, process.env, {PORT: 5000});
// // const child = spawn('node', ['index.js'], {env});

// // test('responds to requests', (t) => {
// //   t.plan(4);

// //   // Wait until the server is ready
// //   child.stdout.on('data', _ => {
// //     // Make a request to our app
// //     (async () => {
// //       const response = await got('http://127.0.0.1:5000');
// //       // stop the server
// //       child.kill();
// //       // No error
// //       t.false(response.error);
// //       // Successful response
// //       t.equal(response.statusCode, 200);
// //       // Assert content checks
// //       t.notEqual(response.body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
// //       t.notEqual(response.body.indexOf("Getting Started on Heroku with Node.js"), -1);
// //     })();
// //   });
// // });
// const Pool = require('pg').Pool;
// const express = require("express");
// var app = express();
// app.listen(8080,function(){
//   console.log(`server Startedon port 8080`);
// });
// const pool = new Pool({
//   host:"b74k0s8ewoitjlz66apj-postgresql.services.clever-cloud.com",
//   user:"uadrje84dlumvndov34z",
//   password:"tqqAlRTodDtVfRI1ljAK",
//   database:"b74k0s8ewoitjlz66apj",
//   port:5432
// });
// // var query = `CREATE TABLE users(
// //   email varchar,
// //   firstname varchar,
// //   lastname varchar,
// //   age int);`;

// app.get("/pgsql",function(req,resp){
//   var query = `COPY bank_branches
// FROM 'C:/Users/Aravind/OneDrive/Desktop/fyle_intern/bank_branches.csv'
// DELIMITER ','
// CSV HEADER;`;
//   console.log("Request has been started wait for some time...");
//   pool.query(query,function(err,result){
//     console.log("request intialised");
//     if(err) resp.send(`Error occured ${err}`);
//     else{
//       console.log("done");
//       resp.send(`${JSON.stringify(result)}`);
//     }
//   });
// });
//   // pool.query(query, (err,result)=>{
//   //   if(err) throw err;
//   //   console.log("connected Successfully");
//   // });


// // C:/Users/Aravind/OneDrive/Desktop/fyle_intern/bank_branches.csv
