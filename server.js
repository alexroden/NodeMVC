const http = require("http");
const router = require("./router");

// const url = require("url");

http.createServer(router.router).listen(8080, () => {
	console.log("Running on port 8080");
});