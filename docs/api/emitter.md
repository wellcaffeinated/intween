# class Emitter

```js
new Emitter() // -> Emitter
```

Mainly used as an interface for classes that emit events.

## Emitter.fromEvent()

```js
emitter.fromEvent(topic) // -> Observable
emitter.fromEvent(topic, priority) // -> Observable
```

Get an observable of a specific topic.

**Params**

* `{String} topic` - The topic name
* `{Number} priority` - The priority of the callback (higher is earlier)

## Emitter.emit()

```js
emitter.emit(topic, data) // -> this
```

Publish data to a topic.

**Params**

* `{String} topic` - The topic name
* `{any} data` - The data to send

## Emitter.off()

```js
emitter.off(true) // -> this
emitter.off(topic, callback) // -> this
emitter.off(topic, callback, scope) // -> this
emitter.off(topic, callback, scope) // -> this
emitter.off(topicConfig) // -> this
```

Unsubscribe from topics. Specify `true` to remove all listeners for all topics.

* `{String} topic` - The topic name
* `{Object} topicConfig` - A config with key/value pairs of `{ topic: callbackFn, ... }`
* `{Function} callback` - The original callback function. Specify `true` to remove all
  listeners for specified topic
* `{Object} scope` - The scope the callback was bound to upon subscription.
* `{Number} priority` - The priority of the callback (higher is earlier)

## Emitter.on()

```js
emitter.on(topic, callback) // -> this
emitter.on(topic, callback, scope) // -> this
emitter.on(topic, callback, scope, priority) // -> this
emitter.on(topicConfig, scope, priority) // -> this
```

Subscribe callback(s) to a topic(s).

**Params**

* `{String} topic` - The topic name
* `{Object} topicConfig` - A config with key/value pairs of `{ topic: callbackFn, ... }`
* `{Function} callback` - The callback function (if not using Object as previous argument)
  * `callback: (data, event) => {}`
  * `{Mixed} data` - The data sent from the call to `.emit()`
  * `{Object} event` - Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
* `{Object} scope` - The scope to bind callback to
* `{Number} priority` - The priority of the callback (higher is earlier)

## Emitter.one()

```js
emitter.one(topic, callback) // -> this
emitter.one(topic, callback, scope) // -> this
emitter.one(topicConfig, scope) // -> this
```

Subscribe callback(s) to a topic(s) for a single emission.

**Params**

* `{String} topic` - The topic name
* `{Object} topicConfig` - A config with key/value pairs of `{ topic: callbackFn, ... }`
* `{Function} callback` - The callback function (if not using Object as previous argument)
  * `callback: (data, event) => {}`
  * `{Mixed} data` - The data sent from the call to `.emit()`
  * `{Object} event` - Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
* `{Object} scope` - The scope to bind callback to
