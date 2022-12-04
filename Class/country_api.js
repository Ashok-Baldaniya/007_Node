const axios=require("axios")

// const url=`http://country.io/names.json`;
const url=`http://country.io/names.json`;

axios.get(url).then(result=>{
    console.log(result.data);
}).catch(err=>{
    console.log(err);
})  



// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "YUs3R1Z5YW1yUUJKN1Q2RzBqTWVxaHdRVEpraUlOeDZjYmF3NWsyYQ==");

// var requestOptions = {
//  method: 'GET',
//  headers: headers,
//  redirect: 'follow'
// };

// fetch("https://api.countrystatecity.in/v1/countries/ID/states", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));