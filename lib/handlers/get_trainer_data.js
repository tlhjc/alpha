'use strict';

require('env2')('./.env');

module.exports = function getTrainerData (request, reply) {
  var instagram_handle = request.query.handle;
  console.log(instagram_handle);
  var query = `SELECT * FROM trainers  WHERE (instagram_handle = '${instagram_handle}')`;

  request.pg.client.query(query, function (er, result) {
    var testData = result.rows[0];
    console.log('---------', testData);
    reply(testData);
  });
}
