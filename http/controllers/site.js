const fs = require("fs");

exports.index = (req, res) => {
    fs.readFile("./views/index.html", (error, data) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
};

exports.about = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>This is the about page</h1>');
};

