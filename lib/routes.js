'use strict';

var path = require('path');

var getTrainerData = require('./handlers/get_trainer_data.js');

module.exports = [
  {
  method: 'GET',
      path: '/{param*}',
      config: {
        description: 'return the landing page',

        handler: {
          directory: {
            path: 'public',
            listing: true
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/trainer',
      handler: getTrainerData
    }
  ]
