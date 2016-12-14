var Hapi  = require('hapi');
var Inert = require('inert');
var hoek = require('hoek');

var routes = require('./routes.js');

exports.init = function(port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register(Inert, function(err) {
    if(err) {
      return next(err);
    }

    server.route(routes);

    server.start(function(err) {
      if (err) console.log('error starting server: ', err);
      return next(err, server);
    });
  });

    server.start(function (error) {
      hoek.assert(!error, error);
      server.log('Visit: http://localhost:' + server.info.port + '/');
    });

  module.exports = server;
};
