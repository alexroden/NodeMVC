exports.routes = {
	'GET': {
		'/': (req, res) => {
			res.writeHead(200, {'Content-type': 'text/html'});
			res.end('<h1>Hello Router</h1>');
		},
		'/about': (req, res) => {
			res.writeHead(200, {'Content-type': 'text/html'});
			res.end('<h1>This is the about page</h1>');
		}
	}
};