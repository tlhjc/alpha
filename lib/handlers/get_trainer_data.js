'use strict';

require('env2')('./.env');

module.exports = function getTrainerData (request, reply) {
  console.log(request.query.id);
  request.pg.client.query('SELECT * FROM trainers WHERE (id = 1)', function (er, result) {
    var testData = result.rows[0];
    console.log('---------', testData);
    reply(testData);
  });
}
