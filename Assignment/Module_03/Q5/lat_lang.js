const axios=require("axios")

const geocodedata=(city,callback)=>{

    const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=e5f2db858bf44271886a41a70121c50c`;

    axios.get(url).then(result=>{

        const dt=result.data.results[0].geometry;

        const lat=dt.lat
        const lng=dt.lng

        callback({lat,lng});

    }).catch(err=>{
        // callback(err);
        console.log(err);
    })
}

module.exports={geocodedata}



