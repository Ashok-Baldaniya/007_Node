const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productname: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String
    }
})

module.exports = new mongoose.model("Product", productSchema)