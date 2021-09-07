import { Observable } from './observable.js'

export class Subject extends Observable {
  closed = false
  observers = []

  unsubscribe() {
    this.isStopped = this.closed = true
    this.observers = null
  }

  next(value) {
    this._throwIfClosed()
    if (!this.isStopped) {
      const copy = this.observers.slice()
      for (const observer of copy) {
        observer.next(value)
      }
    }
  }

  error(err) {
    this._throwIfClosed()
    if (!this.isStopped) {
      this.hasError = this.isStopped = true
      this.thrownError = err
      const { observers } = this
      while (observers.length) {
        observers.shift().error(err)
      }
    }
  }

  complete() {
    this._throwIfClosed()
    if (!this.isStopped) {
      this.isStopped = true
      const { observers } = this
      while (observers.length) {
        observers.shift().complete()
      }
    }
  }

  subscribe(subscriber) {
    const len = this.observers.push(subscriber)
    return {
      unsubscribe: () => {
        this.observers.splice(len - 1, 1)
      }
    }
  }

  _throwIfClosed() {
    if (this.closed) {
      throw new Error('Subscription closed!')
    }
  }
}
