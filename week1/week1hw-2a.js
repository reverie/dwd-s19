// Write a command-line JavaScript program that takes a URL as a command-line argument,
// makes a request to that host, and prints the HTML response.

var url = process.argv[2];
var request = require('request');

request(url, function (error, response, body) {
  console.log(body);
});