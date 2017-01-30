'use strict';

require('env2')('./.env');

module.exports = function getTrainerData (request, reply) {
  request.pg.client.query('SELECT * FROM test WHERE (id = 1)', function (er, result) {
    var testData = result.rows[0];
    reply(testData);
  });
}
