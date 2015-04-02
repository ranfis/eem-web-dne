'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  hours:{
    openTime: Number,
    close: Number
  },
  phone: String,
  rating: Number,
  location:String, // Store location in Mall, rather than coordinates //TODO: Rename to directions?
  mall: Number,
  active: Boolean
});

module.exports = mongoose.model('Store', StoreSchema);
