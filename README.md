Nosy Neighbor
=============

Listen in on what event emitters are doing.

Usage
-----

```javascript

var callback = function(event, args) {
  // Do something
}

var emitter1 = new EventEmitter();
    emitter2 = new EventEmitter();

var neighbor = new NosyNeighbor(callback);

neighbor.peek(emitter1);
neighbor.peek(emitter2);

```

When you emit an event.

```javascript

emitter1.emit('msg', 'brandon', 'farmer');

```

callback with be called with 'msg' as event and ['brandon', 'farmer'] as
args.

It will also listen to both emitters, so emitting from emitter2 will result in the same outcome.
