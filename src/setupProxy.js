const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/backend/api', { target: 'http://localhost:8080/' }));
};