const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/login',(req,res)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/" method="POST"><input type="text" name="username" id="username" ><button type="submit">Login</button></form>')
    
});
app.get('/',(req,res)=>{
    fs.readFile("chat.txt",(err,data)=>{
        if(err){
        console.log(err);
        data = 'no chat exist'
        }
        res.send(`${data} <form action='/' onSubmit=document.getElementById("username")=localStorage.getItem("username") method=POST>
        <input type="text" id="message" name="message">
        <input type="hidden" name="username" id="username2">    
        <button type="submit">Send</button></form>`)
        
});
    });

    

app.post("/",(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
fs.writeFile("chat.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'}, (err) =>{
    err ? console.log(err):res.redirect("/");
})
    })
    
app.listen(3000);




