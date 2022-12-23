var headers = new Headers();
headers.append("X-CSCAPI-KEY", "aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};
const getcountry = () => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions).then(response => {
        return response.json();
    }).then(result => {

        console.log(result[0]);
        var options = "<option>---Select country---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        country.innerHTML = options

    }).catch(err => {
        console.log(err);
    })
}

var countrycode;
const getstate = (ccode) => {

    countrycode = ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select State---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        //console.log(options);
        state.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}

var statecode;
const getcity = (scode) => {

    statecode = scode
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select city---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].name + ">" + result[i].name + "</option>"
        }
        //console.log(options);
        city.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}


const getweather=(city)=>{
     var location=countrycode+","+statecode+","+city
    fetch(`/weather?location=${location}`).then(data=>{
        return data.json()
    }).then(result=>{
        loc.innerHTML=location
        temp.innerHTML=result.temp;
        pre.innerHTML=result.pressure
        humi.innerHTML=result.humidity
    })
}