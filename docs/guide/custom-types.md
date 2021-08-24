# Mutating arbitrary data types with interpolators

In order to use arbitrary data in Copilot, it's as simple
as specifying the interpolator function that transforms between
a start and end value.

```js
// from: the initial value
// to: the final value
// progress: A floating point number between 0 and 1 that specifies
//   how far along we are in the interpolation
function myInterpolator( from, to, progress ){
  // magic here...
  return inBetween
}
```

The most basic interpolator (used by this library), is one that takes
two numbers and interpolates between them.

```js
function lerp( from, to, t ){
  return from * ( 1 - t ) + to * t
}

lerp( 0, 4, 0.75 ) // => 3
```

::: warning
When defining an interpolator, don't worry about [easing](https://stackoverflow.com/questions/8316882/what-is-an-easing-function). Easing is separate from interpolation and the
included easing functions can be used on arbitrary data.

In short: define your interpolator without easing in mind.
:::

## Defining a custom interpolator

To define a custom interpolator, you can specify it inside the schema definition
when setting up your Copilot instance.

```js
function myCustomInterpolator( from, to, t ){
  // return in between value
}

let manager = Copilot({
  value: {
    type: Object
    , default: myDefaultValue
    // set our custom interpolator for our custom data types
    , interpolator: myCustomInterpolator
  }
})
```

## Defining a global reusable type

If you intend to use many properties with the same interpolator, it
is easier to define a global type that uses that interpolator by default.

```js
Copilot.registerType({
  type: 'my-type'
  , default: myTypeDefault
  , interpolator: myCustomInterpolator
})
```

Now, we don't need to worry about the interpolator again!

```js
let manager = Copilot({
  value: {
    type: 'my-type'
    // , default: localDefault
  }
  , anotherValue: {
    type: 'my-type'
  }
})
```

## Example: Mutating colors

To mutate colors, I suggest using [chroma.js][chroma]

### Demo

<label>Color Display</label>
<div id="box"></div>

<div id="player-wrap"></div>

<style>
#box {
  width: 50px;
  height: 50px;
  background: white;
  border: 1px solid #222;
}
</style>

<ClientOnly>
  <demo/>
</ClientOnly>

<script>
export default {
  name: 'demo',
  beforeMount(){
    import('./colors.js')
  }
}
</script>

#### Code

<<< @/docs/guide/colors.js


[chroma]: https://gka.github.io/chroma.js/
