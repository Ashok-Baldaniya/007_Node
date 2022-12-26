const express=require("express")
const app=express();
const path=require("path")
const hbs = require("hbs");
const PORT=9000;


const viewpath=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
app.set("views",viewpath)

// const partialpath=path.join(__dirname,"../templates/partials")
// hbs.registerPartials(partialpath)

const publicpath = path.join(__dirname,"../public")
app.use(express.static(publicpath))

app.get("/",(req,resp)=>{
  resp.render("home")
});

app.listen(PORT,()=>{
    console.log("server running on port : " + PORT);
});