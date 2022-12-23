const express=require("express")
const app=express();
const path=require("path")
const PORT = 9000;

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"));
})

app.listen(PORT,(req,resp)=>{
    console.log(`server is running on ${PORT}`)
})