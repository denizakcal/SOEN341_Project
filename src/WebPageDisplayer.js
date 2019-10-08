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
    
    console.log('Hello'); // This is just to make the lines below visually noticeable.
    console.log(theError,theResult['rows']);
    console.log(theError,theResult['rows'][0]);
    console.log(theError,theResult['rows'][0]['n1']);
    console.log('Goodbye'); // This is just to make the lines above visually noticeable.

    console.log("hola");//
    app.get("/ya", (req,res) => res.send(`<p>yeah!: ${theResult['rows'][0]['n1']}</p>`));//
    console.log("asta_la_vista");//

    pool.end();
});


/////////////

let express = require("express");

let app = express();

let port = 3000;

app.get("/", (req,res) => res.send("<table border=\"1\"><tr><th>rowHeaderYo</th></tr><tr><td>datumYo</td></tr></table>"));

console.log("hilo");//
//theResult['rows'][0]['n1']
app.get("/yo", (req,res) => res.send("<table border=\"1\"><tr><th>rowHeaderYo</th></tr><tr><td>datumYarrr</td></tr></table>"));

console.log("olih");//

app.listen(port, () => console.log(`Sample app listening on port ${port}`));


/////////////

