var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var filereader = require('./src/filereader.js')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// Part 0 - route 1 - show users

app.set('views', './src/views');
app.set('view engine', 'jade')

app.get('/', function(req, res){

	filereader.JSONreader('./users.json', 
		function (parsedJSON){
			res.render('index', {names: parsedJSON})
		} )

} );


// Part 1 - route 2 & 3 - search and show users on new page

app.get('/search', function(req, res){ 

	res.render('search')

} );

app.post('/result', function(req, res){

	var storeUser = []
	var usersearch = req.body.userinput
	console.log("post")
	filereader.JSONreader('./users.json', function (parsedJSON){
		console.log('filereader werkt')
		for( i=0; i<parsedJSON.length; i++ ){
			if(usersearch == parsedJSON[i].firstname || usersearch == parsedJSON[i].lastname){
				storeUser.push(usersearch)
				var userFirst = parsedJSON[i].firstname
				var userLast = parsedJSON[i].lastname
				console.log('pushed')
			}

		}
		if(storeUser.length > 0){
			res.send("Name user: " + userFirst + " " + userLast)
		} else {
			res.send('No such user was found.')
		}
	} )

} );



// Part 2 - route 4 & 5 - Create user and send to users.json

//simply render a page with app.get
//make a jade page with three forms on there and a submit button
//make a method post on the jade file to send the data back
//make a new post route with app.post
//inside make a function that sends the new user to users.json
// How to make this function?

app.get('/create', function(req, res){
	res.render('create')
})

app.post('/add', function(req,res){

	var createFirstname = req.body.createFirstname
	var createLastname = req.body.createLastname
	var createEmail = req.body.createEmail

	if ( createFirstname.length > 0 && createLastname.length > 0 && createEmail.length > 0 ) {
		filereader.JSONreader('./users.json', function (parsedJSON){
			console.log('pasredjson ' + parsedJSON)
			parsedJSON.push({firstname: createFirstname, lastname: createLastname, email: createEmail})
			console.log('pushedjson ' + parsedJSON)
			fs.writeFile('./users.json', JSON.stringify(parsedJSON), function() {
				//res.send(parsedJSON)
			})

		} );
	}
	res.redirect('/')

} )



var server = app.listen(3000, function () {
	console.log('User info app listening on port: ' + server.address().port);
});

