const router = require("express").Router()
const Product = require("../model/Product")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/profile")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})
const upload = multer({ storage: storage })

router.get("/", (req, resp) => {
    resp.render("index")
})

router.get("/gohome", (req, resp) => {
    resp.render("index")
})

router.get("/display", async (req, resp) => {
    try {
        const result = await Product.find()
        resp.render("display", { data: result })
    } catch (error) {
        console.log(error);
    }
})

router.post("/addproduct", upload.single("file"), async (req, resp) => {
    try {
        const data = new Product({
            productname: req.body.productname,
            price: req.body.price,
            img: req.file.filename
        })
        await data.save()
        resp.render("index", { msg: "product add successfully" })
    } catch (error) {
        console.log(error);
    }
})


router.get("/update", async (req, resp) => {
    const id = req.query.uid
    try {
        const data = await Product.findOne({ _id: id })
        resp.render("update", { data: data })
    } catch (error) {
        console.log(error);
    }
})
router.post("/updateproduct", upload.single("file"), async (req, resp) => {

    try {
        const data = await Product.findByIdAndUpdate(req.body.id, {
            productname: req.body.productname,
            price: req.body.price,
            img: req.file.filename
        })
        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`))
        resp.redirect("display")

    } catch (error) {
        console.log(error);
    }
})

router.get("/delete", async (req, resp) => {
    const id = req.query.did
    try {
        const data = await Product.findByIdAndDelete(id)
        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`))
        resp.redirect("display")

    } catch (error) {
        console.log(error);
    }
})


module.exports = router