const router = require("express").Router()
const User = require("../model/User")
const Category = require("../model/Category")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const Product = require("../model/Product")
const Cart = require("../model/Cart")

router.get("/", async (req, resp) => {
    try {
        const data = await Category.find()
        const prod = await Product.find()
        resp.render("index", { cdata: data, pdata: prod })
    } catch (error) {
        console.log(error);
    }
})

router.get("/checkout", (req, resp) => {
    resp.render("checkout")
})

router.get("/contact", (req, resp) => {
    resp.render("contact")
})

router.get("/detail", (req, resp) => {
    resp.render("detail")
})


router.get("/shop", async (req, resp) => {
    try {
        const data = await Category.find()
        const prod = await Product.find()
        resp.render("shop", { pdata: prod, cdata: data })
    } catch (error) {
        console.log(error);
    }
})

router.get("/findByCat", async (req, resp) => {
    const id = req.query.catid
    try {
        const prod = await Product.find({ cid: id })
        const data = await Category.find()
        resp.render("shop", { pdata: prod, cdata: data })
    } catch (error) {
        console.log(error);
    }
})

router.get("/cart", auth, async (req, resp) => {
    const uid = req.user._id
    try {
        const cartdata = await Cart.aggregate([{ $match: { uid: uid } }, { $lookup: { from: "products", localField: "pid", foreignField: "_id", as: "products" } }])
        resp.render("cart", { cartd: cartdata })
    } catch (error) {
        console.log(error);
    }
})

router.get("/deletecart", auth, async (req, resp) => {
    const _id = req.query.did

    try {
        const data = await Cart.findByIdAndDelete(_id)

        resp.redirect("cart")
    } catch (error) {
        console.log(error);
    }
})

router.get("/addtocart", auth, async (req, resp) => {
    const pid = req.query.pid
    const uid = req.user._id

    try {
        const cart = new Cart({
            pid: pid,
            uid: uid
        })
        await cart.save()
        resp.send("product added into Cart")
    } catch (error) {
        console.log(error);
    }
})

router.get("/registrationpage", (req, resp) => {
    resp.render("userregistration")
})

router.post("/userregistration", async (req, resp) => {
    try {
        const data = new User(req.body)
        await data.save()
        resp.render("userregistration", { msg: "registration successfully..!!!" })
    } catch (error) {
        console.log(error);
    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("userlogin")
})

router.post("/userlogin", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        const isvalid = await bcrypt.compare(req.body.password, data.password)
        if (isvalid) {
            const token = await jwt.sign({ _id: data._id }, process.env.SKEY)
            data.Tokens = data.Tokens.concat({ token })
            data.save()
            resp.cookie("jwt", token)
            resp.render("index")
        }
        else {
            resp.render("userlogin", { msg: "password" })
        }
    } catch (error) {
        resp.render("userlogin", { msg: "invalid email or password" })
    }
})

router.get("/userlogout", auth, async (req, resp) => {
    try {
        resp.clearCookie("jwt")
        resp.redirect("loginpage")
    } catch (error) {
        console.log(error);
    }
})


module.exports = router