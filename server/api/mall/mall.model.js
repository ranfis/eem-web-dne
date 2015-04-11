'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MallSchema = new Schema({
  id: Number,
  name: String,
  address:String,
  location: {}
});

module.exports = mongoose.model('Mall', MallSchema);
