const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = 8080;
const {readUsers} = require("./read")
const {createUser} = require("./create")
app.use(cors());
app.use(bodyParser.json());
app.get("/api/home",(req,res)=>{
    res.json({message:"gello"});
});

app.get('/api/users',(req,res)=>{
    readUsers((err,rows)=>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
})

app.post("/api/registration",(req,res)=>{
    const {fName,lName,pass,confPass} = req.body
    createUser(fName,lName,pass,confPass,(err,data)=>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send("User registered")
        }
    })
})
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})