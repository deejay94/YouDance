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
  url1: {
    type: String,
    required: true
  },
  url2: {
    type: String
  },
  url3: {
    type: String
  },
  url4: {
    type: String
  },
  url5: {
    type: String
  }
})

module.exports = DanceSchema
