/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Type = require('./type.model');

exports.register = function(socket) {
  Type.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Type.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('type:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('type:remove', doc);
}