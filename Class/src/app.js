const express = require("express")
const app=express()
const mongoose=require("mongoose")
const PORT=9000
const dburl="mongodb://127.0.0.1:27017/Menu"
app.use(express.json())


mongoose.connect(dburl).then(()=>{
    console.log("db connected successfully");
}).catch(err=>{
    console.log(err);
})


const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    }
})

const Product=new mongoose.model("product",productSchema)

app.post("/products",async (req,resp)=>{
    try {
        const product=new Product(req.body)
        const data=await product.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.get("/products",async (req,resp)=>{
    try {
        const data= await Product.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

app.get("/products/:id",async (req,resp)=>{
    try {
        const id=req.params.id
        const data=await Product.findById(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

app.put("/products/:id",async (req,resp)=>{
    const id=req.params.id
    try {
        const data=await Product.findByIdAndUpdate(id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.delete("/products/:id", async (req,resp)=>{
    const id=req.params.id
    try {
        const data=await Product.findByIdAndDelete(id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.listen(PORT,()=>{
    console.log("server running on port : "+PORT);
})