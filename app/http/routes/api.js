const api = require("../controllers/api");

exports.routes = {
    'GET': {
        '/': api.index
    }
};
