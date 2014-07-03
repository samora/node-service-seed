/*
  Routes
  ======
 */

var controllers = require('../app/controllers')

module.exports = function (server) {
  // Place your routes here

  server.get('/', controllers.home.index)
}