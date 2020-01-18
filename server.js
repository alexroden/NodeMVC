const http = require("http");
const router = require("./router");

http.createServer(router.router).listen(8080, () => {
<<<<<<< HEAD
    console.log("Running on port 8080");
=======
	console.log("Running on port 8080");
>>>>>>> 0a90e0fbdc0bcafc477c4ba21a5249e3ba5dedcb
});
