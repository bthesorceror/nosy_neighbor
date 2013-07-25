var tape         = require('tape'),
    EventEmitter = require('events').EventEmitter,
    NosyNeighbor = require('./index');

(function() {
  tape("listens to events emitted", function(t) {
    t.plan(2);

    var cb = function(event, args) {
      t.equal(event, 'message1', 'correct event');
      t.deepEqual(args, ['bob', 'johnson'], 'correct arguments');
    }

    var emitter = new EventEmitter();

    var neighbor = (new NosyNeighbor(cb)).peek(emitter);

    emitter.emit('message1', 'bob', 'johnson');
  });

  tape("listens to multiple emitters", function(t) {
    t.plan(4);

    var cb = function(event, args) {
      t.equal(event, 'message1', 'correct event');
      t.deepEqual(args, ['bob', 'johnson'], 'correct arguments');
    }

    var emitter1 = new EventEmitter(),
        emitter2 = new EventEmitter();

    var neighbor = (new NosyNeighbor(cb));

    neighbor.peek(emitter1);
    neighbor.peek(emitter2);

    emitter1.emit('message1', 'bob', 'johnson');
    emitter2.emit('message1', 'bob', 'johnson');
  });
})();
