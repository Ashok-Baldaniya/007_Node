const axios=require("axios")

var city=process.argv[2]

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f920c9d5312c0c1a1fdf34f74258db6&units=metric`

axios.get(url).then(result=>{
   const temp=result.data.main.temp;
   const pressure=result.data.main.pressure
   const humidity=result.data.main.humidity
   const city=result.data.name

   console.log(`
   City:${city},
   Temp:${temp},
   Pressure:${pressure},
   Humidity:${humidity}
   `);
}).catch(err=>{
    console.log(err);
})
