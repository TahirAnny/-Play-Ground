const { Console } = require('console');
var express=require('express');
var app=express();

app.get('/',function(req,res)
{
    res.send('Hello DS World!');

    if(req.hostname === "google.com")
        res.status(301).redirect("https://tahiranny.github.io/To-Do-App/");
});
app.listen(3000, ()=> console.log("Listenting to 3000"));