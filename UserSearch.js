var weather = require("weather-js");
var fs = require("fs");


var UserSearch = function (userName, userLocation){
    this.name = userName;
    this.location = userLocation;
    this.date = Date.now();

    // Then we use the package to search for the weather at a location
    this.getWeather = function() {
    weather.find({ search: userLocation, degreeType: "F" }, function(err, result) {

      // If there is an error log it.
      if (err) {
        console.log(err);
      } else {
          fs.appendFile("log.txt", "\n" + "Name: " + userName + " " + "Location: " + userLocation + " " + "Date: " + Date.now());
          
          console.log(JSON.stringify(result, null, 2));
      }

    });
  }
}

module.exports = UserSearch;