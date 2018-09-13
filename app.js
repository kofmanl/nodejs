var express=require('express');
var mysql=require('mysql')
var app=express();


var connection=mysql.createConnection({
  host: 'localhost',
  user:"springuser",
  password:"ThePassword",
  database:'test'
});

connection.connect( function(error){
    if(!!error) {
      console.log('Error');
    } else {
      console.log('Connected');
    }
});

app.get('/',function(req,res){
  //about sql
  connection.query("SELECT * FROM  users",function(error,raws,fields){
      if(!!error)
      {
        console.log('Error in the query');
      }else{
        console.log('Success \n');
        console.log(raws.length)
        for(i=0;i<raws.length;i++){
        console.log(raws[i].first_name+"\t "+raws[i].last_name);

      }
      }

  });
})
app.listen(1337);
