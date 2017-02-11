'use strict';

require('env2')('./.env');

module.exports = function getVideos (request, reply) {
  request.pg.client.query('SELECT * FROM videos', function (er, result) {
    var testData = result.rows[0];
    console.log('---------', testData);
    reply(testData);
  });
}
