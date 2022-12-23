const exp = require("constants");   
const express=require("express")
const app=express()
const PORT=9000;
const path=require("path")
const hbs=require("hbs")
const geocode=require("../util/geocode")
const weather=require("../util/weather")

const viewpath=path.join(__dirname,"../templates/views")
const publicpath=path.join(__dirname,"../public")

app.set("view engine","hbs")
app.set("views",viewpath)
app.use(express.static(publicpath))

app.get("/",(req,resp)=>{
    resp.render("index")
})
  
app.get("/weather",(req,resp)=>{
    const location = req.query.location
    geocode.getgeocode(location, (err, data) => {
        if (err) {
            console.log("Invalid api");
            return;
        }

        lat = data.lat;
        lng = data.lng;

        weather.getweather(lat, lng, (err, data) => {
            if (err) {
                console.log("Invalid api");
                return;
            }
            resp.send(data)
        })
    })
})

app.listen(PORT,()=>{
    console.log("server running on port : " + PORT );
})

