const fs = require("fs");
const url = require("url");

const web = require("./app/http/routes/web");
const api = require("./app/http/routes/api");

/**
 * @type string
 */
const API_ROUTE = "api";

/**
 * @type string
 */
const DIST_ROUTE = "dist";

/**
 * @type string
 */
const PUBLIC_ROUTE = "public";

/**
 * @type Object
 */
const EXTENSIONS = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "png": "image/png",
    "gif": "image/gif",
    "jpg": "image/jpeg"
};

exports.router = (req, res) => {
    const baseURI = url
        .parse(req.url, true);

    let pathname = baseURI.pathname;
    const segments = pathname.substr(1).split("/");

    let routes = null;
    let route = null;
    switch (segments[0]) {
        case API_ROUTE:
            routes = api;
            pathname = pathname.replace(`/${API_ROUTE}`, "");
            if (pathname === "") {
                pathname = "/";
            }

            route = routes.routes[req.method][pathname];
            if (route === undefined) {
                res.writeHead(404);
                res.end("Content not found!");
            } else {
                route(req, res);
            }

            break;
        case PUBLIC_ROUTE:
            if (segments[1] === DIST_ROUTE) {
                const file = segments[2];
                const extension = file.split(".")[1];

                if (fs.existsSync(__dirname + `/public/dist/${file}`)) {
                    fs.readFile(
                        __dirname + `/public/dist/${file}`,
                        (error, data) => {
                            res.writeHead(200, {'Content-type': EXTENSIONS[extension]});
                            res.write(data);
                            res.end();
                        }
                    );
                } else {
                    res.writeHead(404);
                    res.end("Content not found!");
                }
            }

            break;
        default:
            routes = web;

            route = routes.routes[req.method][pathname];
            if (route === undefined) {
                res.writeHead(404);
                res.end("Content not found!");
            } else {
                route(req, res);
            }
    }
};
