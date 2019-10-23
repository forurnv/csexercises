
const http = require("http");
const url = require("url");

http.createServer((request,response) => {

	if (request.url === "/") {

	// Set the response HTTP header with HTTP status and content 
	response.writeHead(200, {"content-type": "text/html"});

	// send the response body "hello world"
	response.end("<h1>Hello World!</h1>");

	// or else send the response body "to the About page"
	} else if (request.url === "/about") {
	response.writeHead(200, {"content-type": "text/html"});
	response.end("<h1>About Page</h1>");
	} else if (request.url === "/api") {

		response.writeHead(200, {"content-type": "application/json"});

			const obj = {
				firstname: "john",
				lastname: "wick"
			}
		
		response.end(JSON.stringify(obj));

	}


	console.log("request received");

	// pass in a function as the 2nd argument to listen() so that we log a Message
}).listen(8080, () => {
	console.log("Server running on port 8080")
});



