const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const _ = require('lodash')

//create app
const app = express()

// add middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// routes


// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/youdance');
mongoose.connection.once('open', function() {

  // Load models
  app.models = require('./models/index')
  // Load routes
  const routes = require('./routes')

  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route))
  })

  console.log('Listening on port 3000...');
  app.listen(3000);
});
