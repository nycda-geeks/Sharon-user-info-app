
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()


app.set('views', './src/views');
app.set('view engine', 'jade')

app.get('/', function(req, res){
	fs.readFile('./users.json', function(err,data) {
		if (err) {
			throw err;
		}
		var parsedData = JSON.parse(data)
		console.log(parsedData)
		//text = data.toString();
		res.render('search', {names: parsedData})
	});
});



app.post('/', function (req, res) {
    console.log(req.body.name);
    res.send('Post page');
});



var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});

