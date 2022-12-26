
var headers = new Headers();
headers.append("X-CSCAPI-KEY","IZYSHDKTMX3J");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const getzone=()=>{
    fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=IZYSHDKTMX3J&format=json&fields=zoneName`,requestOptions).then(response=>{
    return response.json();
}).then(result=>{
    var options="<option>-----Select Time Zone-----</option>";
    for(let i = 0; i < result.length; i++){
        options = options + "<option value="+result.zones[i].zoneName+">"+ result.zones[i].zoneName +"</option>";
    }
    time.innerHTML=options;
    // console.log(result.zones[1].zoneName);
}).catch(err=>{
    console.log(err)
})
}

const gettime=(zone)=>{
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=d8700f1db91f43538aaaffd1badd1d85&tz=${zone}`,requestOptions).then(response=>{
    return response.json();
}).then(result=>{
    // console.log(result);
    time.innerHTML=result
}).catch(err=>{
    console.log(err)
})
}
