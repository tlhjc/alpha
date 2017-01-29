var Hapi  = require('hapi');
var Inert = require('inert');
var HapiPostgresConnection = require('hapi-postgres-connection');
var hoek = require('hoek');

var routes = require('./routes.js');

// exports.init = function(port, next) {

  var server = new Hapi.Server();
  server.connection({port: 5555});
  server.register([
    Inert,
    HapiPostgresConnection
  ], function(err) {
    // if(err) {
    //   return next(err);
    // }

    server.route(routes);

    server.start(function (error) {
      hoek.assert(!error, error);
      console.log('Visit: http://localhost:' + server.info.port + '/');
    });
  });



  module.exports = server;
// };

// exports.init();
