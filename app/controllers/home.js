

module.exports = {
  index: index
}


function index (req, res, next) {
  res.send({message: 'Web Service powered by Restify and Node.js'})
  return next()
}