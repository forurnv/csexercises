

const http = require("http");
const url = require("url")

http.createServer((request,response) => {

	let parsedAddress = url.parse(request.url, true);
	console.log






	// Set the response HTTP header with HTTP status and content 
	response.writeHead(200, {"content-type": "text/html"});

	// console.log(request.url);


	// send the response body "hello world"
	response.end("<h1>Hello World!</h1><p>you requested:" + request.url);

	console.log("request received");

	// pass in a function as the 2nd argument to listen() so that we log a Message
}).listen(8080, () => {
	console.log("Server running on port 8080")
});






