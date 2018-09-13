var express=require('express');
var mysql=require('mysql')
var app=express();
var port=1337


var connection=mysql.createPool({
  connectionLimit:50,
  host: 'localhost',
  user:"springuser",
  password:"ThePassword",
  database:'test'
});

console.log("listening  to port "+port );
app.get('/',function(req,resp){
  connection.getConnection(function(error,tempCont){
    if(!!error){
      tempCont.release();
      console.log("Error")
    }else{
        console.log('Connected');
        tempCont.query("SELECT * FROM users ",function(error,rows,fields){
          if(!!error){
            console.log('Error in  query');
          }else {
              resp.json(rows);
          }
        })
    }
  })
})


app.listen(port);
