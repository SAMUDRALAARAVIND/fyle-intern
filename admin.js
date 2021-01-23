const express = require('express')
const app = express()
const Pool = require('pg').Pool;
const bodyParser = require('body-parser')
var port = 8080
app.listen(port,function(){
  console.log(`Server started on port ${port}`)
})


const pool = new Pool({
  host:"b74k0s8ewoitjlz66apj-postgresql.services.clever-cloud.com",
  user:"uadrje84dlumvndov34z",
  password:"tqqAlRTodDtVfRI1ljAK",
  database:"b74k0s8ewoitjlz66apj",
  port:5432
})
app.get("/api/branches/autocomplete",function(req,resp){
  var limit = req.query.limit;
  console.log(`limit is ${limit}`)
})



// pool.query(query, (err,result)=>{
//     if(err) throw err;
//     console.log("connected Successfully");
//   })
