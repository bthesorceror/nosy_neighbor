function NosyNeighbor(callback) {
  this.callback = callback;
}

NosyNeighbor.prototype.onEvent = function(callback) {
  this.callback = callback
}

NosyNeighbor.prototype.peek = function(emitter) {
  var self = this,
      emit = emitter.emit;

  emitter.emit = function() {
    var args = Array.prototype.splice.call(arguments, 0),
        event = args.splice(0, 1)[0];
    self.callback && self.callback(event, args);
    emit.apply(emitter, [event].concat(args));
  }

  return this;
}

module.exports = NosyNeighbor;

