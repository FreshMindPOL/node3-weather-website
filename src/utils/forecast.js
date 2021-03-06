const request = require('request');

const forecast = (latitude, longitude, callback) => {
   const url = `https://api.darksky.net/forecast/3da0df34d95539746ef146de318fcb23/${latitude},${longitude}?units=si`;

   request({ url, json: true }, (error, { body }) => {
      if (error) {
         callback('Unable to connect to weather service!', undefined);
      } else if (body.error) {
         callback('Unable to find location', undefined);
      } else {
         callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100}% chance of rain. Wind speed: ${body.daily.data[0].windSpeed}`);
      }
   });
};

module.exports = forecast;