'use strict';

var path = require('path');

module.exports = [{
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
}]
