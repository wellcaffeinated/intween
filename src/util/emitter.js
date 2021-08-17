import { Observable } from '@/rx/observable'
import { sortedIndex } from '@/util'

const defaultPriority = 1

function getPriority(val) {
  return val._priority_
}

export class Emitter extends Observable {
  constructor(subscriber) {
    super(subscriber)
    // ensure topics hash is initialized
    this._topics = this._topics || (this._topics = {})
  }

  fromEvent(topic, priority){
    return new Observable(sink => {
      const callback = v => sink.next(v)
      this.on(topic, callback, priority)
      return () => {
        this.off(topic, callback)
      }
    })
  }

  /**
  * EventEmitter#on( topic, fn( data, event )[, scope, priority] ) -> this
  * EventEmitter#on( topicConfig[, scope, priority] ) -> this
  * - topic (String): The topic name
  * - topicConfig (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
  * - fn (Function): The callback function (if not using Object as previous argument)
  * - data (Mixed): The data sent from the call to `.emit()`
  * - event (Object): Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
  * - scope (Object): The scope to bind callback to
  * - priority (Number): The priority of the callback (higher is earlier)
  *
  * Subscribe callback(s) to a topic(s).
  **/
  on(topic, fn, scope, priority) {
    // check if we're subscribing to multiple topics
    // with an object
    if (typeof topic === 'object') {

      for (const t in topic) {
        this.on(t, topic[t], fn, scope)
      }

      return this
    }

    const listeners = this._topics[topic] || (this._topics[topic] = [])
    const orig = fn

    if (typeof scope === 'object') {

      fn = fn.bind(scope)
      fn._bindfn_ = orig
      fn._one_ = orig._one_
      fn._scope_ = scope

    } else if (priority === undefined) {

      priority = scope
    }

    fn._priority_ = priority === undefined ? defaultPriority : priority

    const idx = sortedIndex(listeners, fn, getPriority)

    listeners.splice(idx, 0, fn)
    return this
  }

  /**
  * EventEmitter#off( topic, fn[, scope] ) -> this
  * EventEmitter#off( topicCfg ) -> this
  * - topic (String): topic The topic name. Specify `true` to remove all listeners for all topics
  * - topicCfg (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
  * - fn (Function): The original callback function. Specify `true` to remove all listeners for specified topic
  * - scope (Object): The scope the callback was bound to. This is important if you are
  *   binding methods that come from object prototypes.
  *
  * Unsubscribe callback(s) from topic(s).
  **/
  off(topic, fn, scope) {
    if (topic === true) {
      // purge all listeners
      this._topics = {}
      return this
    }

    // check if we're subscribing to multiple topics
    // with an object
    if (typeof topic === 'object') {

      for (const t in topic) {

        this.off(t, topic[t])
      }

      return this
    }

    const listeners = this._topics[topic]

    if (!listeners) {
      return this
    }

    if (fn === true) {
      // purge all listeners for topic
      this._topics[topic] = []
      return this
    }

    for (let i = 0, l = listeners.length; i < l; i++) {
      const listn = listeners[i]

      if (
        (listn._bindfn_ === fn || listn === fn) &&
        ((!scope) || listn._scope_ === scope) // check the scope too if specified
      ) {
        listeners.splice(i, 1)
        break
      }
    }

    return this
  }

  /**
  * EventEmitter#emit( topic[, data] ) -> this
  * - topic (String): The topic name
  * - data (Mixed): The data to send
  *
  * Publish data to a topic.
  **/
  emit(topic, data) {

    const listeners = this._topics[topic]
    let l = listeners && listeners.length

    if (!l) {
      return this
    }

    const e = {}
    // event data
    e.topic = topic

    // reverse iterate so priorities work out correctly
    while (l--) {

      const handler = listeners[l]
      handler(data, e)

      // if _one_ flag is set, the unsubscribe
      if (handler._one_) {
        listeners.splice(l, 1)
      }
    }

    return this
  }

  /**
  * EventEmitter#one( topic, fn( data, event )[, scope, priority] ) -> this
  * EventEmitter#one( topicConfig[, scope, priority] ) -> this
  * - topic (String): The topic name
  * - topicConfig (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
  * - fn (Function): The callback function (if not using Object as previous argument)
  * - data (Mixed): The data sent from the call to `.emit()`
  * - event (Object): Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
  * - scope (Object): The scope to bind callback to
  * - priority (Number): The priority of the callback (higher is earlier)
  *
  * Subscribe callback(s) to a topic(s), but only ONCE.
  **/
  one(topic, fn, scope) {

    // check if we're subscribing to multiple topics
    // with an object
    if (typeof topic === 'object') {

      for (const t in topic) {

        this.one(t, topic[t], fn, scope)
      }

      return this
    }

    // set the _one_ flag
    fn._one_ = true
    this.on(topic, fn, scope)

    return this
  }
}
