# Overview

Find [Installation instructions](/guide/#installation) in the guide.

## Schemas

InTween can interpolate between states containing many types. Most of the
time, it *just works<sup>TM</sup>* but sometimes you'll want more control
over how data is transformed. This is where Schemas come into play.

A schema can be implicitly created from a simple object that specifies
starting values:

```js
// implicit schema definition
const schema = {
  x: 0,
  y: 1,
  text: 'Hello World!'
}
Tween.create(schema)
```

This same schema defined explicitly would be:

```js
// explicit schema definition
const schema = {
  x: {
    type: Number,
    value: 0,
    interpolator: 'linear'
  },
  y: {
    type: Number,
    value: 1,
    interpolator: 'linear'
  },
  text: {
    type: String,
    value: 'Hello World!',
    interpolator: 'string'
  }
}
Tween.create(schema)
```

You can mix and match implicit and explicit definitions to get fine grained
control over how InTween handles your states.

```js
// mix and match
const schema = {
  x: 0,
  y: 1,
  angle: {
    value: 90,
    interpolator: 'degrees'
  },
  text: {
    type: String,
    value: 'Hello',
    interpolator: (from, to, t) => {
      const p = Math.floor(to.length * t)
      // get an "overwrite" effect
      return to.substr(0, p) + from.substr(p)
    }
  },
  custom: {
    type: 'my-custom-type', // use registerType() first...
    value: new AwesomeObject(11)
  }
}
Tween.create(schema)
```

## Times

Times are measured in milliseconds, however many functions and methods
accept times specified as strings in a few different formats:

```js
"##:##" // minutes:seconds
"##:##:##" // hours:minutes:seconds
"#.#s" // # of seconds
"#.#m" // # of minutes
"#.#h" // # of hours
// durations can be expressed as percentages
"#.#%" // percentage of time between two frames
```
