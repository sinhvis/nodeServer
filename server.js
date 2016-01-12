// get the http and filesystem modules
var http = require('http'),
	fs = require('fs') ;

// create our server using the http module
http.createServer(function(req, res) {
	
	// Write to our server.  Set configuration
	res.writeHead(200, {
		'Content-type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	}) ;

	// grab the index.html file using fs
	var readStream = fs.createReadStream(__dirname + '/index.html') ;

	// send the index.html file to our user
	readStream.pipe(res) ;

}).listen(1337) ;

// tell ourselves what's happening
console.log('Visit me at http://localhost:1337') ;
