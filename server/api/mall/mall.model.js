'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MallSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Mall', MallSchema);