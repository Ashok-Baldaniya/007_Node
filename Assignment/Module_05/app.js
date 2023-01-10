const mongoose=require("mongoose")
const express=require("express")
const app=express()
const PORT=9000;

app.use(express.json())

const dburl="mongodb+srv://ashok:ashok@cluster0.kyysrgr.mongodb.net/assigndb?retryWrites=true&w=majority"

mongoose.connect(dburl).then(()=>{
    console.log("db connected..");
}).catch(err=>{
    console.log(err);
})

const taskrouter=require("./router/taskrouter")
const shoprouter=require("./router/shoprouter")

app.use("/",taskrouter)
app.use("/",shoprouter)

app.listen(PORT,()=>{
    console.log("server running on port : " + PORT);
  })