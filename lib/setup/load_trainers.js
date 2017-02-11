require('env2')('./config.env');
var assert = require('assert');
var pg = require('pg');
var Hoek = require('hoek');

function create_tables (callback) {
  var client = new pg.Client(process.env.DATABASE_URL);

  client.connect(function(err) {
    assert(!err); // die if we cannot connect
    var file = require('path').resolve(__dirname + '/load_trainers.sql');
    console.log(file);
    var query = require('fs').readFileSync(file, 'utf8').toString();
    console.log(query);
    client.query(query, function(err, result) {
      console.log('load trainers error: ', err);
      client.end(); // close connection to database
      return callback(err, result);
    });
  });
}

create_tables(Hoek.ignore);
