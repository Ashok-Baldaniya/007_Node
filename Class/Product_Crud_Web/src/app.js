const mongoose = require("mongoose")
const express = require("express")
const app = express()
const PORT = 9000;
const bodyParser = require("body-parser")
const hbs = require("hbs")
const path = require("path")

const viewpath = path.join(__dirname, "../templates/views")
const publicpath = path.join(__dirname, "../public")

app.use(express.static(publicpath))
app.set("view engine", "hbs")
app.set("views", viewpath)

app.use(bodyParser.urlencoded({ extended: false }))

const dburl = "mongodb+srv://ashok:ashok@cluster0.kyysrgr.mongodb.net/product?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("database connected...");
}).catch(err => {
    console.log(err);
})

const productrouter = require("../router/productrouter")

app.use("/", productrouter)


app.listen(PORT, () => {
    console.log("server running on : " + PORT);
})