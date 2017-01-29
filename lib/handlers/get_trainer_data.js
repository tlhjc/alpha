'use strict';

module.exports = function getTrainerData (request, reply) {
  console.log(request);
  request.pg.client.query('SELECT * FROM test WHERE (id = 1)', function (er, result) {
    var testData = result.rows[0];
    console.log(er);
    console.log(result.rows[0]);
    reply(testData);
  });
}
