'use strict';

var _ = require('lodash');
var Mall = require('./mall.model');

// Get list of malls
exports.index = function(req, res) {
  Mall.find(function (err, malls) {
    if(err) { return handleError(res, err); }
    return res.json(200, malls);
  });
};

// Get a single mall
exports.show = function(req, res) {
  Mall.findById(req.params.id, function (err, mall) {
    if(err) { return handleError(res, err); }
    if(!mall) { return res.send(404); }
    return res.json(mall);
  });
};

// Creates a new mall in the DB.
exports.create = function(req, res) {
  Mall.create(req.body, function(err, mall) {
    if(err) { return handleError(res, err); }
    return res.json(201, mall);
  });
};

// Updates an existing mall in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mall.findById(req.params.id, function (err, mall) {
    if (err) { return handleError(res, err); }
    if(!mall) { return res.send(404); }
    var updated = _.merge(mall, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mall);
    });
  });
};

// Deletes a mall from the DB.
exports.destroy = function(req, res) {
  Mall.findById(req.params.id, function (err, mall) {
    if(err) { return handleError(res, err); }
    if(!mall) { return res.send(404); }
    mall.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}