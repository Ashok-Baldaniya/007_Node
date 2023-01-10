const express=require("express")
const router=express.Router()
const Shop=require("../model/Shop")

router.post("/shops",async (req,resp)=>{
    try {
        const res = new Shop(req.body)
        const data = await res.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/shops",async (req,resp)=>{
    try {
        const data = await Shop.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/shops/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Shop.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }  
})

router.delete("/shops/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Shop.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
  
    }  
})

router.patch("/shops/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Shop.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
  
    }  
})


module.exports=router