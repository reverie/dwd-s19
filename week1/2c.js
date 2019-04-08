// Write a command-line JavaScript program that reads a plain text file and generates
// an HTML page based on its contents. For example, consider each line in the text file
// to be a headline, and generate a mock newspaper homepage.

var fs = require('fs');

var FILENAME = "2c.html";

var input = fs.readFileSync("headlines.txt", "utf8");
var headlines = input.split("\n");
fs.writeFileSync(FILENAME, "<html><head></head><body>");
for (var i=0; i<headlines.length; i++) {
  fs.appendFileSync(FILENAME, "<h1>" + headlines[i] + "</h1>");
}
fs.appendFileSync(FILENAME, "</body></html>");