const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
let app = express();

let arr = [
    {
        "name":"Swagat"
    },
    {
        "name":"Aryan"
    }
];

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
   return res.render('home',{
    "title":"Practice",
    "arr":arr
   }); 
});

app.post('/add',(req,res)=>{
    arr.push(req.body);
    return res.redirect('/');
});

//Listening
app.listen(port,(err)=>{
    if(err){
        console.log(`This is an error ${err.name}`);
    }
    console.log(`Listening on port ${port}`); 
});

