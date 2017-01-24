var path = require('path');

module.exports = {
  miMe: function(request, callback) { 
	// More info for all mime type --> https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types

    var filePath = request.url;
    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.woff':
            contentType = 'application/font-woff';
            break;
        case '.ttf':
            contentType = 'application/font-ttf';
            break;
 

 
    }
	console.log("mimeTypes: " + contentType);
    contentType = contentType || 'application/octect-stream';
    callback(contentType);
 
  },
};
