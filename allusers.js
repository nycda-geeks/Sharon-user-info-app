// touch app.js
// npm init -y
// npm install express --save


var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
//var users = require('./users.json')

var app = express()


//app.use(express.static('.'));

//app.use(bodyParser.urlencoded({extended:true}))


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
		res.render('index', {names: parsedData})
	});
});



// var values = [];
// var names = ''
// for (smth in users){
// 	values.push(users[smth]);
// 	names = values.toString()
// 	return names
// }

// app.get( '/', function(request, response){
// 	response.send(names)
// } )


// app.post('/samplePostRequest', function (request, response) {
// 	console.log("post request received");
// 	console.log(request.body);
// 	response.send('data received: ' + JSON.stringify(request.body) + '\n');
// });


var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});

// npm install --save body-parser
//include body body-parser
// app.use body body-parser
//app.post a route
// inside post do a res.send with req.body
// postinghappens in a curl -X POST --data 'hello=sir' google.com