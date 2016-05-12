
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var filereader = require('./filereader.js')

var app = express()


// Part 0 - route 1 - show users

app.set('views', './src/views');
app.set('view engine', 'jade')

app.get('/', function(req, res){

	filereader.JSONreader('./users.json', callback)

	function callback(parsedJSON){
		parsedJSON.forEach(function(key)){
			names.push(key)
		}
	}

	res.render('index', {names: parsedData})
});


// Part 1 - route 2 - search users

separateModule.JSONreader('./countries.json', callback);

function callback(parsedJSON){
	parsedJSON.forEach(function(key){
		if (input === key.name){
			console.log("Country: " + key.name);
			console.log("Top Level Domain: " + key.topLevelDomain)
		}
	});
}








var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});

