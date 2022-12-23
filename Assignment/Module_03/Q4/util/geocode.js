const axios =require("axios")

const getgeocode=(city,callback)=>{
    const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=e5f2db858bf44271886a41a70121c50c`;
    axios.get(url).then(result=>{
        const dt=result.data.results[0].geometry;
        const lat=dt.lat;
        const lng=dt.lng;

        callback(undefined,{lat,lng})
    }).catch(err=>{
        callback(err);
    })
}

module.exports={getgeocode}