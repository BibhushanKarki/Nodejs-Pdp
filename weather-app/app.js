const request = require('request');
const geocode =require('./utils/geocode');

const url = 'http://api.weatherstack.com/current?access_key=b75f87f480ce164e2f4e3ddd3fac72af&query=26.452475,87.271782&units=f';

request({url:url}, (error,response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if(response.body){
    console.log('Unable to find location');
  }
  else {
    const data= JSON.parse(response.body);
    console.log(`It is currently ${data.current.temperature} Fahrenheit out. It feels like ${data.current.feelslike} Fahrenheit.`);
  }
});

// Geocoding

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmliaHVzaGFuIiwiYSI6ImNsMTk1NTdnODBwbmszanJpaHVkYWt2MzUifQ.QDLTJpqZ_IS7KZE0uzP8RQ';

request({url:geoCodeUrl,json:true}, (error,response) => {
  if (error) {
      console.log('Unable to connect to location service!');
  } else if(response.body.features.length === 0){
    console.log('Unable to find location. Try another search.');
  }
  else{
  const latitude= response.body.features[0].center[1];
  const longitute= response.body.features[0].center[0];
  console.log(latitude,longitute);
  }
});

geocode('Biratnagar',(error,data)=>{
  console.log('Error',error);
  console.log('Data',data);
})