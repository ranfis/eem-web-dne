'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  hoursOpen:String,
  daysOpen:String,
  photo:String,
  phone: String,
  rating: Number,
  mall: String,
  facebook:String,
  active: Boolean
});

module.exports = mongoose.model('Store', StoreSchema);
