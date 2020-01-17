exports.routes = {
	'GET': {
		'/': (req, res) => {
			// fetch data from db and respond as JSON
			res.writeHead(200, {'Content-type': 'application/json'});
			res.end(JSON.stringify(req.queryParams));
		}
	}
}