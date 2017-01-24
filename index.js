var http 	 = require('http');
var path     = require('path');
var fs 	     = require('fs');
var router   = require('./libs/router');
var mimes    = require('./libs/mime');
var readFile = require('./libs/readFile');

var html = ['/index.html','/freebase.html']; // Add .html .js .css .gif .jpg etc
var images = ['/freebase.gif','/9tmD1Elq.jpeg'];


html.forEach(function(element) {
	console.log("page: " + element);
	router.register(element, function(request, res) {
		console.log('request ', request.url);
		var filePath = './theme/' + request.url;
		var contentType = mimes.miMe(request, function(err, result){});
	
		fs.readFile(filePath, function(error, content) {
		        res.writeHead(200, { 'Content-Type': contentType });
		        res.end(content, 'utf-8');
		});
	});	 
});  
images.forEach(function(element) {
	console.log("page: " + element);
	router.register(element, function(request, res) {
		console.log('request ', request.url);
		var filePath = './theme/img/' + request.url;
		var contentType = mimes.miMe(request, function(err, result){});
	
		fs.readFile(filePath, function(error, content) {
		        res.writeHead(200, { 'Content-Type': contentType });
		        res.end(content, 'utf-8');
		});
	});	 
}); 

router.register('/', function(req, res) {
    console.log('request ', req.url); 
    var filePath = './theme/index.html';
	var contentType = mimes.miMe(req, function(err, result){});

	fs.readFile(filePath, function(error, content) {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
	});
});

// We need a server which relies on our router
var server = http.createServer(function (req, res) { 
  handler = router.route(req);
  handler.process(req, res);
});

// Start it up
server.listen(8000);
console.log("Server started: http://127.0.0.1:8000/");
