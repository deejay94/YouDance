const restful = require('node-restful')

module.exports = function (app, route) {

  // set up controller for rest
  const rest = restful.model(
    'dance',
    app.models.dance
  ).methods(['get', 'put', 'delete', 'post'])

  rest.register(app, route)

  // return middleware
  return function (req, res, next){
    next()
  }
}
