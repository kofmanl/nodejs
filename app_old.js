const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/user/:id', (req, res) => {
  console.log("Fetching user with id " + req.params.id)
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'Localhost',
//    database: 'node'
  })
conn.connect(function(err){
  if(err){
    console.log("Not connected")
    throw err;
  }
  console.log("Connected")
  //conn.query("CREATE DATABASE mydb",)
})
  const userId = req.params.id
  console.log(userId);
  //const queryString = "Select * from users where id=?"



  conn.query("SELECT * FROM users",  (err, result, fields) {
    if(err) throw


    console.log("I think we fetched successfully ");
console.log(rows);

  //  res.json(rows)
  })


  res.end()
})

//connection.query("SELECT * from node.users ",(err,rows,fields)=>{
//  console.log("I think we fetched  users successfully ")
//} )

app.get("/", (req, res) => {
  console.log("hello from Rooot");
  res.send("hello from Rooot screen")
})

app.get("/users", (req, res) => {
  const user1 = { firstName: "Leon", lastName: "Kofman" }
  const user2 = { firstName: "Tal", lastName: "Kofman" }
  res.json([user1, user2])
})
app.listen(3003, () => {
  console.log("Server is up and listening on  3003 ");
})
