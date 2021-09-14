# Easing

All easing functions are contained in this namespace.

**Easing Function Tester**

<EasingDemo />

## Pre-defined Easing Functions

<div class="easing-plot-list">
  <template v-for="easing in easings">
    <div class="easing-plot" :key="easing">
      <h5>{{easing}}</h5>
      <EasingPlot :easing="easing"/>
    </div>
  </template>
</div>

<script>
import { Easing } from 'intween'

const easings = Object.keys(Easing).filter(k => k.substring(0, 4) !== 'make')
easings.sort()

export default {
  data: () => ({
    easings
  })
}
</script>

<style>
.easing-plot-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.easing-plot h5 {
  margin-bottom: 1em;
}
</style>

## Easing Factory Functions

This set of functions is used to create easing functions.

### makeBackIn()

```js
makeBackIn(overshoot) // -> Function
```

**Params**

* `{Number} overshoot` - How much to back off

**Examples**

```js
Easing.makeBackIn(5)
```

<EasingPlot :easing="InTween.Easing.makeBackIn(5)"/>

### makeBackOut()

```js
makeBackOut(overshoot) // -> Function
```

**Params**

* `{Number} overshoot` - How much to back off

**Examples**

```js
Easing.makeBackOut(5)
```

<EasingPlot :easing="InTween.Easing.makeBackOut(5)"/>

### makeBackInOut()

```js
makeBackInOut(overshoot) // -> Function
```

**Params**

* `{Number} overshoot` - How much to back off

**Examples**

```js
Easing.makeBackInOut(5)
```

<EasingPlot :easing="InTween.Easing.makeBackInOut(5)"/>

### makeElasticIn()

```js
makeElasticIn(amplitude, period) // -> Function
```

**Params**

* `{Number} amplitude` - The amplitude of the elastic ease
* `{Number} period` - The period of the elastic ease

**Examples**

```js
Easing.makeElasticIn(0.01, 0.3)
```

<EasingPlot :easing="InTween.Easing.makeElasticIn(0.01, 0.3)"/>

### makeElasticOut()

```js
makeElasticOut(amplitude, period) // -> Function
```

**Params**

* `{Number} amplitude` - The amplitude of the elastic ease
* `{Number} period` - The period of the elastic ease

**Examples**

```js
Easing.makeElasticOut(0.01, 0.3)
```

<EasingPlot :easing="InTween.Easing.makeElasticOut(0.01, 0.3)"/>

### makeElasticInOut()

```js
makeElasticInOut(amplitude, period) // -> Function
```

**Examples**

```js
Easing.makeElasticInOut(0.01, 0.3)
```

<EasingPlot :easing="InTween.Easing.makeElasticInOut(0.01, 0.3)"/>


**Params**

* `{Number} amplitude` - The amplitude of the elastic ease
* `{Number} period` - The period of the elastic ease

### makeSteps()

```js
makeSteps(steps) // -> Function
```

**Params**

* `{Number} steps` - Integer number of steps to take

**Examples**

```js
Easing.makeSteps(7)
```

<EasingPlot :easing="InTween.Easing.makeSteps(7)"/>
