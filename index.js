/*
  Application Startup
  ===================
 */

var restify = require('restify')
  , routes = require('./config/routes')
  , settings = require('./config')

var server = restify.createServer({
  name: 'Web Service',
  version: '1.0.0'
})

/*
  Middleware/Plugins
 */
server.use(restify.CORS())
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.gzipResponse())

// Routing
routes(server)

// Start server
server.listen(settings.port, function () {
  console.log('%s listening at %s', server.name, server.url)
})