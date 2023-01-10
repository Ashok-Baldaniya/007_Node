const express=require("express")
const router=express.Router()
const Task=require("../model/Task")

router.post("/tasks",async (req,resp)=>{
    try {
        const res = new Task(req.body)
        const data = await res.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/tasks",async (req,resp)=>{
    try {
        const data = await Task.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/tasks/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Task.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }  
})

router.delete("/tasks/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Task.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
  
    }  
})

router.patch("/tasks/:id",async (req,resp)=>{
    const _id=req.params.id
    try {
        const data = await Task.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
  
    }  
})


module.exports=router