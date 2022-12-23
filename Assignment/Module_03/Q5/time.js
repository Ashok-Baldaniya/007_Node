const axios=require("axios")  

const getdata=()=>{
    const url=`https://www.timeapi.io/api/Time/current/coordinate?latitude=21.8&longitude=72.8`;
    axios.get(url).then(result=>{
        console.log(result.data.dateTime);
    }).catch(err=>{
        console.log(err);
    })
}

module.exports={getdata}

