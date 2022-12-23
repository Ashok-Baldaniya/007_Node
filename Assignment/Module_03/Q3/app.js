const express=require("express")
const PORT=9000;
const path=require("path");
const app= new express();

app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})

app.get("*",(req,resp)=>{
    resp.send("<h1> page not found </h1>")
})

app.listen(PORT,()=>{
    console.log("Server is running on :",PORT);
})