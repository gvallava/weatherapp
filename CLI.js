var inquirer = require("inquirer");

var WeatherAdmin = require("./WeatherAdmin.js");


var MyAdmin = new WeatherAdmin();

  
inquirer.prompt([
    {
        type: "list",
        name: "person",
        message: "Are you a user or admin?",
        choices: ["user", "admin"]
    }

    ]).then(function(user) {

    if (user.person == "admin") {
   	MyAdmin.getData();

    }

   else if (user.person == "user") {
    	inquirer.prompt([
    	{
    		type: "input",
        	name: "name",
        	message: "What is your name?",
    }, {
    	type: "input",
        name: "location",
        message: "What is your location?",
       	}
       	]).then(function(user) {
       		MyAdmin.newUserSearch(user.name, user.location);
       	})
	}
    });


