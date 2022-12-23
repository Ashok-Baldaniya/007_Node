const axios = require("axios");

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "YUs3R1Z5YW1yUUJKN1Q2RzBqTWVxaHdRVEpraUlOeDZjYmF3NWsyYQ==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const getcountry=()=>{
    const url=`https://api.countrystatecity.in/v1/countries`;
axios.get(url).then(response =>{
    return response.json();
})
.then(result =>{
    console.log(result);
})
.catch(error =>{
    return error;
});
}

module.exports={getcountry}