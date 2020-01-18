const site = require('../controllers/site');

exports.routes = {
    'GET': {
        '/': site.index,
        '/about': site.about
    }
};
