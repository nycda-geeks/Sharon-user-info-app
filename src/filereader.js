var fs = require('fs');

function JSONreader(filename, callback){
	fs.readFile(filename, function(err,data) {
	if (err) {
		throw err;
	}
	var parsedJSON = JSON.parse(data);

	console.log("JSON file objects : " + parsedJSON.length)

	callback(parsedJSON);
	});

}

module.exports = {
	JSONreader: JSONreader
}

