var UserSearch = require('./UserSearch.js');
var fs = require("fs");

var WeatherAdmin = function(){
	this.getData = function(){
		fs.readFile("log.txt", "utf8", function(error, data){
			console.log(data);
		})
	},

	this.newUserSearch = function(userName, userLocation){
		var newSearch = new UserSearch(userName, userLocation);
		newSearch.getWeather();

	}
}

module.exports = WeatherAdmin;