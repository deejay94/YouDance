const mongoose = require('mongoose')

// create the schema
const DanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = DanceSchema
