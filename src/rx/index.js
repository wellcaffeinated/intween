import { pipe } from './pipe'
import { Observable } from './observable'
import { Subject } from './subject'

export * from './pipe'
export * from './observable'
export * from './subject'

export const map = fn => source => new Observable(sink =>
  source.subscribe({
    next(value) {
      try {
        value = fn(value)
        sink.next(value)
      } catch (e) {
        sink.error(e)
      }
    }
    , error(e) { sink.error(e) }
    , complete() { sink.complete() }
  })
)

// Emits all values from all inputs in parallel
// Copyright (c) 2018 zenparsing (Kevin Smith)
export function merge(...sources) {
  return new Observable(observer => {
    if (sources.length === 0) {
      return Observable.from([])
    }

    let count = sources.length;

    const subscriptions = sources.map(source => Observable.from(source).subscribe({
      next(v) {
        observer.next(v);
      }
      , error(e) {
        observer.error(e);
      }
      , complete() {
        if (--count === 0){
          observer.complete();
        }
      }
    }));

    return () => subscriptions.forEach(s => s.unsubscribe());
  });
}

// Emits arrays containing the most current values from each input
// Copyright (c) 2018 zenparsing (Kevin Smith)
export function combineLatest(...sources) {
  return new Observable(observer => {
    if (sources.length === 0){
      return Observable.from([])
    }

    let count = sources.length;
    let seen = new Set();
    let seenAll = false;
    const values = sources.map(() => undefined);

    const subscriptions = sources.map((source, index) => Observable.from(source).subscribe({
      next(v) {
        values[index] = v;

        if (!seenAll) {
          seen.add(index);
          if (seen.size !== sources.length){
            return
          }
          seen = null;
          seenAll = true;
        }

        observer.next(Array.from(values));
      }
      , error(e) {
        observer.error(e);
      }
      , complete() {
        if (--count === 0){
          observer.complete()
        }
      }
    }));

    return () => subscriptions.forEach(s => s.unsubscribe());
  });
}

// Emits arrays containing the matching index values from each input
// Copyright (c) 2018 zenparsing (Kevin Smith)
export function zip(...sources) {
  return new Observable(observer => {
    if (sources.length === 0) {
      return Observable.from([])
    }

    const queues = sources.map(() => []);

    function done() {
      return queues.some((q, i) => q.length === 0 && subscriptions[i].closed);
    }

    const subscriptions = sources.map((source, index) => Observable.from(source).subscribe({
      next(v) {
        queues[index].push(v);
        if (queues.every(q => q.length > 0)) {
          observer.next(queues.map(q => q.shift()));
          if (done()){
            observer.complete();
          }
        }
      }
      , error(e) {
        observer.error(e);
      }
      , complete() {
        if (done()){
          observer.complete()
        }
      }
    }));

    return () => subscriptions.forEach(s => s.unsubscribe());
  });
}

export const spreadCombineLatest = (...operators) => source => new Observable(sink => {
  const subject = new Subject()
  const observables = operators.map(o => o(subject))
  const sub = combineLatest(...observables).subscribe(sink)
  const sub2 = source.subscribe(subject)

  return () => {
    sub.unsubscribe()
    sub2.unsubscribe()
  }
})

export const spreadAssign = (...operators) => source =>
  pipe(
    map(results => Object.assign({}, ...results))
  )(spreadCombineLatest(...operators)(source))

