var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile("/home/deniz/Dropbox/SOEN341/SOEN341_Project/SOEN341_Project/src/index.html");
});

function getSqlResultOneServer(callback) {
  const pg = require('pg');
  const pool = new pg.Pool({
  user: 'deniz',
  host: '127.0.0.1',
  database: 'soen341db',
  password: 'cncrd',
  port: '5432'});

  //pool.query("SELECT NOW()", (err, res) => {
    pool.query("SELECT * FROM masa", (theError, theResult) => {
      console.log(theError, theResult);
      
      //console.log(theError,theResult['rows']);
      //console.log(theError,theResult['rows'][0]);
      var dataToReturn = theResult['rows'][0]['n1'];
      console.log("dataToReturn: " + dataToReturn); // This works properly.
      pool.end();
      // also need to handle if there are errors, this assumes success
      callback(dataToReturn)      
  });

  //return dataToReturn;
}
//module.exports.getSqlResult = getSqlResultOne;

function getSqlResultTwoServer(callback) {
  const pg = require('pg');
  const pool = new pg.Pool({
  user: 'deniz',
  host: '127.0.0.1',
  database: 'soen341db',
  password: 'cncrd',
  port: '5432'});

    pool.query("SELECT * FROM sometbl", (theError, theResult) => {
      //console.log(theError, theResult);
      
      //console.log(theError,theResult['rows']);
      //console.log(theError,theResult['rows'][0]);
      var dataToReturn = theResult['rows'][0]['n'];
      console.log("dataToReturn: " + dataToReturn); // This works properly.
      pool.end();
      // also need to handle if there are errors, this assumes success
      callback(dataToReturn)      
  });
}

function addUserServerSide(passedFirstName, passedLastName) {
  const pg = require('pg');
  const pool = new pg.Pool({
  user: 'deniz',
  host: '127.0.0.1',
  database: 'soen341db',
  password: 'cncrd',
  port: '5432'});
    console.log("hilo");
    pool.query(`INSERT INTO Users(firstName,lastName) VALUES('${passedFirstName}','${passedLastName}')`, (theError, theResult) => {
      //console.log(theError, theResult);
      
      //console.log(theError,theResult['rows']);
      //console.log(theError,theResult['rows'][0]);
      //var dataToReturn = theResult['rows'][0]['n'];
      //console.log("dataToReturn: " + dataToReturn); // This works properly.
      pool.end();
      // also need to handle if there are errors, this assumes success
      //var dataToReturn = "somePlaceholderValueForNow";
      //callback(dataToReturn)      
  });
}

app.post('/login',function(req,res){
  //console.log("getSqlResult(): " + getSqlResult()); // Why is this returning undefined?
  //var user_name=req.body.username;
  //var password=req.body.password;
  //console.log("User name = "+user_name+", password is "+password);
  
  getSqlResultOneServer((dataFromCallback) => {
    //this code is the actual callback
    //console.log('yo', dataFromCallback)
    res.end(`${dataFromCallback}`);
  })
});

app.post('/db2',function(req,res){
  getSqlResultTwoServer((dataFromCallback) => {
    //this code is the actual callback
    //console.log('yo', dataFromCallback)
    res.end(`${dataFromCallback}`);
  })
  //res.end('db2_yo');
});

app.post('/addUser',function(req,res){
  /*addUserServer((dataFromCallback) => {
    //this code is the actual callback
    //console.log('yo', dataFromCallback)
    res.end(`${dataFromCallback}`);
  })*/
  //var user_name=req.body.username;
  //var password=req.body.password;
  //console.log("User name = "+user_name+", password is "+password);
  addUserServerSide(req.body.firstName, req.body.lastName);
  //res.end('db2_yo');
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});