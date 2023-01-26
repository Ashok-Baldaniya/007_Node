const express = require("express")
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")
const auth = require("../middleware/auth")

router.get("/", (req, resp) => {
    resp.render("index")
})

router.get("/display", auth, async (req, resp) => {
    try {
        const data = await User.find()
        resp.render("display", { data: data })
    } catch (error) {
        console.log(error);
    }
})

router.post("/users", async (req, resp) => {
    try {
        const data = await new User(req.body)
        await data.save()
        resp.render("index", { msg: "registration success..." })
    } catch (error) {
        resp.send(error)
    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("login")
})

router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        const isvalid = await bcrypt.compare(req.body.password, data.password)
        if (isvalid) {
            const token = await data.generateToken();
            resp.cookie("jwt", token)
            resp.redirect("display")
        }
        else {
            resp.render("login", { msg: "invalid email or password" })
        }
    } catch (error) {
        resp.render("login", { msg: "invalid email or password" })
    }
})

router.get("/logout", auth, async (req, resp) => {
    try {
        const user = req.user
        const token = req.token
        user.Tokens = user.Tokens.filter(ele => {
            return ele.token != token
        })
        await user.save();
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logoutall", auth, async (req, resp) => {
    try {
        const user = req.user

        user.Tokens = [];
        await user.save();
        resp.clearCookie("jwt")
        resp.render("login")

    } catch (error) {
        console.log(error);
    }
})

module.exports = router