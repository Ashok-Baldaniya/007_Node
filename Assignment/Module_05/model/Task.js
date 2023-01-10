
const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    name:{
        type:String
    },
    task:{
        type:String
    }
})

module.exports=new mongoose.model("Task",taskSchema)