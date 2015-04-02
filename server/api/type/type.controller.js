'use strict';

var _ = require('lodash');
var Type = require('./type.model');

// Get list of types
exports.index = function(req, res) {
  Type.find(function (err, types) {
    if(err) { return handleError(res, err); }
    return res.json(200, types);
  });
};

// Get a single type
exports.show = function(req, res) {
  Type.findById(req.params.id, function (err, type) {
    if(err) { return handleError(res, err); }
    if(!type) { return res.send(404); }
    return res.json(type);
  });
};

// Creates a new type in the DB.
exports.create = function(req, res) {
  Type.create(req.body, function(err, type) {
    if(err) { return handleError(res, err); }
    return res.json(201, type);
  });
};

// Updates an existing type in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Type.findById(req.params.id, function (err, type) {
    if (err) { return handleError(res, err); }
    if(!type) { return res.send(404); }
    var updated = _.merge(type, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, type);
    });
  });
};

// Deletes a type from the DB.
exports.destroy = function(req, res) {
  Type.findById(req.params.id, function (err, type) {
    if(err) { return handleError(res, err); }
    if(!type) { return res.send(404); }
    type.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}