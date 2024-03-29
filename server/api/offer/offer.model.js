'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfferSchema = new Schema({
  id: Number,
  title: String,
  details: String,
  type: Number, // I.e 2x1, limited time, etc.
  store: {
    id: Number,
    name: String
  },
  image:String,
  mall:Number,
  categories: [Number], // I.e Shoes, Women's clothes, Food, etc.
  expirationDate: Date,
  active: Boolean
});

module.exports = mongoose.model('Offer', OfferSchema);
