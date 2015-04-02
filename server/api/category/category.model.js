'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  id: Number,
  description: String
});

module.exports = mongoose.model('Category', CategorySchema);
