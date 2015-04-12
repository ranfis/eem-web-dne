'use strict';

var _ = require('lodash');
var Offer = require('./offer.model');
var Store = require('../store/store.model');


var findByLocation = function(lon,lat,distance,callback){
  if(!distance){
    distance = 0;
  }
  lon = +lon;
  lat = +lat;
  distance = +distance;
  var filter ={
    "mall.location": {
      "$near": {
        "$geometry": {
          "type": "Point",
          "coordinates": [
            lon,
            lat
          ]
        },
        "$maxDistance": distance
      }
    }
  }

  Offer.find(filter,callback);
}

// Get list of offers
exports.index = function(req, res) {
  var lon = req.param("lon");
  var lat = req.param("lat");
  var distance = req.param("distance");
  var callback = function (err, offers) {
    if(err) { return handleError(res, err); }
    return res.json(200, offers);
  };

  if(lon && lat){
    findByLocation(lon,lat,distance,callback);
  }
  else{
    Offer.find(callback);
  }
};

// Get a single offer
exports.show = function(req, res) {
  Offer.findById(req.params.id, function (err, offer) {
    if(err) { return handleError(res, err); }
    if(!offer) { return res.send(404); }
    return res.json(offer);
  });
};

// Creates a new offer in the DB.
exports.create = function(req, res) {
  var user = req.user;
  var store = Store.findById(user.storeId, function (err, store) {
    req.body.store = store;
    Offer.create(req.body, function(err, offer) {
      if(err) { return handleError(res, err); }
      return res.json(201, offer);
    });
  });



};

// Updates an existing offer in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Offer.findById(req.params.id, function (err, offer) {
    if (err) { return handleError(res, err); }
    if(!offer) { return res.send(404); }
    var updated = _.merge(offer, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, offer);
    });
  });
};

// Deletes a offer from the DB.
exports.destroy = function(req, res) {
  Offer.findById(req.params.id, function (err, offer) {
    if(err) { return handleError(res, err); }
    if(!offer) { return res.send(404); }
    offer.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
