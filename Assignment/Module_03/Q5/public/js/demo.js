
const getzone = ()=>{
    fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=IZYSHDKTMX3J&format=json&fields=zoneName`, {
    method: "GET"
}).then(response=>{
    return response.json();
}).then(result=>{
    var options="<option>-----Select Time Zone-----</option>";
    for(let i = 0; i < result.zones.length; i++){
        options = options + "<option value="+result.zones[i].zoneName+">"+ result.zones[i].zoneName +"</option>";
    }
    zone.innerHTML=options
    // console.log(result.zones[400].zoneName);
    // console.log(result.zones.length);
}).catch(err=>{
    console.log(err);
})
}


const gettime=(zone)=>{
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=d8700f1db91f43538aaaffd1badd1d85&tz=${zone}`,{method: "GET"}).then(response=>{
    return response.json();
}).then(result=>{
    // console.log(result);
    var time12=result.time_12
    var timeZone=result.timezone
    var dat=result.date
    tz.innerHTML=timeZone
    ok.innerHTML=time12
    dt.innerHTML=dat
}).catch(err=>{
    console.log(err)
})
}
