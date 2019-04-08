// Write a command-line JavaScript program that generates a valid HTML document, writing it to a file. 
// Try to include randomness or some other external source of data.

var fs = require('fs');

var html = "<html><head></head><body><h1>We're #1</h1></body></html>";
// var html = "<html><head></head><body><h1>We're #" + Math.random() + "</h1></body></html>";
fs.writeFile('2b.html', html, function(){});