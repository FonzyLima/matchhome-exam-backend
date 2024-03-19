const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/home",(req,res)=>{
    res.json({message:"gello"});
});

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})