const url = require("url");

// Routes
const web = require("./http/routes/web");
const api = require("./http/routes/api");

const API_ROUTE = "api";

exports.router = (req, res) => {
    const baseURI = url
        .parse(req.url, true);

    let pathname = baseURI.pathname;
    const segments = pathname.substr(1).split("/");

    let routes = null;
    if (segments[0] === API_ROUTE) {
        routes = api;
        pathname = pathname.replace(`/${API_ROUTE}`, "");
        if (pathname === "") {
            pathname = "/";
        }
    } else {
        routes = web;
    }

    const route = routes.routes[req.method][pathname];
    if (route === undefined) {
        res.writeHead(404);
        res.end("Content not found!");
    } else {
        route(req, res);
    }
};