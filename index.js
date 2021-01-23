const express = require("express");
const app = express();



const port = process.env.port || 8080;
const bodyParser = require("body-parser");
const mysql = require("mysql")

app.use(express.static('public'))
// const Pool = require('pg').Pool;
//
// const pool = new Pool({
//   host:"b74k0s8ewoitjlz66apj-postgresql.services.clever-cloud.com",
//   user:"uadrje84dlumvndov34z",
//   password:"tqqAlRTodDtVfRI1ljAK",
//   database:"b74k0s8ewoitjlz66apj",
//   port:5432
// });


var conn = mysql.createConnection({
  host:"localhost",
  database:"fyle",
  password:"Indian@123",
  user:"root"
});
conn.connect();
app.set("views", "views");
app.set("view engine" ,"ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})

app.get("/api/branches/autocomplete",function(req,resp){
  var data = {
    limit:req.query.limit,
    q:req.query.q,
    offset:req.query.offset
  };
  resp.render('home',{ejsData:data});
})

app.post("/",(req,resp)=>{
  console.log(`state is: ${req.body.state} limit is: ${req.body.limit} searchItem is: ${req.body.searchItem}`);
  var searchItem = req.body.searchItem;
  var state = req.body.state;
  if(searchItem!==''){

      var sql = `SELECT bank_name FROM bank_branches WHERE bank_name REGEXP '${req.body.searchItem}' and state='${state}' ORDER BY ifsc LIMIT 5;`;
      conn.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);

        resp.send(result);
      });
    }
});




app.post("/bank/table",(req,resp)=>{
  var limit = req.body.limit;
  var state = req.body.state;
  var bank = req.body.searchItem;

  console.log(`limit is: ${limit} state=${state} bank = ${bank}`);
  var query = `SELECT * FROM bank_branches WHERE state='${state}' and bank_name='${bank}' ORDER BY ifsc LIMIT ${limit};`;
  conn.query(query,function(err,result){
    if(err) throw err;

    console.log(result);
    resp.send(result);
  })
})




app.get("/test",(req,resp)=>{
  pool.query(`select * from users;`,function(err,result){
    if(err) throw err;
    console.log(result.rows);
  });
  resp.send("HEll")
});


//  var pgsql = `INSERT INTO bank_branches(ifsc,bank_id,branch,address,city,district,state,bank_name) VALUES('${result[i].ifsc}', '${result[i].bank_id}', '${result[i].branch}','${result[i].address}','${result[i].city}','${result[i].district}','${result[i].state}','${result[i].bank_name}');`;
