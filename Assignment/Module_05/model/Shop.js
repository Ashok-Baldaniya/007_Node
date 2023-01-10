
const mongoose=require("mongoose")

const shopSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports=new mongoose.model("Shop",shopSchema)