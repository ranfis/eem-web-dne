'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TypeSchema = new Schema({
  id: Number,
  description: String
});

module.exports = mongoose.model('Type', TypeSchema);
